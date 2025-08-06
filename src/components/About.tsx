import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Users, Laptop, Heart, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Locally sourced beans, expertly crafted drinks, and innovative cold brew creations that fuel Austin\'s creative minds.'
    },
    {
      icon: Laptop,
      title: 'Work-Friendly',
      description: 'Ultra-fast WiFi, abundant outlets, ergonomic seating, and a noise-conscious environment designed for productivity.'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'A welcoming space where freelancers, students, and professionals connect, collaborate, and create.'
    },
    {
      icon: Heart,
      title: 'Local Love',
      description: 'Born in Austin, for Austin. We support local suppliers and give back to our community through various initiatives.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Established', icon: Award },
    { number: '500+', label: 'Daily Visitors', icon: Users },
    { number: '15hrs', label: 'Average Study Time', icon: Clock },
    { number: '4.9★', label: 'Google Rating', icon: Heart }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
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
            <Coffee className="w-4 h-4" />
            <span>About Corner Cup</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Austin's Favorite
            <span className="block text-primary">Study & Work Hub</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2019, we've been Austin's premier destination for remote workers, students, and coffee enthusiasts. 
            Our mission is simple: create the perfect environment where productivity meets exceptional coffee.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-xl text-center border border-border/50 hover:shadow-elegant transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold">
                More Than Just Coffee
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Corner Cup Coffee House was born from a simple observation: Austin's creative 
                  professionals needed a space that truly understood their needs. Fast, reliable 
                  WiFi isn't a luxury—it's essential. Comfortable seating with easy access to 
                  power isn't nice to have—it's necessary.
                </p>
                
                <p>
                  We've designed every aspect of our space with productivity in mind. From our 
                  quiet study zones to our collaborative areas, from our extensive outlet 
                  availability to our carefully curated playlist, everything serves our mission 
                  of being Austin's ultimate work-friendly cafe.
                </p>
                
                <p>
                  But it's not just about the workspace. Our baristas are passionate about 
                  craft coffee, specializing in the cold drinks that keep Austin cool and 
                  caffeinated. Whether you're here for a quick espresso or settling in for 
                  a full day of work, we've got you covered.
                </p>
              </div>
            </div>

            <div className="bg-accent/30 p-6 rounded-xl border border-border/50">
              <h4 className="font-semibold mb-3 text-lg">Special Programs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Student discounts with valid ID</li>
                <li>• Day passes with drink discounts</li>
                <li>• Silent Study Nights every Thursday (15% off)</li>
                <li>• Digital loyalty program</li>
                <li>• Monthly open mic nights</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Visit Us Today
              </Button>
              <Button variant="outline" size="lg">
                View Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;