'use client';

import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative bg-white py-4 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f8f3ec]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image on the left with cool frame */}
          <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
            <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Contact us"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5b3b1c]/10 to-[#b4884b]/10"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-[#b4884b] rounded-lg opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 border-4 border-[#5b3b1c] rounded-lg opacity-30"></div>
          </div>
          
          {/* Form that floats over with cool effects */}
          <div className="w-full lg:w-[62%] lg:ml-[-80px] relative">
            <div className="bg-white p-10 rounded-xl shadow-2xl border border-[#e8e0d5] transform -rotate-1 transition-all duration-300 hover:rotate-0 h-full">
              <div className="h-full flex flex-col">
                <div>
                  <h2 className="text-4xl font-bold text-[#5b3b1c] mb-4 relative">
                    Get In Touch
                    <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#b4884b] rounded-full"></span>
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    We'd love to hear from you! Fill out the form below and we'll get back to you soon.
                  </p>

                  {submitted && (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                      <p className="font-medium">✅ Your message has been sent!</p>
                      <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div className="relative">
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-lg">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b4884b] transition-all duration-300 group-hover:w-full"></div>
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-lg">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg"
                      />
                    </div>

                    <div className="relative flex-grow flex flex-col">
                      <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-lg">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-300 rounded-t-md px-4 py-3 focus:outline-none focus:border-[#b4884b] transition-all bg-gray-50 text-lg flex-grow"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative overflow-hidden bg-[#b4884b] hover:bg-[#a3783e] text-white font-semibold px-2 py-2 w-60 rounded-md transition-all duration-300 group text-lg mt-auto"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="absolute inset-0 bg-[#5b3b1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-[#f8f3ec]"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-20 h-20 rounded-full bg-[#f8f3ec]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;