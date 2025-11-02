import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, ExternalLink, Building2, Filter } from "lucide-react";
import { toast } from "sonner";

interface Opportunity {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  domain: string;
  logo: string;
}

const Opportunities = () => {
  const navigate = useNavigate();
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [selectedDomain, setSelectedDomain] = useState("All");

  useEffect(() => {
    // Check if user has unlocked opportunities
    const savedRole = localStorage.getItem("selectedRole");
    if (!savedRole) {
      toast.error("Complete the Career and Craft pages first");
      navigate("/career");
      return;
    }

    const roadmap = localStorage.getItem(`roadmap_${savedRole}`);
    if (roadmap) {
      const parsed = JSON.parse(roadmap);
      const completed = parsed.filter((m: any) => m.completed).length;
      const score = Math.round((completed / parsed.length) * 100);
      
      if (score < 80) {
        toast.error("Reach 80% readiness to unlock opportunities");
        navigate("/craft");
        return;
      }
    }

    // Generate mock opportunities
    const mockOpportunities: Opportunity[] = [
      {
        id: 1,
        title: "Data Analyst Intern",
        company: "TechCorp India",
        location: "Bangalore, India",
        type: "Internship",
        domain: "Data Analytics",
        logo: "🚀",
      },
      {
        id: 2,
        title: "Junior Frontend Developer",
        company: "WebSolutions Pvt Ltd",
        location: "Pune, India",
        type: "Full-time",
        domain: "Web Development",
        logo: "💻",
      },
      {
        id: 3,
        title: "Business Analyst Trainee",
        company: "Startify",
        location: "Remote",
        type: "Internship",
        domain: "Business Analytics",
        logo: "📊",
      },
      {
        id: 4,
        title: "UI/UX Design Intern",
        company: "DesignHub",
        location: "Mumbai, India",
        type: "Internship",
        domain: "Design",
        logo: "🎨",
      },
      {
        id: 5,
        title: "Data Science Intern",
        company: "AI Innovations",
        location: "Hyderabad, India",
        type: "Internship",
        domain: "Data Science",
        logo: "🤖",
      },
      {
        id: 6,
        title: "Marketing Analyst",
        company: "GrowthLabs",
        location: "Delhi, India",
        type: "Full-time",
        domain: "Marketing",
        logo: "📈",
      },
    ];

    setOpportunities(mockOpportunities);
  }, [navigate]);

  const domains = ["All", "Data Analytics", "Web Development", "Business Analytics", "Design", "Data Science", "Marketing"];

  const filteredOpportunities = selectedDomain === "All" 
    ? opportunities 
    : opportunities.filter(opp => opp.domain === selectedDomain);

  const handleApply = (opportunity: Opportunity) => {
    toast.success(`Application initiated for ${opportunity.title}!`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-4">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Opportunity Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Verified Opportunities</span> Await
            </h1>
            <p className="text-lg text-muted-foreground">
              Congratulations! You've unlocked access to curated internships and job openings
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 animate-scale-in">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by Domain:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <Button
                  key={domain}
                  variant={selectedDomain === domain ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDomain(domain)}
                >
                  {domain}
                </Button>
              ))}
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-card rounded-xl border border-border p-6 hover-glow animate-fade-in"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-3xl shadow-glow">
                    {opportunity.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{opportunity.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{opportunity.company}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {opportunity.domain}
                    </span>
                  </div>
                </div>

                <Button
                  variant="gradient"
                  className="w-full"
                  onClick={() => handleApply(opportunity)}
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No opportunities found for this domain</p>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-card border border-border text-center">
            <h3 className="text-2xl font-bold mb-3">Keep Growing!</h3>
            <p className="text-muted-foreground mb-6">
              New opportunities are added weekly. Complete more roadmap milestones to increase your chances.
            </p>
            <Button variant="outline" onClick={() => navigate("/craft")}>
              Return to Roadmap
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Opportunities;
