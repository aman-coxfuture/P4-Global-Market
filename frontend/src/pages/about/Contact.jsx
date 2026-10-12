import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import ContentSection from '../../components/ContentSection';
import FAQItem from '../../components/FAQItem';
import CTASection from '../../components/CTASection';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Globe,
  ArrowRight,
  Headphones
} from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'support@p4globalmarket.com',
      subtext: 'Average response under 2 hours',
      action: 'mailto:support@p4globalmarket.com',
      actionText: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Desk',
      detail: '+44 20 7946 0912',
      subtext: 'International toll-free line (24/5)',
      action: 'tel:+442079460912',
      actionText: 'Call Now'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      detail: '24/5 Real-Time Support',
      subtext: 'Instant connection with trade specialists',
      action: '#live-chat',
      actionText: 'Start Chat'
    }
  ];

  const offices = [
    {
      role: 'Global Headquarters',
      title: 'Seychelles Head Office',
      entity: 'P4 Global Market Ltd',
      address: 'P4 Global Towers, Level 14, Financial Center Road, Victoria, Mahé, Seychelles',
      hours: 'Mon - Fri: 08:00 - 18:00 (GMT+4)',
      phone: '+248 4 671 900'
    },
    {
      role: 'Middle East Regional Hub',
      title: 'Dubai Regional Office',
      entity: 'P4 Global Market (ME) Ltd',
      address: 'Prime Tower, Suite 1802, Business Bay, Dubai, United Arab Emirates',
      hours: 'Mon - Fri: 09:00 - 18:00 (GST)',
      phone: '+971 4 312 9000'
    }
  ];

  const faqs = [
    {
      q: 'What are your customer support operating hours?',
      a: 'Our customer support desk operates round-the-clock 24 hours a day, 5 days a week, matching global financial market sessions from Monday market opening in Wellington through Friday close in New York.'
    },
    {
      q: 'How quickly can I expect a response to my inquiry?',
      a: 'Live Chat inquiries connect to human support agents within 30 seconds on average. Email inquiries sent to support@p4globalmarket.com are typically answered within 1 to 2 hours.'
    },
    {
      q: 'Can I visit your physical offices for account consultations?',
      a: 'Yes, institutional partners, Introducing Brokers, and VIP account holders can arrange in-person meetings at our Seychelles or Dubai representative offices by scheduling an appointment with their account manager.'
    },
    {
      q: 'What languages does your customer support team speak?',
      a: 'Our multilingual client desk assists traders in English, Spanish, Arabic, Portuguese, French, German, Italian, Vietnamese, and Thai.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO */}
      <PageHero
        badge="GET IN TOUCH"
        title="CONTACT US"
        subtitle="We're here to help 24/5"
        ctaText="SEND A MESSAGE"
        ctaLink="#contact-form"
        secondaryCtaText="SUPPORT CENTER"
        secondaryCtaLink="/about/support"
      />

      {/* 2. CONTACT METHODS (3 Cards) */}
      <ContentSection
        heading="Connect with Our Client Desk"
        subtitle="Reach out through your preferred communication channel for prompt and professional assistance."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#00C853]/15 group-hover:text-[#00C853] transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
                    <p className="text-base font-semibold text-slate-800 mt-1">{m.detail}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{m.subtext}</p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <a
                    href={m.action}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C853] hover:text-[#00b34a] uppercase tracking-wider transition-colors"
                  >
                    <span>{m.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* 3. CONTACT FORM */}
      <ContentSection
        id="contact-form"
        bg="bg-slate-50"
        heading="Send Us a Message"
        subtitle="Fill in the form below and an account specialist will get back to you shortly."
      >
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#00C853] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-emerald-900">Message Received!</h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                Thank you for contacting P4 Global Market. One of our support representatives will respond to your registered email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding deposit / MT5 platform / partnership"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you today? Please provide relevant account details if applicable..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00C853] hover:bg-[#00e660] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#00C853]/25"
              >
                <span>Submit Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </ContentSection>

      {/* 4 & 5. OFFICE ADDRESSES & MAP PLACEHOLDER */}
      <ContentSection heading="Our Global Offices" subtitle="Direct representative headquarters across key international financial hubs.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                    {office.role}
                  </span>
                  <Building className="w-5 h-5 text-slate-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{office.title}</h3>
                  <p className="text-xs text-[#00C853] font-semibold mt-0.5">{office.entity}</p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-mono">{office.phone}</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b172a] border border-slate-800 p-4 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <MapPin className="w-6 h-6 text-[#00C853] mb-1 animate-bounce" />
                <div className="text-xs font-bold text-white relative z-10">{office.title}</div>
                <div className="text-[10px] text-slate-400 relative z-10">Coordinates Verified & Supervised</div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* 6. FAQ (4 Questions) */}
      <ContentSection
        bg="bg-slate-50"
        heading="Frequently Asked Questions"
        subtitle="Quick answers regarding customer service, response time, and multilingual support."
      >
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaq === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </ContentSection>

      {/* 7. CTA */}
      <CTASection
        heading="Need Immediate Assistance?"
        subtitle="Our client service specialists are online 24/5 to assist with your live account, deposits, and platform setup."
        primaryBtnText="START LIVE CHAT"
        primaryBtnLink="/about/contact"
        secondaryBtnText="SUPPORT CENTER"
        secondaryBtnLink="/about/support"
      />
    </div>
  );
}
