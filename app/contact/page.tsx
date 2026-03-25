'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate message sending
    toast.success("Message Sent! 📧",{
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="heading-section">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with any questions, feedback, or special requests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Send className="mr-3 text-primary" />
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      className="mt-1"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-neon w-full text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="card-elegant p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Visit Us</h4>
                        <p className="text-muted-foreground">
                          123 Chinatown Street<br />
                          Food City, FC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <p className="text-muted-foreground">
                          Main: +1 (555) 123-4567<br />
                          Reservations: +1 (555) 123-4568
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <p className="text-muted-foreground">
                          General: info@dragonpalace.com<br />
                          Reservations: reservations@dragonpalace.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="text-primary w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Operating Hours</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                          <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                          <p>Sunday: 12:00 PM - 9:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Find Us</h3>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        Located in the heart of Chinatown
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parking:</span>
                      <span className="text-foreground">Valet available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reservations:</span>
                      <span className="text-foreground">Recommended</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dress Code:</span>
                      <span className="text-foreground">Smart casual</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Private Dining:</span>
                      <span className="text-foreground">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Payment:</span>
                      <span className="text-foreground">All major cards</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;