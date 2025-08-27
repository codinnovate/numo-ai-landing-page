'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

      {/* Header */}
      <header className="relative z-50 bg-[#0E0E20]/80 backdrop-blur-md border-b border-[#CC8C1E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-[#CC8C1E] hover:text-[#CC8C1E]/80 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-lora font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-[#CC8C1E] to-[#CC8C1E]/80 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-5 h-5 text-[#0E0E20]" />
              </div>
              <span className="text-lg font-semibold font-lora">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-white mb-6 font-lora">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 font-lora">
            Your privacy is our priority. Learn how we protect and handle your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4 font-lora">
            Last updated: January 15, 2025
          </p>
        </motion.div>

        {/* Privacy Principles */}
        <motion.section
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-[#0E0E20]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#CC8C1E]/20"
          >
            <Lock className="w-8 h-8 text-[#CC8C1E] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2 font-lora">Data Encryption</h3>
            <p className="text-gray-300 text-sm font-lora">All your data is encrypted end-to-end using industry-standard protocols.</p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="bg-[#0E0E20]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#CC8C1E]/20"
          >
            <Eye className="w-8 h-8 text-[#CC8C1E] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2 font-lora">No Tracking</h3>
            <p className="text-gray-300 text-sm font-lora">We don't track your behavior or sell your data to third parties.</p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="bg-[#0E0E20]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#CC8C1E]/20"
          >
            <UserCheck className="w-8 h-8 text-[#CC8C1E] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2 font-lora">Your Control</h3>
            <p className="text-gray-300 text-sm font-lora">You have full control over your data and can delete it anytime.</p>
          </motion.div>
        </motion.section>

        {/* Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We collect information you provide directly to us, such as:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (email, name, profile details)</li>
                  <li>Responses to insight questions and assessments</li>
                  <li>Journal entries and personal reflections</li>
                  <li>Communication with our support team</li>
                </ul>
                <p>We automatically collect certain information when you use our service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Device information and usage patterns</li>
                  <li>Log data and analytics (anonymized)</li>
                  <li>Cookies and similar technologies for functionality</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">2. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide personalized AI insights and recommendations</li>
                  <li>Improve our AI models and service quality</li>
                  <li>Send you important updates about your account</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p className="bg-[#CC8C1E]/10 border border-[#CC8C1E]/20 rounded-lg p-4">
                  <strong>Important:</strong> We never use your personal insights or journal entries for marketing purposes or share them with third parties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">3. Data Security</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We implement robust security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all sensitive data</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure cloud infrastructure with SOC 2 compliance</li>
                  <li>Limited access controls and employee training</li>
                  <li>Automatic data backup and disaster recovery</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">4. Data Sharing and Disclosure</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers under strict confidentiality agreements</li>
                </ul>
                <p>All third-party services we use are carefully vetted and required to maintain the same privacy standards.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">5. Your Rights and Choices</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Export your data in a standard format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:privacy@numoai.com" className="text-[#CC8C1E] hover:underline">privacy@numoai.com</a>.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">6. Data Retention</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We retain your information only as long as necessary to provide our services and comply with legal obligations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account data: Until you delete your account</li>
                  <li>Insight data: Until you delete your account or specific insights</li>
                  <li>Usage analytics: Anonymized after 12 months</li>
                  <li>Support communications: 3 years for quality assurance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">7. International Data Transfers</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>NumoAI operates globally. Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions for data transfers</li>
                  <li>Certification under privacy frameworks like Privacy Shield successors</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">8. Children's Privacy</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>NumoAI is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">9. Changes to This Policy</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Sending you an email notification</li>
                  <li>Providing notice through our Service</li>
                </ul>
                <p>Changes become effective when posted on this page.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-lora">10. Contact Us</h2>
              <div className="text-gray-300 space-y-4 font-lora">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-[#0E0E20]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#CC8C1E]/20">
                  <p><strong>Email:</strong> <a href="mailto:privacy@numoai.com" className="text-[#CC8C1E] hover:underline">privacy@numoai.com</a></p>
                  <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@numoai.com" className="text-[#CC8C1E] hover:underline">dpo@numoai.com</a></p>
                  <p><strong>Address:</strong> NumoAI Privacy Team</p>
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