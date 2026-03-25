import React, { useState } from 'react';
import { 
  Search, 
  Mail, 
  Phone, 
  ChevronDown, 
  Play, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  MessageCircle,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const TopBar = () => (
  <div className="bg-insaac-dark text-white text-[11px] h-10 flex items-center px-4 md:px-10 lg:px-24">
    <div className="flex items-center h-full flex-1">
      <button className="bg-insaac-red text-white px-6 h-full font-bold tracking-wider uppercase text-[10px] hover:bg-red-700 transition-colors">
        REVENUE INTELLIGENCE
      </button>
      <div className="hidden md:flex items-center gap-6 ml-8 text-gray-300 font-medium">
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-insaac-red transition-colors">
          <Globe size={12} className="text-insaac-red" />
          <span>KENYA</span>
          <ChevronDown size={10} />
        </div>
        <div className="flex items-center gap-1.5">
          <span>Language:</span>
          <span className="text-insaac-red font-bold">EN</span>
        </div>
      </div>
    </div>
    <div className="flex items-center h-full gap-6">
      <div className="hidden xl:flex items-center gap-4 text-gray-300">
        <a href="mailto:info@insaac.com" className="flex items-center gap-1.5 hover:text-insaac-red transition-colors">
          <Mail size={12} className="text-insaac-red" />
          <span>info@insaac.com</span>
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-insaac-red transition-colors font-bold text-white">
          <span>Talk to Us</span>
          <ArrowRight size={12} className="text-insaac-red" />
        </a>
      </div>
      <div className="relative flex items-center h-full">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-[#2A2A2A] border-none text-[11px] h-full px-4 pr-10 w-32 md:w-48 focus:ring-0 outline-none"
        />
        <button className="absolute right-0 h-full px-3 flex items-center justify-center hover:text-insaac-red transition-colors">
          <Search size={14} />
        </button>
      </div>
    </div>
  </div>
);

const DropdownMenu = ({ items, isOpen }: { items: string[], isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-insaac-red z-50 py-2"
        >
          <ul className="flex flex-col">
            {items.map((item, idx) => (
              <li key={idx}>
                <a 
                  href="#" 
                  className="block px-6 py-3 text-[13px] font-bold text-insaac-dark hover:bg-insaac-gray hover:text-insaac-red transition-colors border-b border-gray-50 last:border-0"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  
  const menuData = {
    'About': [
      'About Insaac',
      'Vision, Mission & Values',
      'Leadership',
      'Corporate Governance',
      'Insaac Foundation',
      'Global Network Correspondent'
    ],
    'Services': [
      'By Solution',
      'By Industry',
      'Client Tools'
    ]
  };

  return (
    <header className="bg-white h-[100px] sticky top-0 z-40 flex items-center px-4 md:px-10 lg:px-24 border-b border-gray-100">
      <div className="flex items-center justify-between w-full max-w-[1240px] mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-insaac-red rounded-tr-2xl rounded-bl-2xl flex items-center justify-center text-white font-black text-xl italic">I</div>
              <div className="flex flex-col">
                <span className="text-insaac-dark font-sans text-xl font-black tracking-tighter leading-none">
                  INSAAC HEALTH
                </span>
                <span className="text-insaac-red font-sans text-lg font-bold tracking-[0.2em] leading-none mt-1">
                  — DYNAMICS —
                </span>
                <span className="text-[8px] font-bold text-insaac-muted mt-1 uppercase tracking-wider">Powering Health. Delivering Results</span>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Insights', 'Downloads', 'Contact'].map((item) => (
            <div 
              key={item}
              className="relative py-8 group"
              onMouseEnter={() => (item === 'About' || item === 'Services') && setOpenMenu(item)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className={`text-[13px] font-bold tracking-wide uppercase transition-colors flex items-center gap-1 pb-1 border-b-2 ${openMenu === item || (item === 'Home' && !openMenu) ? 'text-insaac-red border-insaac-red' : 'text-insaac-dark border-transparent hover:text-insaac-red hover:border-insaac-red'}`}>
                {item === 'Services' ? 'Products & Services' : item}
                {(item === 'About' || item === 'Services') && <ChevronDown size={14} />}
              </button>
              {(item === 'About' || item === 'Services') && (
                <DropdownMenu 
                  items={menuData[item as keyof typeof menuData]} 
                  isOpen={openMenu === item} 
                />
              )}
            </div>
          ))}
        </nav>
        
        <button className="lg:hidden p-2">
          <div className="w-6 h-0.5 bg-insaac-dark mb-1.5"></div>
          <div className="w-6 h-0.5 bg-insaac-dark mb-1.5"></div>
          <div className="w-6 h-0.5 bg-insaac-dark"></div>
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-[750px] w-full overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
        alt="Modern Healthcare Facility"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 hero-overlay"></div>
    </div>
    
    <div className="relative h-full max-w-[1240px] mx-auto px-4 md:px-10 lg:px-0 flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-1 bg-insaac-red"></div>
          <span className="text-white font-bold tracking-[0.3em] text-[10px] uppercase">Trusted by leading hospitals</span>
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-serif tracking-tight">
          Stop Losing Money to Revenue Leakage.
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-10 leading-relaxed font-light max-w-2xl">
          We help healthcare institutions recover revenue today while building financially resilient systems for tomorrow.
        </p>
        <div className="flex flex-wrap gap-5">
          <button className="bg-insaac-red text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-2xl flex items-center gap-3 group">
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-insaac-dark px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-insaac-gray transition-all shadow-2xl">
            Book an Audit
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const StatementStrip = () => (
  <section className="bg-wavy-red py-14 px-4 relative overflow-hidden">
    <div className="max-w-[1240px] mx-auto text-center relative z-10">
      <h2 className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto font-serif italic">
        Insaac is a trusted healthcare finance partner helping institutions recover revenue today while building financially resilient systems for tomorrow.
      </h2>
    </div>
  </section>
);

const IntroSection = () => (
  <section className="py-24 px-4 md:px-10 lg:px-24 bg-white">
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <div className="aspect-video bg-insaac-gray relative group cursor-pointer overflow-hidden rounded-sm shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Story"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-insaac-dark/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-insaac-red rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
              <Play fill="white" size={24} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-insaac-red text-2xl font-bold mb-6 font-serif uppercase tracking-wider">OUR STORY</h3>
          <p className="text-insaac-muted leading-relaxed text-lg mb-6">
            Discover how Insaac provides healthcare institutions with the opportunity to navigate financial uncertainty with confidence. We help secure tomorrow, today.
          </p>
          <button className="text-insaac-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-insaac-red transition-colors">
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <div className="bg-insaac-gray p-12 rounded-sm shadow-inner relative overflow-hidden min-h-[300px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-insaac-red/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6">
            {[
              { label: "RECOVERY", icon: "01" },
              { label: "SYSTEM DESIGN", icon: "02" },
              { label: "CAPACITY BUILDING", icon: "03" },
              { label: "SUSTAINABILITY", icon: "04" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 shadow-sm border-l-4 border-insaac-red">
                <span className="text-insaac-red font-bold text-xs block mb-2">{step.icon}</span>
                <span className="text-insaac-dark font-bold text-[10px] uppercase tracking-wider">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-insaac-red text-2xl font-bold mb-6 font-serif uppercase tracking-wider">HOW WE WORK</h3>
          <p className="text-insaac-muted leading-relaxed text-lg mb-6">
            We combine recovery, system redesign, and staff capacity building to protect revenue at every stage. Our holistic methodology ensures that improvements are sustainable.
          </p>
          <button className="text-insaac-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-insaac-red transition-colors">
            Our Methodology <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard: React.FC<{ title: string, desc: string, image: string, featured?: boolean }> = ({ title, desc, image, featured = false }) => (
  <div className="bg-white group overflow-hidden border border-gray-100 transition-all hover:shadow-2xl h-full flex flex-col">
    <div className={`overflow-hidden ${featured ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-10 flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-0.5 bg-insaac-red"></div>
        <h4 className="text-insaac-red font-serif font-bold text-xl uppercase tracking-tight">{title}</h4>
      </div>
      <p className="text-insaac-muted text-sm mb-8 leading-relaxed line-clamp-3 flex-1">{desc}</p>
      <button className="bg-insaac-gray text-insaac-dark font-bold text-[10px] uppercase tracking-widest px-6 py-3 flex items-center gap-2 group-hover:bg-insaac-red group-hover:text-white transition-all shadow-sm w-fit">
        READ MORE
        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Revenue Integrity Audit",
      desc: "Our flagship 7-day audit to uncover revenue leakage and insurer receivables gaps. We identify exactly where your money is going and how to get it back.",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=1200",
      featured: true
    },
    {
      title: "Medical Debt Collection",
      desc: "Ethical, structured debt recovery for healthcare institutions. We maintain patient relationships while ensuring your financial stability.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      title: "Financial Health Check",
      desc: "Diagnostic review of financial systems, inefficiencies, and cashflow risks. A comprehensive check-up for your institution's fiscal vitality.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      title: "Training & Advisory Services",
      desc: "Capacity building for finance, billing, claims, and workflow efficiency. Empowering your team with the knowledge to prevent future leaks.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      title: "Medical Invoice Delivery",
      desc: "Reliable invoice transmission and receivables support processes. Ensuring your billing reaches the right hands at the right time.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      featured: false
    }
  ];

  return (
    <section className="py-32 px-4 md:px-10 lg:px-24 bg-insaac-gray overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-insaac-dark text-4xl md:text-5xl font-bold mb-6 font-serif uppercase tracking-widest">Our Services</h2>
          <div className="w-24 h-1 bg-insaac-red mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={s.featured ? 'md:col-span-2' : 'md:col-span-1'}
            >
              <ServiceCard title={s.title} desc={s.desc} image={s.image} featured={s.featured} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FlagshipSection = () => (
  <section className="py-32 px-4 md:px-10 lg:px-24 bg-white">
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-insaac-red text-white inline-block px-4 py-1.5 font-bold text-[10px] tracking-[0.2em] uppercase">
            FLAGSHIP SERVICE
          </div>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>
        <h2 className="text-insaac-dark text-4xl md:text-5xl font-bold mb-8 leading-[1.1] font-serif uppercase tracking-tight">
          Hospital Revenue Integrity & Receivables Audit
        </h2>
        <div className="flex items-center gap-4 mb-10">
          <div className="text-insaac-red font-serif text-6xl font-bold">7</div>
          <div className="text-insaac-dark font-bold text-sm uppercase tracking-widest leading-tight">
            DAY<br />MODEL
          </div>
        </div>
        <p className="text-insaac-muted text-lg mb-12 leading-relaxed max-w-xl">
          Our proprietary audit methodology uncovers hidden leaks in your revenue cycle within just one week. We analyze insurer contracts, billing accuracy, and claims processing to provide actionable recovery strategies.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-insaac-red font-bold text-2xl mb-1 font-serif">100%</div>
            <div className="text-insaac-muted text-[10px] uppercase tracking-widest font-bold">Confidentiality</div>
          </div>
          <div>
            <div className="text-insaac-red font-bold text-2xl mb-1 font-serif">ROI</div>
            <div className="text-insaac-muted text-[10px] uppercase tracking-widest font-bold">Guaranteed Focus</div>
          </div>
        </div>
        <button className="bg-insaac-dark text-white px-12 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-insaac-red transition-all shadow-xl group flex items-center gap-3">
          Learn More About the Audit
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="order-1 lg:order-2">
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-insaac-gray rounded-full -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
            alt="Data Infographic"
            className="w-full h-full object-cover rounded-sm shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-12 -left-12 bg-insaac-red p-12 text-white hidden xl:block shadow-2xl z-20">
            <div className="text-6xl font-bold mb-2 font-serif">15%</div>
            <div className="text-[11px] uppercase tracking-[0.2em] font-bold leading-relaxed">
              Average Revenue<br />Recovery Identified
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const InsightCard = ({ title, date, desc }: { title: string, date: string, desc: string }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 group hover:bg-white/10 transition-all cursor-pointer">
    <div className="text-insaac-red text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
      <span className="w-4 h-0.5 bg-insaac-red"></span>
      {date}
    </div>
    <h4 className="text-white text-2xl font-bold mb-6 font-serif group-hover:text-insaac-red transition-colors leading-tight">{title}</h4>
    <p className="text-white/60 text-sm mb-10 leading-relaxed line-clamp-3">{desc}</p>
    <button className="bg-white/10 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-insaac-red transition-all">
      READ MORE
    </button>
  </div>
);

const InsightsSection = () => (
  <section className="relative py-32 px-4 md:px-10 lg:px-24 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1504868584819-f8e90526ef7d?auto=format&fit=crop&q=80&w=2000" 
        alt="Insights Background"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-insaac-dark/85"></div>
    </div>
    
    <div className="relative z-10 max-w-[1240px] mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-white text-4xl font-bold mb-6 font-serif uppercase tracking-widest">LATEST NEWS</h2>
        <div className="w-20 h-1 bg-insaac-red mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <InsightCard 
          date="March 15, 2026"
          title="Where Hospitals Lose Money Silently"
          desc="An in-depth look at the most common areas of revenue leakage in modern healthcare institutions and how to address them."
        />
        <InsightCard 
          date="March 10, 2026"
          title="Why Revenue Integrity Is a CEO Issue"
          desc="Revenue cycle management is no longer just for the finance department. Learn why institutional leadership must prioritize financial health."
        />
        <InsightCard 
          date="March 05, 2026"
          title="The Cost of Missing Documentation"
          desc="How incomplete patient records and missing pre-authorizations are draining your hospital's resources and delaying payments."
        />
      </div>
      
      <div className="mt-20 text-center">
        <button className="bg-insaac-red text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-2xl">
          CLICK HERE TO LEARN MORE ABOUT REVENUE RECOVERY
        </button>
      </div>
    </div>
  </section>
);

const CTAStrip = () => (
  <section className="bg-insaac-dark py-20 px-4">
    <div className="max-w-[1240px] mx-auto text-center">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-10 uppercase tracking-[0.2em] font-serif">
        Ready to recover your revenue?
      </h2>
      <button className="bg-insaac-red text-white px-14 py-5 font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all shadow-2xl">
        Book Your 7-Day Revenue Audit
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12 px-4 md:px-10 lg:px-24 border-t border-gray-100 relative">
    <div className="max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-insaac-red rounded-tr-2xl rounded-bl-2xl flex items-center justify-center text-white font-black text-xl italic">I</div>
            <div className="flex flex-col">
              <span className="text-insaac-dark font-sans text-xl font-black tracking-tighter leading-none">
                INSAAC HEALTH
              </span>
              <span className="text-insaac-red font-sans text-lg font-bold tracking-[0.2em] leading-none mt-1">
                — DYNAMICS —
              </span>
            </div>
          </div>
          <p className="text-insaac-muted text-sm leading-relaxed mb-8">
            Transforming healthcare finance through intelligence, integrity, and innovation.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center text-insaac-dark hover:bg-insaac-red hover:text-white hover:border-insaac-red transition-all rounded-full">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="font-bold text-insaac-dark uppercase tracking-widest text-[10px] mb-8">Quick Links</h5>
          <ul className="space-y-4 text-insaac-muted text-sm font-medium">
            {['Home', 'About Us', 'Our Services', 'Latest Insights', 'Downloads'].map((item) => (
              <li key={item}><a href="#" className="hover:text-insaac-red transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-insaac-dark uppercase tracking-widest text-[10px] mb-8">Services</h5>
          <ul className="space-y-4 text-insaac-muted text-sm font-medium">
            {['Revenue Integrity Audit', 'Debt Collection', 'Financial Health Check', 'Training & Advisory', 'Invoice Delivery'].map((item) => (
              <li key={item}><a href="#" className="hover:text-insaac-red transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-insaac-dark uppercase tracking-widest text-[10px] mb-8">Contact Us</h5>
          <ul className="space-y-6 text-insaac-muted text-sm font-medium">
            <li className="flex gap-4">
              <Phone size={18} className="text-insaac-red shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="text-insaac-red shrink-0" />
              <span>info@insaac.com</span>
            </li>
            <li className="flex gap-4">
              <Globe size={18} className="text-insaac-red shrink-0" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-insaac-muted text-[10px] uppercase tracking-[0.2em] font-bold">
        <div>All rights reserved © Insaac Healthcare Finance 2026</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-insaac-red transition-colors">Legal</a>
          <a href="#" className="hover:text-insaac-red transition-colors">Privacy</a>
          <a href="#" className="hover:text-insaac-red transition-colors">Cookie Notice</a>
          <a href="#" className="hover:text-insaac-red transition-colors">Disclaimer</a>
        </div>
      </div>
    </div>
    
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-[11px] font-bold text-insaac-dark border border-gray-100 hidden md:block">
        How can we help you?
      </div>
      <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </button>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <StatementStrip />
        <IntroSection />
        <ServicesSection />
        <FlagshipSection />
        <InsightsSection />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
