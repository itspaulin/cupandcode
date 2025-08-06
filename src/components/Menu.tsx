import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coffee, Snowflake, Cookie, Salad, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import drinksImage from '@/assets/drinks-showcase.jpg';
import foodImage from '@/assets/food-spread.jpg';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('cold-drinks');

  const menuCategories = [
    { id: 'cold-drinks', name: 'Cold Drinks', icon: Snowflake },
    { id: 'hot-drinks', name: 'Hot Coffee', icon: Coffee },
    { id: 'food', name: 'Food & Snacks', icon: Cookie },
    { id: 'healthy', name: 'Healthy Options', icon: Salad }
  ];

  const menuItems = {
    'cold-drinks': [
      { name: 'Classic Cold Brew', price: '$3.75', description: 'Smooth, bold, and refreshing. Our signature cold brew steeped for 16 hours.', popular: true },
      { name: 'Iced Vanilla Latte', price: '$4.25', description: 'Espresso, milk, and vanilla syrup over ice. A sweet start to your day.' },
      { name: 'Caramel Iced Macchiato', price: '$4.75', description: 'Layered espresso with caramel and steamed milk, served over ice.' },
      { name: 'Nitro Cold Brew', price: '$4.50', description: 'Cold brew infused with nitrogen for a creamy, smooth texture.' },
      { name: 'Iced Americano', price: '$3.50', description: 'Bold espresso shots with cold water over ice.' },
      { name: 'Berry Smoothie', price: '$6.25', description: 'Mixed berries, banana, yogurt, and honey. Packed with antioxidants.', popular: true },
      { name: 'Green Power Smoothie', price: '$6.75', description: 'Spinach, mango, pineapple, and coconut water. Your daily dose of greens.' },
      { name: 'Tropical Paradise', price: '$7.25', description: 'Mango, passion fruit, coconut, and lime. Transport to the tropics.' },
      { name: 'Protein Power Smoothie', price: '$7.75', description: 'Banana, peanut butter, protein powder, and almond milk. Post-workout perfection.' }
    ],
    'hot-drinks': [
      { name: 'House Espresso', price: '$2.50', description: 'Rich, bold espresso shot made from our signature blend.' },
      { name: 'Cappuccino', price: '$3.75', description: 'Equal parts espresso, steamed milk, and velvety foam.' },
      { name: 'Flat White', price: '$4.25', description: 'Double shot espresso with microfoam milk. Simple perfection.' },
      { name: 'Honey Lavender Latte', price: '$4.75', description: 'House specialty with locally sourced honey and organic lavender.', popular: true },
      { name: 'Mocha', price: '$4.50', description: 'Rich chocolate and espresso with steamed milk and whipped cream.' },
      { name: 'Cortado', price: '$3.95', description: 'Equal parts espresso and warm milk. Smooth and balanced.' }
    ],
    'food': [
      { name: 'Everything Bagel', price: '$4.50', description: 'Toasted bagel with cream cheese, tomato, and red onion.' },
      { name: 'Avocado Toast Deluxe', price: '$8.25', description: 'Multigrain toast, smashed avocado, cherry tomatoes, feta, and hemp seeds.', popular: true },
      { name: 'Breakfast Sandwich', price: '$6.75', description: 'Egg, cheese, and your choice of bacon or sausage on a toasted bagel.' },
      { name: 'Croissant & Jam', price: '$3.50', description: 'Buttery croissant served with local artisan jam.' },
      { name: 'Blueberry Muffin', price: '$3.25', description: 'House-made with fresh blueberries and a hint of lemon.' },
      { name: 'Banana Bread', price: '$3.75', description: 'Moist, house-made banana bread with walnuts.' }
    ],
    'healthy': [
      { name: 'Austin Green Salad', price: '$9.50', description: 'Mixed greens, avocado, pecans, goat cheese, and balsamic vinaigrette.' },
      { name: 'Quinoa Power Bowl', price: '$11.75', description: 'Quinoa, roasted vegetables, chickpeas, and tahini dressing.', popular: true },
      { name: 'Greek Yogurt Parfait', price: '$5.25', description: 'Greek yogurt layered with granola and seasonal berries.' },
      { name: 'Acai Bowl', price: '$8.75', description: 'Acai puree topped with granola, banana, and coconut flakes.' },
      { name: 'Hummus & Veggie Wrap', price: '$7.25', description: 'House-made hummus with fresh vegetables in a spinach wrap.' },
      { name: 'Overnight Oats', price: '$4.75', description: 'Steel-cut oats with chia seeds, almond milk, and fresh fruit.' }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
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
            <Coffee className="w-4 h-4" />
            <span>Our Menu</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Fuel Your
            <span className="block text-primary">Productivity</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From energizing cold brews to nutritious smoothies and wholesome food options, 
            everything you need for a productive day.
          </p>
        </motion.div>

        {/* Featured Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src={drinksImage} 
              alt="Cold drinks and smoothies"
              className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold mb-2">Cold Drinks & Smoothies</h3>
                <p className="text-white/90">Austin's favorite iced beverages</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-2xl">
            <img 
              src={foodImage} 
              alt="Fresh food and snacks"
              className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold mb-2">Fresh Food & Snacks</h3>
                <p className="text-white/90">Healthy options for sustained energy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          {/* Custom Tab Navigation */}
          <div className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-muted/50 p-1 rounded-xl max-w-4xl mx-auto">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active background */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                
                {/* Content */}
                <category.icon className="w-4 h-4 relative z-10" />
                <span className="hidden sm:inline relative z-10 font-medium">
                  {category.name}
                </span>
                <span className="sm:hidden relative z-10 font-medium">
                  {category.name.split(' ')[0]}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Menu Content with AnimatePresence */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {menuItems[activeCategory]?.map((item, index) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group relative"
                    whileHover={{ y: -2 }}
                  >
                    {item.popular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                      >
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </motion.div>
                    )}
                    
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold text-lg ml-4 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Digital Loyalty Program</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our digital rewards program and earn points with every purchase. 
              Plus, get 15% off on Silent Study Nights every Thursday!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Order Online
              </Button>
              <Button variant="outline" size="lg">
                Join Rewards Program
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;