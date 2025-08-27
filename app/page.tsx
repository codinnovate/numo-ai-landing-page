'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, BookOpen, Sparkles, Star, ArrowRight, Mail, Shield, HelpCircle, Download, Apple, Menu, X, CheckCircle, Users, Zap, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "NumoAI helped me understand my decision-making patterns. The insights were incredibly accurate and actionable.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Entrepreneur",
      content: "The emotional profiling feature gave me clarity on my leadership style. It's like having a personal coach.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Designer",
      content: "I've tried many self-discovery tools, but NumoAI's AI-powered insights are on another level. Highly recommend!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does NumoAI protect my privacy?",
      answer: "We use end-to-end encryption and never share your personal data. All insights are generated locally on your device when possible."
    },
    {
      question: "How accurate are the AI insights?",
      answer: "Our AI models are trained on validated psychological frameworks and continuously improved based on user feedback. Accuracy rates exceed 85% in independent studies."
    },
    {
      question: "Can I use NumoAI offline?",
      answer: "Yes! Many features work offline, including journaling and reviewing past insights. Online connectivity is only needed for generating new AI insights."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0E0E20] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #CC8C1E 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #CC8C1E 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #CC8C1E 0%, transparent 25%)`,
          backgroundSize: '400px 400px, 600px 600px, 300px 300px',
          backgroundPosition: '0 0, 100px 100px, 200px 200px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 49%, rgba(204, 140, 30, 0.1) 50%, transparent 51%),
                           linear-gradient(-45deg, transparent 49%, rgba(204, 140, 30, 0.1) 50%, transparent 51%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-[#0E0E20]/80 backdrop-blur-md border-b border-[#CC8C1E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <Sparkles className="w-6 h-6 text-[#0E0E20]" />
              </div>
              <span className="text-xl font-semibold text-white font-lora">NumoAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Pricing</a>
              <Link href="/privacy" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Terms</Link>
              <button className="bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-[#CC8C1E]/20"
            >
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">How It Works</a>
                <a href="#pricing" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Pricing</a>
                <Link href="/privacy" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Privacy</Link>
                <Link href="/terms" className="text-gray-300 hover:text-[#CC8C1E] transition-colors duration-200 font-medium">Terms</Link>
                <button className="bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] px-6 py-2 rounded-full font-semibold w-fit">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CC8C1E]/10 via-transparent to-[#CC8C1E]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-3xl shadow-2xl mb-8 border border-[#CC8C1E]/20">
                <Sparkles className="w-12 h-12 text-[#0E0E20]" />
              </div>
              <h1 className="text-4xl font-semibold text-white mb-2 font-lora">NumoAI</h1>
            </motion.div>

            {/* Headlines */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-8 leading-tight font-lora"
            >
              Discover Yourself with{' '}
              <span className="bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 bg-clip-text text-transparent">
                AI-powered Insights
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              NumoAI helps you reflect, grow, and align with your strengths through personalized AI insights that unlock your true potential.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] font-semibold rounded-full text-lg shadow-2xl hover:shadow-[#CC8C1E]/25 transform hover:scale-105 transition-all duration-200 border border-[#CC8C1E]/20">
                Start My Insight Scan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group inline-flex items-center px-8 py-4 bg-[#0E0E20]/80 text-white font-semibold rounded-full text-lg border border-[#CC8C1E]/30 hover:border-[#CC8C1E]/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                <Apple className="mr-2 w-5 h-5" />
                Download on App Store
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CC8C1E]/5 via-transparent to-[#CC8C1E]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-lora">
              How NumoAI Works
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-lora font-medium">
              Three simple steps to unlock your personal insights
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-semibold text-[#0E0E20] font-lora">1</span>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">Take the Scan</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Answer thoughtfully designed questions that reveal your personality patterns and decision-making style.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-semibold text-[#0E0E20] font-lora">2</span>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">AI Analysis</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Our advanced AI processes your responses using psychological frameworks to generate personalized insights.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-semibold text-[#0E0E20] font-lora">3</span>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">Grow & Track</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Receive actionable insights and track your personal growth journey with our intelligent recommendations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CC8C1E]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-lora">
              Your Path to Self-Discovery
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-lora font-medium">
              Unlock deeper understanding of yourself with AI-powered insights designed for personal growth
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 hover:shadow-2xl hover:shadow-[#CC8C1E]/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-8 h-8 text-[#0E0E20]" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">Insight Scan</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Learn how your personal patterns shape your mindset and decisions.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 hover:shadow-2xl hover:shadow-[#CC8C1E]/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-8 h-8 text-[#0E0E20]" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">Emotional Profile</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Understand your emotional rhythms and relationships.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeInUp}
              className="group bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 hover:shadow-2xl hover:shadow-[#CC8C1E]/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="w-8 h-8 text-[#0E0E20]" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4 font-lora">Growth Journal</h4>
              <p className="text-gray-300 leading-relaxed font-lora font-medium">
                Track reflections and celebrate your progress over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CC8C1E]/10 via-transparent to-[#CC8C1E]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-lora">
              What Our Users Say
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-lora font-medium">
              Join thousands who have discovered clarity with NumoAI
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#CC8C1E] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed font-lora font-medium italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold font-lora">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm font-lora">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CC8C1E]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-lora">
              Choose Your Journey
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-lora font-medium">
              Start free and upgrade as you grow
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Free Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-3xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-white mb-2 font-lora">Explorer</h4>
              <p className="text-gray-400 mb-6 font-lora">Perfect for getting started</p>
              <div className="mb-8">
                <span className="text-4xl font-medium text-white font-lora">Free</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">3 Insight Scans per month</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Basic emotional profiling</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Growth journal</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#CC8C1E]/30 text-white rounded-full hover:border-[#CC8C1E]/50 transition-colors duration-200 font-semibold">
                Get Started
              </button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#CC8C1E]/20 to-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#CC8C1E]/40 relative transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h4 className="text-2xl font-semibold text-white mb-2 font-lora">Discoverer</h4>
              <p className="text-gray-400 mb-6 font-lora">For serious self-discovery</p>
              <div className="mb-8">
                <span className="text-4xl font-medium text-white font-lora">$9.99</span>
                <span className="text-gray-400 font-lora">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Unlimited Insight Scans</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Advanced emotional profiling</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Personalized growth plans</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                Start Free Trial
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-3xl border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-white mb-2 font-lora">Transformer</h4>
              <p className="text-gray-400 mb-6 font-lora">For transformation leaders</p>
              <div className="mb-8">
                <span className="text-4xl font-medium text-white font-lora">$19.99</span>
                <span className="text-gray-400 font-lora">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Everything in Discoverer</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">1-on-1 coaching sessions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Custom insight reports</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#CC8C1E] mr-3" />
                  <span className="font-lora">Early access to features</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#CC8C1E]/30 text-white rounded-full hover:border-[#CC8C1E]/50 transition-colors duration-200 font-semibold">
                Contact Sales
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CC8C1E]/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-lora">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-gray-300 font-lora font-medium">
              Everything you need to know about NumoAI
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#0E0E20]/60 backdrop-blur-sm rounded-2xl border border-[#CC8C1E]/20 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#CC8C1E]/5 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-white font-semibold font-lora">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#CC8C1E] transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed font-lora">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CC8C1E]/10 via-transparent to-[#CC8C1E]/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#CC8C1E] fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl sm:text-3xl font-medium text-white mb-6 leading-relaxed font-lora">
              "Thousands of people are already gaining clarity with NumoAI."
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="px-4 py-2 bg-[#0E0E20]/60 backdrop-blur-sm rounded-full border border-[#CC8C1E]/20 font-lora font-medium">Personal Growth</span>
              <span className="px-4 py-2 bg-[#0E0E20]/60 backdrop-blur-sm rounded-full border border-[#CC8C1E]/20 font-lora font-medium">Self-Reflection</span>
              <span className="px-4 py-2 bg-[#0E0E20]/60 backdrop-blur-sm rounded-full border border-[#CC8C1E]/20 font-lora font-medium">AI-Powered</span>
              <span className="px-4 py-2 bg-[#0E0E20]/60 backdrop-blur-sm rounded-full border border-[#CC8C1E]/20 font-lora font-medium">Privacy First</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CC8C1E]/10 via-transparent to-[#CC8C1E]/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-6 font-lora">
              Your journey to clarity starts today
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-lora font-medium">
              Try NumoAI for free and discover insights that will transform your self-understanding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 text-[#0E0E20] font-semibold rounded-full text-lg shadow-2xl hover:shadow-[#CC8C1E]/25 transform hover:scale-105 transition-all duration-200 font-lora">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group inline-flex items-center px-6 py-3 bg-[#0E0E20]/80 text-white font-semibold rounded-full text-lg border border-[#CC8C1E]/30 hover:border-[#CC8C1E]/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-200 font-lora">
                <Apple className="mr-2 w-5 h-5" />
                Download App
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 relative border-t border-[#CC8C1E]/20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E20] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                  <Sparkles className="w-6 h-6 text-[#0E0E20]" />
                </div>
                <span className="text-xl font-semibold text-white font-lora">NumoAI</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed font-lora font-medium">
                AI-powered personal insights for self-discovery and growth. Your journey to clarity starts here.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#0E0E20]/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 transition-colors duration-200 cursor-pointer">
                  <Users className="w-5 h-5 text-[#CC8C1E]" />
                </div>
                <div className="w-10 h-10 bg-[#0E0E20]/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#CC8C1E]/20 hover:border-[#CC8C1E]/40 transition-colors duration-200 cursor-pointer">
                  <Mail className="w-5 h-5 text-[#CC8C1E]" />
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 font-lora">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 font-lora">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 font-lora">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 font-lora">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 font-lora">Download App</a></li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h4 className="text-white font-semibold mb-6 font-lora">Legal & Support</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 flex items-center font-lora">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 font-lora">Terms of Use</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 flex items-center font-lora">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help Center
                </a></li>
                <li>
                  <div className="flex items-center text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:help@numoai.com" className="">help@numoai.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#CC8C1E]/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 sm:mb-0 font-lora">
              Copyright © 2025 NumoAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 text-sm font-lora">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#CC8C1E] transition-colors duration-200 text-sm font-lora">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}