import './globals.css';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'NumoAI - Discover Yourself with AI-powered Insights',
  description: 'NumoAI helps you reflect, grow, and align with your strengths through AI-powered personal insights and self-discovery tools.',
  keywords: 'personal growth, self-discovery, AI insights, reflection, personal development, clarity, mindfulness, emotional intelligence, self-awareness',
  openGraph: {
    title: 'NumoAI - Discover Yourself with AI-powered Insights',
    description: 'NumoAI helps you reflect, grow, and align with your strengths through AI-powered personal insights and self-discovery tools.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NumoAI - Discover Yourself with AI-powered Insights',
    description: 'NumoAI helps you reflect, grow, and align with your strengths through AI-powered personal insights and self-discovery tools.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={` bg-[#0E0E20] text-white`}>{children}</body>
    </html>
  );
}