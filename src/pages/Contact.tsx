import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  inquiryType: z.string().min(1, "Please select inquiry type"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "business@sayangarments.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Industrial Area, Textile Hub, India" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
];

const inquiryTypes = ["Wholesale", "Retail", "Custom Order", "Partnership"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your inquiry. We will get back to you within 24 business hours.",
    });
    setForm({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" });
    setErrors({});
  };

  const inputClass = "w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors";

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
            Contact Us
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Let's Talk Business" subtitle="Have an inquiry? Fill out the form and our team will respond within 24 business hours." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" className={inputClass} />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" className={inputClass} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone / WhatsApp" className={inputClass} />
                </div>
              </div>
              <div>
                <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className={inputClass}>
                  <option value="">Select Inquiry Type *</option>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.inquiryType && <p className="text-destructive text-xs mt-1">{errors.inquiryType}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={5}
                  className={inputClass + " resize-none"}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gold text-gold-foreground text-sm tracking-wider uppercase font-medium hover:bg-gold/90 transition-colors"
              >
                Submit Inquiry
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
