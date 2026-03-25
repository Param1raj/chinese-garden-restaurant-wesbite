import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, Users, Utensils } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    requests: "",
  });

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", 
    "9:00 PM", "9:30 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.name || !formData.email || !formData.phone || !formData.guests || !formData.time) {
      toast.error("Please fill in all required fields",{});
      return;
    }

    // Simulate booking confirmation
    toast("Reservation Confirmed! 🎉",{
      description: `Thank you ${formData.name}! Your table for ${formData.guests} on ${format(date, "PPP")} at ${formData.time} has been confirmed.`,
    });

    // Reset form
    setDate(undefined);
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      time: "",
      requests: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="heading-section">Reserve Your Table</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your dining experience at Dragon Palace. We're excited to welcome you for an unforgettable evening.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Booking Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
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
                      <Label htmlFor="email">Email *</Label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select party size" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      value={formData.requests}
                      onChange={(e) => handleInputChange("requests", e.target.value)}
                      placeholder="Any dietary restrictions, celebration details, or special requests..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="btn-neon w-full text-lg py-3">
                    Confirm Reservation
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info Card */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Reservation Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-primary w-5 h-5" />
                      <div>
                        <p className="font-medium">Dining Hours</p>
                        <p className="text-sm text-muted-foreground">Mon-Thu: 5:00 PM - 10:00 PM<br />Fri-Sat: 5:00 PM - 11:00 PM<br />Sun: 5:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="text-primary w-5 h-5" />
                      <div>
                        <p className="font-medium">Party Size</p>
                        <p className="text-sm text-muted-foreground">We accommodate parties of 1-8 guests. For larger groups, please call us directly.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Utensils className="text-primary w-5 h-5" />
                      <div>
                        <p className="font-medium">Dress Code</p>
                        <p className="text-sm text-muted-foreground">Smart casual. We recommend business casual or cocktail attire.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Cancellation Policy</h3>
                  <p className="text-muted-foreground text-sm">
                    Reservations can be cancelled up to 2 hours before your booking time. 
                    For same-day changes or questions, please call us at (555) 123-4567.
                  </p>
                </div>

                <div className="card-elegant p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Us</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
                    <p><span className="font-medium">Email:</span> reservations@dragonpalace.com</p>
                    <p><span className="font-medium">Address:</span> 123 Chinatown Street, Food City</p>
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

export default Reservations;