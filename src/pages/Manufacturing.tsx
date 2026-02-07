import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import fabricSourcing from "@/assets/fabric-sourcing.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import packagingImg from "@/assets/packaging.jpg";

const steps = [
  {
    number: "01",
    title: "Fabric Sourcing",
    desc: "We source premium quality fabrics from trusted mills and suppliers, ensuring consistency in texture, color, and durability across every batch.",
    image: fabricSourcing,
  },
  {
    number: "02",
    title: "Cutting & Stitching",
    desc: "Precision cutting using modern CAD systems, followed by expert stitching by our skilled workforce ensures accuracy and minimal waste.",
    image: manufacturingImg,
  },
  {
    number: "03",
    title: "Quality Inspection",
    desc: "Multi-stage quality checks at every production phase — from inline inspection to final AQL audits — ensure zero-defect standards.",
    image: qualityControl,
  },
  {
    number: "04",
    title: "Packaging & Logistics",
    desc: "Professional packaging tailored to client requirements, with reliable logistics partnerships for timely domestic and international delivery.",
    image: packagingImg,
  },
];

const Manufacturing = () => {
  return (
    <Layout>
      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4"
          >
            Our Process
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="From Fabric to Finish"
            subtitle="A transparent look at how we manufacture every garment with precision and care."
          />
          <div className="space-y-20 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={step.image} alt={step.title} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-gold font-heading text-5xl font-bold opacity-30">{step.number}</span>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mt-2 mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
