import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, Factory, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-fabric.jpg";
import productsImage from "@/assets/products-showcase.jpg";

const highlights = [
  { icon: Award, title: "Industry Experience", desc: "Years of expertise in garment manufacturing" },
  { icon: Users, title: "Skilled Workforce", desc: "Trained professionals at every stage" },
  { icon: Shield, title: "Quality Control", desc: "Rigorous multi-stage inspection" },
  { icon: Clock, title: "Timely Delivery", desc: "Reliable production schedules" },
  { icon: Factory, title: "Scalable Production", desc: "Capacity to meet any volume" },
  { icon: Truck, title: "Ethical Manufacturing", desc: "Responsible and compliant processes" },
];

const categories = [
  "Men's Wear",
  "Women's Wear",
  "Kids Wear",
  "Corporate / Uniforms",
  "Custom Orders / OEM",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Premium textile manufacturing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Established Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold mb-6 tracking-wide"
          >
            SAYAN GARMENTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10"
          >
            Precision in Fabric. Excellence in Finish.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-gold text-gold-foreground text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-colors"
            >
              View Collections
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Contact for Business
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Who We Are"
            subtitle="SAYAN GARMENTS is a professionally managed garments company specializing in the manufacturing and supply of high-quality apparel. We focus on consistency, quality control, and long-term business partnerships."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border p-6 text-center group hover:border-gold/40 transition-colors"
              >
                <item.icon className="mx-auto mb-4 text-gold" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Our Collections" subtitle="From everyday essentials to premium custom orders—quality across every category." light />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={productsImage} alt="Premium garments" className="w-full aspect-square object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-center gap-3 text-primary-foreground/80">
                    <span className="w-2 h-2 bg-gold shrink-0" />
                    <span className="text-lg font-light">{cat}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="inline-block mt-8 px-8 py-3 bg-gold text-gold-foreground text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-colors"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Why Choose Sayan Garments" subtitle="No marketing fluff. Straight facts." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Consistent quality standards across every order",
              "Competitive pricing without compromising craftsmanship",
              "Scalable production to meet growing demand",
              "Custom design support from concept to delivery",
              "Reliable timelines you can count on",
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4"
              >
                <span className="w-1.5 h-1.5 bg-gold mt-2 shrink-0" />
                <p className="text-foreground text-sm lg:text-base">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-wider uppercase text-muted-foreground mb-2">Trusted By</p>
          <p className="font-heading text-lg text-foreground">Retailers, Wholesalers, and Private Labels</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal text-charcoal-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold mb-4">Ready to Partner?</h2>
          <p className="text-charcoal-foreground/70 max-w-md mx-auto mb-8 text-sm lg:text-base">
            Whether you need wholesale orders, custom manufacturing, or OEM partnerships — let's talk business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-3.5 bg-gold text-gold-foreground text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
