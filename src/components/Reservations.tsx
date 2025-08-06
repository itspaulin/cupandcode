import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, Users, Wifi, Zap, Volume2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const Reservations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTable, setSelectedTable] = useState(null);

  const tableTypes = [
    {
      id: 'individual',
      name: 'Individual Workspace',
      capacity: '1 person',
      features: ['Power outlet', 'Ergonomic chair', 'Desk light'],
      price: 'Free with purchase',
      icon: Users,
      popular: false
    },
    {
      id: 'duo',
      name: 'Duo Table',
      capacity: '2 people',
      features: ['2 power outlets', 'Collaborative space', 'Whiteboard'],
      price: 'Free with purchase',
      icon: Users,
      popular: true
    },
    {
      id: 'group',
      name: 'Group Table',
      capacity: '4-6 people',
      features: ['Multiple outlets', 'Large surface', 'Meeting space'],
      price: '$10/hour',
      icon: Users,
      popular: false
    },
    {
      id: 'quiet',
      name: 'Quiet Zone',
      capacity: '1-2 people',
      features: ['Noise-reduced', 'Extra comfortable', 'Premium location'],
      price: '$5/hour',
      icon: Volume2,
      popular: false
    }
  ];

  const timeSlots = [
    '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '8:00 AM', '9:00 AM', 
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  return (
    <section id="reservations" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
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
            <span>Reserve Your Spot</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Secure Your
            <span className="block text-primary">Perfect Table</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reserve the ideal workspace for your productivity needs. From individual study spots 
            to collaborative group tables, we've got the perfect setup for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Table Selection */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Choose Your Workspace</h3>
              <div className="grid gap-6">
                {tableTypes.map((table, index) => (
                  <motion.div
                    key={table.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onClick={() => setSelectedTable(table.id)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      selectedTable === table.id 
                        ? 'ring-2 ring-primary' 
                        : 'hover:shadow-elegant'
                    }`}
                  >
                    <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50">
                      {table.popular && (
                        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 z-10">
                          <CheckCircle className="w-3 h-3" />
                          <span>Popular</span>
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <table.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{table.name}</CardTitle>
                              <CardDescription>{table.capacity}</CardDescription>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{table.price}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {table.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center space-x-1 bg-accent/50 text-accent-foreground px-2 py-1 rounded-md text-xs"
                            >
                              <Zap className="w-3 h-3" />
                              <span>{feature}</span>
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Special Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 p-6 rounded-xl border border-border/50"
            >
              <h4 className="font-bold text-lg mb-4">Every Table Includes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-sm">500MB WiFi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm">Power Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Comfort Guarantee</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-elegant sticky top-24">
              <CardHeader>
                <CardTitle>Reserve Now</CardTitle>
                <CardDescription>
                  Book your perfect workspace in advance
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="bg-background/50"
                  />
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
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Date
                  </label>
                  <Input 
                    id="date"
                    type="date"
                    className="bg-background/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      Start Time
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium mb-2">
                      Duration
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="6">6 hours</SelectItem>
                        <SelectItem value="8">8 hours</SelectItem>
                        <SelectItem value="full">Full day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium mb-2">
                    Number of People
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5">5 people</SelectItem>
                      <SelectItem value="6">6 people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <Textarea 
                    id="notes"
                    placeholder="Any special requirements?"
                    rows={3}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Reserve Table
                </Button>

                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>Free cancellation up to 2 hours before</p>
                  <p>Walk-ins welcome based on availability</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Reservation Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <CheckCircle className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Guaranteed Seating</h4>
                <p className="text-sm text-muted-foreground">Your perfect workspace is secured</p>
              </div>
              <div className="space-y-2">
                <Zap className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Priority Setup</h4>
                <p className="text-sm text-muted-foreground">Table ready when you arrive</p>
              </div>
              <div className="space-y-2">
                <Wifi className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Premium WiFi</h4>
                <p className="text-sm text-muted-foreground">Dedicated high-speed connection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservations;