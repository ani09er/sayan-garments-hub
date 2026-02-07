import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Privacy = () => (
  <Layout>
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4"
        >
          Privacy Policy
        </motion.h1>
        <div className="w-16 h-0.5 bg-gold mx-auto" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm text-muted-foreground">
        <h2 className="font-heading text-xl text-foreground">Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, company name, email address, phone number, and inquiry details when you use our contact form.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">How We Use Information</h2>
        <p>Your information is used solely to respond to your business inquiries, process orders, and maintain our business relationship. We do not sell or share your personal information with third parties for marketing purposes.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">Contact</h2>
        <p>For privacy-related questions, contact us at business@sayangarments.com.</p>

        <p className="text-xs text-muted-foreground/60 mt-12">Last updated: February 2026</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
