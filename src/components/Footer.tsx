import { Link } from "react-router-dom";
import { Mail, FileText, Info } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#12122B] border-t border-[#FFA21F]/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group hover:scale-[1.02] transform transition-all">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#FFA21F] to-[#840D0D] flex items-center justify-center shadow-[0_0_15px_rgba(255,162,31,0.2)] group-hover:shadow-[0_0_25px_rgba(255,162,31,0.4)] transition-all">
                <svg viewBox="0 0 100 100" className="w-6 h-6 animate-pulse">
                  <path
                    fill="#FFFAE5"
                    d="M50 20 C40 20 30 30 30 45 C30 65 45 75 50 85 C55 75 70 65 70 45 C70 30 60 20 50 20Z"
                    className="animate-flame"
                  />
                </svg>
              </div>
              <span className="font-bold text-[#FFFAE5] text-lg tracking-wide">Career Craft Cafe</span>
            </Link>
            <p className="text-sm text-[#C2C2C2] leading-relaxed max-w-xs">
              Building Careers, Crafting Futures. AI-powered ecosystem for guidance, growth & opportunities.
              <span className="block mt-2 text-[#FFA21F]/80 font-medium">Join us in shaping tomorrow.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-[#FFFAE5] subheading relative w-fit">
              Platform
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FFA21F] to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/career" 
                  className="text-sm text-[#C2C2C2] group flex items-center gap-2 hover:text-[#FFA21F] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA21F]/50 group-hover:bg-[#FFA21F] group-hover:shadow-[0_0_8px_rgba(255,162,31,0.5)] transition-all"></span>
                  <span className="group-hover:translate-x-1 transition-transform">AI Career Compass</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/craft" 
                  className="text-sm text-[#C2C2C2] group flex items-center gap-2 hover:text-[#FFA21F] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA21F]/50 group-hover:bg-[#FFA21F] group-hover:shadow-[0_0_8px_rgba(255,162,31,0.5)] transition-all"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Roadmap Engine</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/cafe" 
                  className="text-sm text-[#C2C2C2] group flex items-center gap-2 hover:text-[#FFA21F] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA21F]/50 group-hover:bg-[#FFA21F] group-hover:shadow-[0_0_8px_rgba(255,162,31,0.5)] transition-all"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Resource Hub</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/mentors" 
                  className="text-sm text-[#C2C2C2] group flex items-center gap-2 hover:text-[#FFA21F] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA21F]/50 group-hover:bg-[#FFA21F] group-hover:shadow-[0_0_8px_rgba(255,162,31,0.5)] transition-all"></span>
                  <span className="group-hover:translate-x-1 transition-transform">Find Mentors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6 text-[#FFFAE5] subheading relative w-fit">
              Company
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FFA21F] to-transparent"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-sm text-[#C2C2C2] hover:text-[#FFA21F] transition-all group flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-[#FFA21F]/5 group-hover:bg-[#FFA21F]/10 transition-colors">
                    <Info className="w-4 h-4 group-hover:scale-110 transition-transform text-[#FFA21F]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="text-sm text-[#C2C2C2] hover:text-[#FFA21F] transition-all group flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-[#FFA21F]/5 group-hover:bg-[#FFA21F]/10 transition-colors">
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform text-[#FFA21F]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-[#C2C2C2] hover:text-[#FFA21F] transition-all group flex items-center gap-3"
                >
                  <div className="p-1.5 rounded-lg bg-[#FFA21F]/5 group-hover:bg-[#FFA21F]/10 transition-colors">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-[#FFA21F]" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4 text-[#FFFAE5] subheading">Stay Updated</h3>
            <p className="text-sm text-[#C2C2C2] mb-4 leading-relaxed">
              Get the latest updates on career opportunities and learning resources.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-[#12122B] border-2 border-[#FFA21F]/20 rounded-md text-sm text-[#FFFAE5] placeholder:text-[#C2C2C2] focus:outline-none focus:border-[#FFA21F] transition-colors"
              />
              <Button 
                variant="gradient" 
                className="text-sm font-medium px-6 bg-gradient-to-r from-[#FFA21F] to-[#840D0D] text-[#FFFAE5] hover:shadow-[0_0_20px_rgba(255,162,31,0.3)] transition-all"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#FFA21F]/10 text-center">
          <p className="text-sm text-[#C2C2C2]">
            © 2025 Career Craft Cafe. All rights reserved. Building careers, one student at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
