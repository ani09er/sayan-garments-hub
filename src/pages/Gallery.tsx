import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

import heroFabric from "@/assets/hero-fabric.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import productsShowcase from "@/assets/products-showcase.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import packaging from "@/assets/packaging.jpg";
import fabricSourcing from "@/assets/fabric-sourcing.jpg";

const images = [
  { src: heroFabric, alt: "Fabric production line", category: "Production" },
  { src: manufacturing, alt: "Garment craftsmanship", category: "Manufacturing" },
  { src: productsShowcase, alt: "Finished garments", category: "Products" },
  { src: qualityControl, alt: "Quality inspection", category: "Quality Control" },
  { src: packaging, alt: "Packaging facility", category: "Packaging" },
  { src: fabricSourcing, alt: "Fabric warehouse", category: "Raw Materials" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

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
            Gallery
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Inside Our Facility" subtitle="A visual journey through our manufacturing process and finished products." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                  <span className="text-primary-foreground text-sm tracking-wider uppercase p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
