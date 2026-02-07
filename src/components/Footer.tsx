import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl tracking-[0.15em] font-semibold mb-4">SAYAN GARMENTS</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Precision in Fabric. Excellence in Finish. A professionally managed garments company specializing in high-quality apparel manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {[
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Manufacturing", path: "/manufacturing" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>business@sayangarments.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Industrial Area, Textile Hub, India</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm tracking-wider uppercase mb-4 text-gold">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
            <p className="mt-6 text-xs text-primary-foreground/40">
              Business Hours: Mon–Sat, 9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {currentYear} SAYAN GARMENTS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
