import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import productsImg from "@/assets/products-showcase.jpg";
import fabricImg from "@/assets/fabric-sourcing.jpg";

const products = [
  {
    category: "Men's Wear",
    items: [
      { name: "Formal Shirts", fabric: "Cotton / Poly-Cotton", sizes: "S – 3XL" },
      { name: "Trousers & Chinos", fabric: "Cotton Twill / Blend", sizes: "28 – 42" },
      { name: "Casual T-Shirts", fabric: "100% Cotton / Jersey", sizes: "S – 3XL" },
    ],
  },
  {
    category: "Women's Wear",
    items: [
      { name: "Kurtis & Tops", fabric: "Rayon / Cotton", sizes: "S – XXL" },
      { name: "Formal Blouses", fabric: "Georgette / Crepe", sizes: "S – XL" },
      { name: "Palazzo & Trousers", fabric: "Cotton / Rayon", sizes: "S – XXL" },
    ],
  },
  {
    category: "Kids Wear",
    items: [
      { name: "Casual Sets", fabric: "100% Cotton", sizes: "2Y – 14Y" },
      { name: "School Uniforms", fabric: "Poly-Cotton", sizes: "22 – 42" },
    ],
  },
  {
    category: "Corporate / Uniforms",
    items: [
      { name: "Corporate Shirts", fabric: "Poly-Cotton", sizes: "S – 3XL" },
      { name: "Work Wear", fabric: "Cotton Drill", sizes: "S – 3XL" },
    ],
  },
  {
    category: "Custom Orders / OEM",
    items: [
      { name: "Private Label Manufacturing", fabric: "As per specification", sizes: "Custom" },
      { name: "Bulk Custom Orders", fabric: "As per specification", sizes: "Custom" },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={productsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4"
          >
            Our Products
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Product Categories" subtitle="Explore our range of professionally manufactured garments across all categories." />
          <div className="space-y-16 max-w-5xl mx-auto">
            {products.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.08 }}
              >
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-gold" />
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-card border border-border p-5 hover:border-gold/40 transition-colors"
                    >
                      <h4 className="font-medium text-foreground mb-3">{item.name}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><span className="text-foreground/70">Fabric:</span> {item.fabric}</p>
                        <p><span className="text-foreground/70">Sizes:</span> {item.sizes}</p>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-block mt-4 text-xs tracking-wider uppercase text-gold hover:text-gold/80 transition-colors font-medium"
                      >
                        Inquire Now →
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl lg:text-3xl text-charcoal-foreground font-semibold mb-4">
            Need Custom Manufacturing?
          </h2>
          <p className="text-charcoal-foreground/70 text-sm mb-8 max-w-md mx-auto">
            We offer private label and OEM manufacturing. Share your specifications and we'll deliver.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold text-gold-foreground text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-colors"
          >
            Contact for Custom Orders
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
