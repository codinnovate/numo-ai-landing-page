'use client';

import { motion } from 'framer-motion';
import { Trash2, ArrowLeft, Mail, AlertTriangle, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0E0E20] text-white flex items-center justify-center">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #CC8C1E 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #CC8C1E 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #CC8C1E 0%, transparent 25%)`,
            backgroundSize: '400px 400px, 600px 600px, 300px 300px',
            backgroundPosition: '0 0, 100px 100px, 200px 200px'
          }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-md mx-auto px-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl shadow-2xl mb-6">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-4 font-lora">
            Request Submitted
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We've received your account deletion request. We'll process it within 30 days and send you a confirmation email.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center text-[#CC8C1E] hover:text-[#CC8C1E]/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

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
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-[#CC8C1E] hover:text-[#CC8C1E]/80 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Header */}
      <section className="relative pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl mb-6">
              <Trash2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 font-lora">
              Delete Account
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              We're sorry to see you go. Please help us understand why.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warning Notice */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6"
        >
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-500 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2 font-lora">Important Notice</h3>
              <div className="text-gray-300 space-y-2">
                <p>Account deletion is permanent and cannot be undone. This action will:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Delete all your personal data and insights</li>
                  <li>Remove your growth journal and progress history</li>
                  <li>Cancel any active subscriptions</li>
                  <li>Permanently close your account</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Deletion Form */}
      <main className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#0E0E20]/60 backdrop-blur-sm p-8 rounded-3xl border border-[#CC8C1E]/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-[#0E0E20]/80 border border-[#CC8C1E]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#CC8C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#CC8C1E]/20 transition-colors"
                  placeholder="Enter your account email"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                This must match the email address associated with your NumoAI account.
              </p>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                Reason for Deletion *
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0E0E20]/80 border border-[#CC8C1E]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#CC8C1E]/50 focus:outline-none focus:ring-2 focus:ring-[#CC8C1E]/20 transition-colors resize-none"
                placeholder="Please tell us why you're deleting your account. Your feedback helps us improve our service."
              />
              <p className="text-sm text-gray-400 mt-2">
                Optional: Help us understand how we can improve NumoAI for future users.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !email.trim() || !reason.trim()}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-5 h-5 mr-2" />
                    Delete My Account
                  </>
                )}
              </button>
              
              <Link
                href="/"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#0E0E20]/80 text-white font-semibold rounded-xl border border-[#CC8C1E]/30 hover:border-[#CC8C1E]/50 transition-colors duration-200"
              >
                Cancel
              </Link>
            </div>
          </form>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NumoAI. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy" className="hover:text-[#CC8C1E] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#CC8C1E] transition-colors">Terms of Use</Link>
        </div>
      </footer>
    </div>
  );
}