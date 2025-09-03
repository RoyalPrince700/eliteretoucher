import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
        if (session?.user) {
          await fetchUserSubscription(session.user.id)
        }
      } catch (error) {
        console.error('Error getting initial session:', error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)

        if (session?.user) {
          await fetchUserSubscription(session.user.id)
        } else {
          setSubscription(null)
        }
      }
    )

    return () => {
      authSubscription.unsubscribe()
    }
  }, [])

  const fetchUserSubscription = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        console.error('Error fetching subscription:', error)
        return
      }

      setSubscription(data)
    } catch (error) {
      console.error('Error fetching subscription:', error)
    }
  }

  const signUp = async (email, password, userData = {}) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error signing up:', error)
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error signing in:', error)
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error signing out:', error)
      return { error }
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      })
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error resetting password:', error)
      return { error }
    }
  }

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      })
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      return { data: null, error }
    }
  }

  const updateProfile = async (updates) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: updates
      })
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating profile:', error)
      return { data: null, error }
    }
  }

  const value = {
    user,
    subscription,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    signInWithGoogle,
    updateProfile,
    fetchUserSubscription
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
