import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Users, Mic, Music, Book, Coffee, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const upcomingEvents = [
    {
      id: 1,
      title: 'Silent Study Night',
      description: 'Join our weekly focused study session with 15% off all drinks',
      date: 'Every Thursday',
      time: '6:00 PM - 10:00 PM',
      icon: Book,
      category: 'Weekly',
      highlight: true,
      features: ['15% drink discount', 'Quiet atmosphere', 'Extended hours', 'Group study tables']
    },
    {
      id: 2,
      title: 'Open Mic Night',
      description: 'Showcase your talent at our monthly community event',
      date: 'First Friday',
      time: '7:00 PM - 9:00 PM',
      icon: Mic,
      category: 'Monthly',
      highlight: false,
      features: ['Open to all', 'Sound system provided', 'Supportive audience', 'Coffee & snacks']
    },
    {
      id: 3,
      title: 'Freelancer Meetup',
      description: 'Network with Austin\'s creative freelancer community',
      date: 'Second Saturday',
      time: '10:00 AM - 12:00 PM',
      icon: Users,
      category: 'Monthly',
      highlight: false,
      features: ['Networking', 'Coffee talks', 'Skill sharing', 'Collaboration opportunities']
    },
    {
      id: 4,
      title: 'Coffee Cupping Session',
      description: 'Learn about coffee origins and tasting with our head barista',
      date: 'Third Sunday',
      time: '2:00 PM - 4:00 PM',
      icon: Coffee,
      category: 'Monthly',
      highlight: false,
      features: ['Guided tasting', 'Learn brewing methods', 'Coffee education', 'Take home samples']
    }
  ];

  const privateEvents = [
    {
      title: 'Study Groups',
      description: 'Book our space for your study group or class project',
      capacity: 'Up to 15 people',
      duration: '2-8 hours'
    },
    {
      title: 'Team Meetings',
      description: 'Professional meeting space with presentation setup',
      capacity: 'Up to 12 people',
      duration: '1-4 hours'
    },
    {
      title: 'Workshops',
      description: 'Host educational workshops in our community space',
      capacity: 'Up to 20 people',
      duration: '2-6 hours'
    },
    {
      title: 'Book Clubs',
      description: 'Perfect intimate setting for book discussions',
      capacity: 'Up to 10 people',
      duration: '1-3 hours'
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-hero relative overflow-hidden">
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
            <Calendar className="w-4 h-4" />
            <span>Community Events</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Connect &amp;
            <span className="block text-primary">Create Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a cafe, Corner Cup is Austin's creative community hub. 
            Join our regular events or book our space for your own gatherings.
          </p>
        </motion.div>

        {/* Regular Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Regular Events</h3>
            <Button variant="outline" className="hidden md:flex">
              View Full Calendar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 group ${
                  event.highlight ? 'ring-2 ring-primary/30' : ''
                }`}>
                  {event.highlight && (
                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <event.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {event.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {event.description}
                          </CardDescription>
                        </div>
                      </div>
                      <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What's Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-4" 
                      variant={event.highlight ? "default" : "outline"}
                    >
                      {event.highlight ? 'Join This Week' : 'Learn More'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Private Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Private Event Space</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book our welcoming space for your private gatherings, meetings, or special events. 
              We provide the perfect backdrop for meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privateEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-3 h-3 text-primary" />
                    <span>{event.capacity}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-3 h-3 text-primary" />
                    <span>{event.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 p-8 lg:p-12 rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you want to attend our regular events or book space for your own gathering, 
              Corner Cup is here to bring Austin's creative minds together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Book Private Event
              </Button>
              <Button variant="outline" size="lg">
                View Event Calendar
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;