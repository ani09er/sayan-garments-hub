import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Terms = () => (
  <Layout>
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4"
        >
          Terms & Conditions
        </motion.h1>
        <div className="w-16 h-0.5 bg-gold mx-auto" />
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm text-muted-foreground">
        <h2 className="font-heading text-xl text-foreground">General Terms</h2>
        <p>By accessing and using the SAYAN GARMENTS website, you accept and agree to be bound by these terms and conditions.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">Orders & Inquiries</h2>
        <p>All orders and pricing are subject to confirmation. Minimum order quantities, pricing, and delivery timelines will be communicated upon inquiry.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">Intellectual Property</h2>
        <p>All content, images, and materials on this website are the property of SAYAN GARMENTS and may not be reproduced without written consent.</p>

        <h2 className="font-heading text-xl text-foreground mt-8">Limitation of Liability</h2>
        <p>SAYAN GARMENTS shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.</p>

        <p className="text-xs text-muted-foreground/60 mt-12">Last updated: February 2026</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
