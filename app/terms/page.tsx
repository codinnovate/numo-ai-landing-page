'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Mail, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfUse() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
        <Link href="/" className="inline-flex items-center text-[#CC8C1E] hover:text-[#CC8C1E]/80 transition-colors font-lora font-medium">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-2xl shadow-2xl mb-6">
              <FileText className="w-8 h-8 text-[#0E0E20]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4 font-lora">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-300 font-lora font-medium">
              Please read these terms carefully before using NumoAI.
            </p>
            <p className="text-sm text-gray-400 mt-4 font-lora">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>By accessing and using NumoAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">2. Description of Service</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>NumoAI provides AI-powered personal insights and self-discovery tools including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personality and behavioral analysis</li>
                  <li>Emotional intelligence assessments</li>
                  <li>Personal growth recommendations</li>
                  <li>Journaling and reflection tools</li>
                  <li>Progress tracking and analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">3. User Accounts</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>To access certain features, you must create an account. You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">4. Acceptable Use</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the service for commercial purposes without permission</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">5. Intellectual Property</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>The Service and its original content, features, and functionality are owned by NumoAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                <p>You retain ownership of content you create, but grant us a license to use it to provide the Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">6. Privacy and Data</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.</p>
                <p className="bg-[#CC8C1E]/10 border border-[#CC8C1E]/20 rounded-lg p-4">
                  <strong>Important:</strong> We use your data solely to provide personalized insights and improve our service. We never sell your personal information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">7. Subscription and Payments</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>Some features require a paid subscription. By subscribing, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pay all charges associated with your subscription</li>
                  <li>Automatic renewal unless cancelled</li>
                  <li>Our refund policy as stated separately</li>
                  <li>Price changes with 30 days notice</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">8. Disclaimers</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>NumoAI is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Accuracy or completeness of insights</li>
                  <li>Uninterrupted or error-free service</li>
                </ul>
                <p className="bg-red-900/20 border border-red-500/20 rounded-lg p-4">
                  <strong>Medical Disclaimer:</strong> NumoAI is not a substitute for professional medical, psychological, or psychiatric advice, diagnosis, or treatment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">9. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>In no event shall NumoAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">10. Termination</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
                <p>You may terminate your account at any time by contacting us or using the account deletion feature.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">11. Changes to Terms</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Service.</p>
                <p>Continued use of the Service after changes constitutes acceptance of the new terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">12. Contact Information</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>If you have any questions about these Terms of Use, please contact us:</p>
                <div className="bg-[#0E0E20]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#CC8C1E]/20">
                  <p><strong>Email:</strong> <a href="mailto:legal@numoai.com" className="text-[#CC8C1E] hover:underline">legal@numoai.com</a></p>
                  <p><strong>Address:</strong> NumoAI Legal Department</p>
                  <p>123 Innovation Drive, Tech City, TC 12345</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}