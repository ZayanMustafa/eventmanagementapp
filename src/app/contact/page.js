'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animation';
import ContactCard from '@/componets/Contact/ContactCard';
import MapEmbed from '@/componets/Contact/MapEmbeb';
import SupportForm from '@/componets/Contact/SupportForm';
import { CONTACT_DATA } from '@/constant/ContactData';

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

      {/* Combined Map, Form, and Social Section */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6"
        {...fadeIn}
      >
        {/* Support Form */}
        <SupportForm />

        {/* Map and Info */}
        <div className="space-y-6">
          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Our Location</h2>
            <MapEmbed />
          </div>

          {/* Hours + Social Combined Card */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Working Hours */}
              <div>
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

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {CONTACT_DATA.socials.map((social, i) => (
                    <Link
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-primary hover:text-accent"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}

