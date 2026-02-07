import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12 lg:mb-16"
  >
    <h2 className={`font-heading text-3xl lg:text-4xl font-semibold mb-3 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
    {subtitle && (
      <p className={`max-w-2xl mx-auto text-sm lg:text-base leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
