



'use client';

import { useState } from 'react';
// import { FaSpinner, FaCheck } from 'react-icons/fa';
import Input from '../ui/TextArea';
import Button from '../ui/Button';


export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="bg-surface rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-primary mb-6">Need Help?</h3>
      
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full text-green-400 mb-4">
            {/* <FaCheck className="text-2xl" /> */}
          </div>
          <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
          <p className="text-secondary">We&apos;ll respond within 24 hours</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Input
            label="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            required
          />
          <Input
            label="Message"
            as="textarea"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                {/* <FaSpinner className="animate-spin mr-2" /> */}
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      )}
    </div>
  );}
