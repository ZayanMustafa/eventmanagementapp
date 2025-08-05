

// File: src/components/Events/EventRequestForm.js

'use client';
import { useState } from "react";
import Input from "../ui/TextArea";
import Button from "../ui/Button";
import { EVENT_TYPES } from "@/constant/EventData";
export default function EventRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        eventType: "",
        message: "",
      });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-surface rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-primary mb-6">Request an Event</h3>

      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full text-green-400 mb-4">
            ✓
          </div>
          <h4 className="text-xl font-medium mb-2 text-white">Request Received!</h4>
          <p className="text-gray-300">
            Our team will contact you within 48 hours
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Your Name"
              value={formData.name}
              className="text-white"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              label="Email"
              type="email"
              className="text-white"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type.name}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, eventType: type.name })
                    }
                    className={`p-4 rounded-lg border flex flex-col items-center transition-colors ${
                      formData.eventType === type.name
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <span className="text-cyan-400 mb-2">{type.icon}</span>
                    <span className="font-medium text-white">{type.name}</span>
                    <span className="text-xs text-gray-300 mt-1">
                      {type.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <Input
                label="Additional Details"
                as="textarea"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || !formData.eventType}
            className="w-full"
          >
            {isSubmitting ? "Processing..." : "Submit Request"}
          </Button>
        </form>
      )}
    </div>
  );
}