import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./ui/logo";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Craft", path: "/craft" },
    { name: "Cafe", path: "/cafe" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Mentors", path: "/mentors" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12122B]/95 backdrop-blur-xl border-b border-[#FFA21F]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group interactive-hover">
            <Logo className="w-12 h-12" variant="gradient" />
            <span className="text-xl font-bold text-[#FFFAE5]">Career Craft Cafe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`relative px-6 py-2 ${
                    isActive(link.path) 
                      ? 'bg-[#FFA21F] text-[#12122B]' 
                      : 'text-[#FFFAE5] hover:bg-[#FFA21F]/10'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#12122B] animate-glow" />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-10 h-10 text-[#FFFAE5] hover:bg-[#FFA21F]/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-enter">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(link.path)
                      ? 'bg-[#FFA21F] text-[#12122B]'
                      : 'text-[#FFFAE5] hover:bg-[#FFA21F]/10'
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
