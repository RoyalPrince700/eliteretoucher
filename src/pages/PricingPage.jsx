import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Zap,
  Crown,
  Star,
  ArrowRight,
  Clock,
  Users,
  Image,
  Shield,
  Download,
  BarChart3,
  Settings,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeTab, setActiveTab] = useState('subscription');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const subscriptionPlans = [
    {
      name: "Silver Plan",
      monthlyPrice: 97,
      annualPrice: 82, // 15% discount
      images: 20,
      bestFor: "Freelancers, new photographers",
      notes: "Entry-level option to try the service.",
      popular: false,
      savings: "$73 (~43% off)",
      effectiveRate: "$4.85/image",
      retailValue: "$170",
      includes: [
        { type: "Natural", count: 10, value: "$50" },
        { type: "High-End", count: 8, value: "$80" },
        { type: "Magazine", count: 2, value: "$40" },
      ],
      features: [
        "Basic color correction",
        "Exposure adjustments",
        "Background cleanup",
        "Skin smoothing",
        "5-day turnaround time"
      ],
      icon: Star,
      color: "gray"
    },
    {
      name: "Gold Plan",
      monthlyPrice: 197,
      annualPrice: 167, // 15% discount
      images: 60,
      bestFor: "Busy portrait & fashion photographers",
      notes: "Highlight as Best Value.",
      popular: true,
      savings: "$303 (~61% off)",
      effectiveRate: "$3.28/image",
      retailValue: "$500",
      includes: [
        { type: "Natural", count: 30, value: "$150" },
        { type: "High-End", count: 25, value: "$250" },
        { type: "Magazine", count: 5, value: "$100" },
      ],
      features: [
        "All Silver features",
        "Advanced retouching",
        "Detail enhancement",
        "Object removal",
        "2-day turnaround time",
        "Priority support"
      ],
      icon: Zap,
      color: "amber"
    },
    {
      name: "Diamond Plan",
      monthlyPrice: 397,
      annualPrice: 337, // 15% discount
      images: 150,
      bestFor: "Brands, agencies, studios",
      notes: "High-volume plan, premium option.",
      popular: false,
      savings: "$878 (~69% off)",
      effectiveRate: "$2.65/image",
      retailValue: "$1,275",
      includes: [
        { type: "Natural", count: 75, value: "$375" },
        { type: "High-End", count: 60, value: "$600" },
        { type: "Magazine", count: 15, value: "$300" },
      ],
      features: [
        "All Gold features",
        "Premium retouching",
        "Complex edits",
        "Unlimited revisions",
        "Same-day turnaround",
        "Dedicated account manager",
        "Custom workflow integration"
      ],
      icon: Crown,
      color: "blue"
    }
  ];

  const payPerImageServices = [
    {
      category: "Portrait / Beauty Retouching",
      services: [
        { name: "Natural Retouch (Basic)", price: 5, desc: "simple clean-up, natural skin", icon: Image },
        { name: "High-End Retouch (Premium)", price: 10, desc: "detailed skin, tones, pro look", icon: Settings },
        { name: "Magazine Retouch (Luxury)", price: 20, desc: "editorial-level polish, advanced techniques", icon: Crown }
      ]
    },
    {
      category: "E-Commerce / Product Retouching",
      services: [
        { name: "Basic Product", price: 5, desc: "background removal + color correction", icon: Download },
        { name: "Premium Product", price: 10, desc: "background removal + shadows/reflections", icon: BarChart3 },
        { name: "Campaign Ready", price: 20, desc: "creative retouch, composites, lifestyle polish", icon: Zap }
      ]
    },
    {
      category: "Creative / Manipulation",
      services: [
        { name: "Advanced composites & manipulations", price: "Custom Quote", desc: "starts from $25/image", icon: Shield }
      ]
    }
  ];

  const faqData = [
    {
      id: 'subscription-work',
      question: 'How does the subscription work?',
      answer: 'Each month, you get a fresh allocation of images based on your plan. You can use these images for any of our retouching services, following the limits for each service type. Unused images can roll over up to 20% to the next month.'
    },
    {
      id: 'who-for',
      question: 'Who are these plans for?',
      answer: 'Our subscription plans aren\'t just for photographers — e-commerce brands, modeling agencies, and creative studios use EliteRetoucher to handle all their image needs every month.'
    },
    {
      id: 'turnaround-time',
      question: 'What\'s the turnaround time?',
      answer: 'Silver plan: 5 business days, Gold plan: 2-3 business days, Diamond plan: Same-day turnaround available. Rush services are available for an additional fee.'
    },
    {
      id: 'change-cancel',
      question: 'Can I change or cancel my plan?',
      answer: 'You can upgrade your plan at any time. To cancel, we require 30 days notice. Annual plans can be canceled with a prorated refund.'
    }
  ];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">EliteRetoucher</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary-600">Portfolio</a>
              <a href="#" className="text-primary-600 font-medium">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-primary-600">Contact</a>
              <a href="#" className="btn-primary">Client Login</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Professional Photo Retouching Pricing</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Choose the plan that fits your retouching needs. All plans include premium quality edits and fast turnaround times.
          </p>
        </motion.section>

        {/* Pricing Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="flex bg-gray-200 rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-md ${activeTab === 'subscription' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveTab('subscription')}
            >
              Subscription Plans
            </button>
            <button
              className={`px-6 py-2 rounded-md ${activeTab === 'pay-per-image' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              onClick={() => setActiveTab('pay-per-image')}
            >
              Pay Per Image
            </button>
          </div>
        </motion.div>

        {/* Subscription Plans */}
        {activeTab === 'subscription' && (
          <motion.section 
            className="mb-20"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div
              className="text-center mb-12"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Subscription Plans</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                Get the best value with our monthly subscription plans. Save up to 69% compared to individual image pricing.
              </p>
              
              <div className="mt-6 inline-flex bg-gray-200 rounded-lg p-1">
                <button
                  className={`px-4 py-2 rounded-md ${billingCycle === 'monthly' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setBillingCycle('monthly')}
                >
                  Monthly Billing
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${billingCycle === 'annual' ? 'bg-white shadow-sm' : 'bg-transparent'}`}
                  onClick={() => setBillingCycle('annual')}
                >
                  Annual Billing (Save 15%)
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {subscriptionPlans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                    className={`relative rounded-2xl shadow-lg overflow-hidden border-2 ${
                      plan.popular
                        ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border-blue-500'
                        : 'bg-white text-blue-900 border-blue-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg mr-3 ${
                          plan.popular ? 'bg-blue-500' : 'bg-blue-100'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            plan.popular ? 'text-white' : 'text-blue-600'
                          }`} />
                        </div>
                        <h3 className={`text-2xl font-bold ${
                          plan.popular ? 'text-white' : 'text-blue-900'
                        }`}>{plan.name}</h3>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-bold ${
                            plan.popular ? 'text-white' : 'text-blue-900'
                          }`}>
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                          </span>
                          <span className={`ml-2 ${
                            plan.popular ? 'text-blue-200' : 'text-blue-600'
                          }`}>/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                        </div>
                        <p className={`mt-1 ${
                          plan.popular ? 'text-blue-100' : 'text-blue-700'
                        }`}>{plan.images} images per month</p>
                        {billingCycle === 'annual' && (
                          <p className={`text-sm mt-1 ${
                            plan.popular ? 'text-green-300' : 'text-green-600'
                          }`}>Save 15% with annual billing</p>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <h4 className={`text-sm font-semibold uppercase tracking-wide mb-2 ${
                          plan.popular ? 'text-blue-200' : 'text-blue-600'
                        }`}>Best For</h4>
                        <p className={`${
                          plan.popular ? 'text-blue-100' : 'text-blue-800'
                        }`}>{plan.bestFor}</p>
                      </div>

                      <div className={`mb-6 p-4 rounded-lg ${
                        plan.popular ? 'bg-blue-500/20' : 'bg-blue-50'
                      }`}>
                        <h4 className={`text-sm font-semibold uppercase tracking-wide mb-2 ${
                          plan.popular ? 'text-blue-200' : 'text-blue-600'
                        }`}>Value Breakdown</h4>
                        <div className="space-y-2">
                          {plan.includes.map((item, i) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span className={`${
                                plan.popular ? 'text-blue-100' : 'text-blue-700'
                              }`}>{item.count} {item.type}</span>
                              <span className={`${
                                plan.popular ? 'text-blue-200' : 'text-blue-600'
                              }`}>{item.value}</span>
                            </div>
                          ))}
                          <div className={`border-t pt-2 mt-2 flex justify-between font-semibold ${
                            plan.popular ? 'border-blue-400' : 'border-blue-200'
                          }`}>
                            <span className={`${
                              plan.popular ? 'text-blue-100' : 'text-blue-800'
                            }`}>Retail Value</span>
                            <span className={`${
                              plan.popular ? 'text-white' : 'text-blue-900'
                            }`}>{plan.retailValue}</span>
                          </div>
                          <div className={`flex justify-between font-semibold ${
                            plan.popular ? 'text-green-300' : 'text-green-600'
                          }`}>
                            <span>You Save</span>
                            <span>{plan.savings}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 rounded-lg font-semibold ${
                        plan.popular
                          ? 'bg-white text-blue-700 hover:bg-blue-50'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                        Get Started
                      </button>

                      <div className={`mt-6 pt-6 border-t ${
                        plan.popular ? 'border-blue-400' : 'border-blue-200'
                      }`}>
                        <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                          plan.popular ? 'text-blue-200' : 'text-blue-600'
                        }`}>What's Included</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className={`p-1 rounded-full mt-0.5 mr-2 flex-shrink-0 ${
                                plan.popular ? 'bg-blue-500' : 'bg-blue-100'
                              }`}>
                                <Check className={`h-3 w-3 ${
                                  plan.popular ? 'text-white' : 'text-blue-600'
                                }`} />
                              </div>
                              <span className={`${
                                plan.popular ? 'text-blue-100' : 'text-blue-700'
                              }`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div
              className="mt-12 bg-white rounded-xl p-6 max-w-4xl mx-auto border border-blue-200"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">How Our Subscription Works</h3>
              <p className="text-blue-700">
                With our subscription, you get a set number of professional retouches every month for one flat fee.
                No surprises, no per-image stress. Just upload, we edit, and your images are delivered fast.
                Whether you're a busy photographer or a brand with constant content needs, you'll always have
                fresh, polished images without worrying about extra costs.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Mix & match images across Natural, High-End, and Magazine</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Up to 20% rollover of unused images to next month</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>All plans include full commercial usage rights</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Priority support for Gold and Diamond subscribers</span>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Pay Per Image Services */}
        {activeTab === 'pay-per-image' && (
          <motion.section 
            className="mb-20"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div
              className="text-center mb-12"
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Pay-Per-Image Services</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">
                Need just a few images retouched? Our pay-per-image options give you flexibility without commitment.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {payPerImageServices.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-6 border border-blue-200"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b border-blue-200">{category.category}</h3>
                  <div className="space-y-6">
                    {category.services.map((service, i) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div key={i}>
                          <div className="flex items-start mb-2">
                            <ServiceIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="font-semibold text-gray-900">{service.name}</h4>
                                <span className="text-lg font-bold text-primary-600">
                                  {typeof service.price === 'number' ? `$${service.price}/image` : service.price}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
                            </div>
                          </div>
                          {i < category.services.length - 1 && <hr className="my-4" />}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* FAQ Section */}
        <motion.section
          className="mb-20"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Got questions about our pricing? Find answers to the most common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-blue-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-blue-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFAQ === faq.id ? 'auto' : 0,
                    opacity: expandedFAQ === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-blue-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl p-10 text-center text-white mb-16"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Images?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of photographers and brands who trust EliteRetoucher with their images.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-secondary">
              Start with a Subscription
            </button>
            <button className="btn-dark">
              Try Single Image Editing
            </button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EliteRetoucher</h3>
              <p className="text-gray-400">Professional photo retouching services for photographers and brands.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Portrait Retouching</a></li>
                <li><a href="#" className="hover:text-white">Product Retouching</a></li>
                <li><a href="#" className="hover:text-white">Creative Editing</a></li>
                <li><a href="#" className="hover:text-white">Subscription Plans</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} EliteRetoucher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;