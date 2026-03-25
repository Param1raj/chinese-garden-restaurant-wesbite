import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif-display text-foreground mb-4">
              Chinese <span className="text-primary">Garden</span>
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Authentic Chinese cuisine rooted in tradition. Where every dish tells a story of heritage and love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
                { to: "/reservations", label: "Reservations" },
              ].map(link => (
                <li key={link.to}>
                  <Link href={link.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>88 Garden Lane, Chinatown</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={14} className="text-primary shrink-0" />
                <span>+1 (555) 888-8888</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={14} className="text-primary shrink-0" />
                <span>hello@chinesegarden.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start space-x-2">
                <Clock size={14} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <div>Mon – Thu: 11:30 AM – 10:00 PM</div>
                  <div>Fri – Sat: 11:30 AM – 11:00 PM</div>
                  <div>Sunday: 12:00 PM – 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Chinese Garden. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
