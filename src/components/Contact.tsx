import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageSquare, Wifi, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['2048 South Lamar Blvd', 'Austin, TX 78704'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(512) 555-0384'],
      action: 'Call Us'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cornercupcoffee.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5:30 AM - 10:00 PM', 'Sat-Sun: 7:00 AM - 10:00 PM'],
      action: null
    }
  ];

  const features = [
    { icon: Wifi, text: '500MB Free WiFi' },
    { icon: Car, text: 'Free Parking Available' },
    { icon: MessageSquare, text: 'Student Discounts' },
  ];

  const socialLinks = [
    { platform: 'Instagram', handle: '@cornercupaustin', icon: Instagram },
    { platform: 'TikTok', handle: '@cornercupATX', icon: MessageSquare }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'var(--texture-coffee)' }}></div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
          >
            <MapPin className="w-4 h-4" />
            <span>Visit Us</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Find Your Perfect
            <span className="block text-primary">Work Spot</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of South Austin on Lamar Boulevard. 
            Easy to find, easier to love. Come work, study, or just enjoy great coffee.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                      {info.action && (
                        <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 mt-2">
                          {info.action} →
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="bg-accent/30 p-6 rounded-xl border border-border/50"
            >
              <h3 className="font-bold text-lg mb-4">Why Choose Corner Cup?</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="space-y-4"
            >
              <h3 className="font-bold text-lg">Follow Us</h3>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <social.icon className="w-5 h-5" />
                    <span>{social.handle}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-elegant"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Questions about reservations, events, or just want to say hi? 
                  We'd love to hear from you!
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      placeholder="Your first name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      placeholder="Your last name"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us more..."
                    rows={4}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>

              <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/50">
                Typically respond within 24 hours
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <div className="bg-muted/30 h-64 lg:h-96 rounded-2xl border border-border/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-muted-foreground">2048 South Lamar Blvd, Austin, TX 78704</p>
                </div>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;