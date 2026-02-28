import { motion } from "motion/react";
import { Instagram, Linkedin, Video, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function App() {
  const portfolioItems = [
    {
      title: "Wilderness",
      category: "Cinematography",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Urban Pulse",
      category: "Direction",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Frame",
      category: "Editing",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-arial-black text-xl tracking-widest uppercase"
          >
            Badreddine &nbsp; Tyl
          </motion.div>
          <div className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            {["home", "about", "portfolio", "contact"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="hover:text-neutral-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg h-screen flex flex-col items-center justify-center text-white text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border-2 border-white p-8 md:p-16 backdrop-blur-sm"
        >
          <h1 className="font-serif text-5xl md:text-8xl uppercase tracking-[0.2em] mb-4">
            BADREDDINE
          </h1>
          <p className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase opacity-80">
            Visual Storyteller & Creator
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white grain-texture relative overflow-hidden">
        <div className="max-w-2xl mx-auto font-mono text-sm leading-relaxed text-neutral-700 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-serif text-4xl text-black mb-20 uppercase tracking-[0.2em]"
          >
            About Badreddine Tyl
          </motion.h2>
          
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Driven by a deep passion for cinema, Badreddine Tyl is a videographer defined by high energy and a powerful creative vision. Forged by the mastery of Martin Scorsese, Quentin Tarantino, Christopher Nolan, Steven Spielberg, and David Fincher, he blends classic storytelling with a modern, kinetic edge. For Badreddine, videography is the ultimate tool for communication; it is his way of translating his unique perspective for others. His goal is to lead the audience behind the lens, helping them see the world exactly as he does: a place of constant motion and cinematic beauty.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-12 text-center"
            >
              <p className="italic font-serif text-lg text-neutral-900 underline decoration-1 underline-offset-8">
                effortless effort
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif text-2xl uppercase tracking-[0.3em] mb-16 text-center"
          >
            Portfolio
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden bg-black aspect-[4/5] md:aspect-video cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition duration-1000 ease-out"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[2px]">
                  <p className="font-serif text-2xl tracking-tight">{item.title}</p>
                  <div className="flex items-center space-x-2 mt-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em]">{item.category}</p>
                    <ArrowUpRight size={12} className="opacity-50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl uppercase tracking-[0.2em] mb-12">Contact</h2>
          
          <div className="space-y-4 mb-16">
            <a 
              href="mailto:hello@badreddine.com" 
              className="group flex items-center justify-center space-x-3 font-mono text-sm text-neutral-600 hover:text-black transition-colors"
            >
              <Mail size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              <span>HELLO@BADREDDINE.COM</span>
            </a>
            <div className="flex items-center justify-center space-x-3 font-mono text-sm text-neutral-600">
              <Phone size={16} className="opacity-40" />
              <span>+1 234 567 890</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-10">
            <a href="#" className="text-neutral-400 hover:text-black transition-colors duration-300 flex items-center space-x-2">
              <Instagram size={18} />
              <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors duration-300 flex items-center space-x-2">
              <Video size={18} />
              <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">Vimeo</span>
            </a>
            <a href="#" className="text-neutral-400 hover:text-black transition-colors duration-300 flex items-center space-x-2">
              <Linkedin size={18} />
              <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline">LinkedIn</span>
            </a>
          </div>
          
          <div className="mt-32 pt-8 border-t border-neutral-100">
            <p className="font-mono text-[10px] text-neutral-400 tracking-[0.3em] uppercase">
              © 2026 Badreddine Tyl — All Rights Reserved
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
