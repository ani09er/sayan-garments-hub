import { motion } from "framer-motion";
import { Award, Users, Shield, Clock, Factory, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import manufacturingImg from "@/assets/manufacturing.jpg";

const values = [
  { icon: Award, title: "Quality First", desc: "Every garment passes through rigorous multi-stage quality checks before dispatch." },
  { icon: Users, title: "Skilled Workforce", desc: "Our team of trained professionals brings expertise to every stitch and seam." },
  { icon: Shield, title: "Quality Control", desc: "From raw fabric to finished product, we maintain the highest inspection standards." },
  { icon: Clock, title: "Timely Delivery", desc: "We understand that time is money. Our production schedules are built for reliability." },
  { icon: Factory, title: "Modern Infrastructure", desc: "Equipped with contemporary machinery and efficient production lines." },
  { icon: Heart, title: "Ethical Manufacturing", desc: "We are committed to fair labor practices and environmentally responsible production." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4"
          >
            About Us
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={manufacturingImg} alt="Garment craftsmanship" className="w-full aspect-[4/5] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Built on Trust, Driven by Quality
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
                <p>
                  SAYAN GARMENTS is a professionally managed garments company specializing in the manufacturing and supply of high-quality apparel. We focus on consistency, quality control, and long-term business partnerships.
                </p>
                <p>
                  Our state-of-the-art facility, combined with a team of experienced professionals, enables us to deliver products that meet international standards. From fabric sourcing to final packaging, every step is meticulously managed.
                </p>
                <p>
                  We believe in building relationships, not just filling orders. Our clients trust us for our transparency, reliability, and commitment to excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="What Defines Us" subtitle="The pillars that drive everything we do at SAYAN GARMENTS." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border p-6 hover:border-gold/40 transition-colors"
              >
                <item.icon className="text-gold mb-4" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
