import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Wifi, Zap, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-cafe-interior.jpg';

const Hero = () => {
  const features = [
    { icon: Wifi, text: '500MB Free WiFi' },
    { icon: Zap, text: '50+ Power Outlets' },
    { icon: Clock, text: 'Open from 5:30 AM' },
    { icon: Users, text: 'Study-Friendly Environment' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Corner Cup Coffee House Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
          >
            <Zap className="w-4 h-4" />
            <span>Austin's Premier Work & Study Cafe</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              Your Perfect
              <span className="block text-primary">Work Space</span>
              <span className="block text-secondary">Awaits</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Corner Cup Coffee House is Austin's go-to destination for freelancers, students, and coffee lovers. 
              Ultra-fast WiFi, ample outlets, and the city's best iced coffee.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3"
            >
              Reserve Your Table
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-2 hover:bg-accent hover:border-primary transition-all duration-300"
            >
              View Menu
            </Button>
          </motion.div>

          {/* Hours & Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50"
          >
            <div>
              <p className="font-semibold text-foreground mb-1">Hours</p>
              <p>Mon-Fri: 5:30 AM - 10:00 PM</p>
              <p>Sat-Sun: 7:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p>2048 South Lamar Blvd</p>
              <p>Austin, TX 78704</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Additional Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:flex flex-col items-end space-y-6"
        >
          {/* Floating Stats */}
          <div className="space-y-4 w-full max-w-sm">
            {[
              { number: '500MB', label: 'WiFi Speed', icon: Wifi },
              { number: '50+', label: 'Power Outlets', icon: Zap },
              { number: '5:30 AM', label: 'Opening Time', icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-primary/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm">Discover More</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;