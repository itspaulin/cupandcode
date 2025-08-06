import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, MessageSquare, Heart } from 'lucide-react';
import cornerCupLogo from '@/assets/corner-cup-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Reserve Table', href: '#reservations' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    'Student Discounts',
    'Digital Loyalty Program',
    'Silent Study Nights',
    'Day Passes',
    'Open Mic Events'
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'var(--texture-coffee)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src={cornerCupLogo} 
                alt="Corner Cup Coffee House" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            
            <p className="text-secondary-foreground/80 leading-relaxed">
              Austin's premier work-friendly cafe. Where productivity meets exceptional coffee 
              in the heart of South Lamar.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-glow" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <MessageSquare className="w-5 h-5 text-primary group-hover:text-primary-glow" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-primary">Programs & Perks</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-secondary-foreground/80 flex items-center">
                  <Coffee className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                  {program}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-primary">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p>2048 South Lamar Blvd</p>
                  <p>Austin, TX 78704</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">(512) 555-0384</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/80">info@cornercupcoffee.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <p>Mon-Fri: 5:30 AM - 10:00 PM</p>
                  <p>Sat-Sun: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-secondary-foreground/20"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-foreground/60">
              <span>© 2024 Corner Cup Coffee House. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-secondary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>in Austin, Texas</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;