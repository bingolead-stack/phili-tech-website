import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark border-t border-brand-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo1.png"
                  alt="Infralyft LLC Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Innovating beyond boundaries. Empowering businesses with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="https://www.linkedin.com/company/infralyft-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a> */}
              <a
                href="https://x.com/infralyft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:admin@infralyft.com"
                className="text-gray-400 hover:text-brand-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Technology Consulting</li>
              <li>Enterprise Solutions</li>
              <li>Digital Transformation</li>
              <li>Cloud Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Cerritos, California, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+13239164730" className="hover:text-brand-cyan transition-colors">
                  +1 (323) 916-4730
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:admin@infralyft.com" className="hover:text-brand-cyan transition-colors">
                  admin@infralyft.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-navy-light">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Infralyft LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
