


'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';
import { CONTACT_DATA } from '@/constant/ContactData';
import MapEmbed from '@/componets/Contact/MapEmbeb';
import { Libertinus_Math } from 'next/font/google';
import SupportForm from '@/componets/Contact/SupportForm';
import ContactCard from '@/componets/Contact/ContactCard';
import Link from 'next/link';
// import ContactCard from '@/components/contact/ContactCard';
// import SupportForm from '@/components/contact/SupportForm';
// import MapEmbed from '@/components/contact/MapEmbed';

export default function ContactPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="container py-12"
    >
      {/* Hero Section */}
      <motion.section 
        {...staggerContainer}
        className="text-center mb-16"
      >
        <motion.h1 {...fadeIn} className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Contact Us
        </motion.h1>
        <motion.p {...fadeIn} className="text-xl text-secondary max-w-3xl mx-auto">
          Get in touch with our team for support, partnerships, or event inquiries
        </motion.p>
      </motion.section>

      {/* Contact Methods */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {CONTACT_DATA.methods.map((method, i) => (
          <motion.div key={i} variants={fadeIn}>
            <ContactCard method={method} />
          </motion.div>
        ))}
      </motion.section>

      {/* Map + Form Section */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        {...fadeIn}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-2">Our Location</h2>
          <MapEmbed />
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-primary mb-4">Working Hours</h3>
            <ul className="space-y-3">
              {CONTACT_DATA.hours.map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-secondary">{item.day}</span>
                  <span className="text-primary">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SupportForm />
      </motion.section>

      {/* Social Media */}
      <motion.section 
        {...fadeIn}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Connect Socially</h2>
        <div className="flex justify-center gap-6">
          {CONTACT_DATA.socials.map((social, i) => (
            <Link
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface rounded-full border border-gray-700 hover:bg-gray-800 transition-colors text-primary"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}