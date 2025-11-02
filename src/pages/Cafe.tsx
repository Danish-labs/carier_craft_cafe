import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Coffee, BookOpen, Users, Calendar, Send, Star } from "lucide-react";
import { toast } from "sonner";

const Cafe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sponsorship request submitted! We'll get back to you soon.");
    setFormData({ name: "", email: "", eventType: "", description: "" });
  };

  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning Resources",
      description: "Curated courses, tutorials, and guides for your career path",
      items: ["Free coding bootcamps", "Industry certifications", "Technical blogs"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship Programs",
      description: "Connect with industry experts for personalized guidance",
      items: ["1-on-1 mentoring", "Group coaching", "Career counseling"],
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Community Events",
      description: "Workshops, webinars, and networking opportunities",
      items: ["Tech workshops", "Industry talks", "Networking sessions"],
    },
  ];

  const sponsors = [
    { name: "TechCorp", logo: "🚀", tagline: "Empowering future developers" },
    { name: "DataHub", logo: "📊", tagline: "Data-driven learning" },
    { name: "DesignLab", logo: "🎨", tagline: "Creative excellence" },
    { name: "StartupX", logo: "💡", tagline: "Innovation partners" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-4">
              <Coffee className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Community Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Cafe</span> Community
            </h1>
            <p className="text-lg text-muted-foreground">
              Resources, mentorship, and opportunities to grow together
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 animate-scale-in">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-6 hover-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 text-primary-foreground">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sponsorship Form */}
          <div className="bg-gradient-card rounded-2xl border border-border p-8 mb-16 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Host With Us</h2>
              <p className="text-muted-foreground">
                Want to host an event or workshop? Apply for sponsorship and support from our community
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="eventType">Event Type</Label>
                <Input
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  placeholder="e.g., Workshop, Webinar, Networking Event"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Event Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your event, target audience, and what support you need"
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" variant="gradient" className="w-full">
                <Send className="w-5 h-5" />
                Submit Application
              </Button>
            </form>
          </div>

          {/* Sponsors Section */}
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Our Partners</h2>
              <p className="text-muted-foreground">
                Trusted organizations supporting student growth and learning
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 text-center hover-glow"
                >
                  <div className="text-4xl mb-3">{sponsor.logo}</div>
                  <h3 className="font-bold mb-1">{sponsor.name}</h3>
                  <p className="text-xs text-muted-foreground">{sponsor.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border text-center">
            <h3 className="text-2xl font-bold mb-3">Join the Community</h3>
            <p className="text-muted-foreground mb-6">
              Connect with thousands of students building their careers together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                <Users className="w-5 h-5" />
                Join Discord
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5" />
                View Events
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cafe;
