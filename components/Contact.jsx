"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Github, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert({
  //     title: "Message Sent!",
  //     description: "Thank you for reaching out. I'll get back to you soon!",
  //   });
  //   setFormData({ name: '', email: '', message: '' });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.8s_ease-out]">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a chat about web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.2s_both]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                  Let's Work Together
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you're a startup looking for a 
                  developer or just want to connect, I'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <div className="animate-[fade-in_0.5s_ease-out_0.4s_both]">
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground">Dehradun, India</p>
                  </div>
                  <div className="animate-[fade-in_0.5s_ease-out_0.6s_both]">
                    <h4 className="font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground">MNNIT Allahabad</p>
                  </div>
                  <div className="animate-[fade-in_0.5s_ease-out_0.8s_both]">
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <p className="text-muted-foreground">Open to internships and freelance projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.4s_both]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[fade-in_0.5s_ease-out_0.6s_both]"
                  >
                    {/* <Github size={24} /> */}
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[fade-in_0.5s_ease-out_0.8s_both]"
                  >
                    {/* <Linkedin size={24} /> */}
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://youtube.com/@storylovemotiv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[fade-in_0.5s_ease-out_1s_both]"
                  >
                    {/* <Youtube size={24} /> */}
                    <span>YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-[fade-in_0.8s_ease-out_0.6s_both]">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-rose-600 dark:text-rose-400">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-[fade-in_0.5s_ease-out_0.8s_both]">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="animate-[fade-in_0.5s_ease-out_1s_both]">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="animate-[fade-in_0.5s_ease-out_1.2s_both]">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] transition-all duration-300 focus:scale-105"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-[fade-in_0.5s_ease-out_1.4s_both]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
