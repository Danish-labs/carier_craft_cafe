import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Career = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    interests: "",
    skills: "",
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const roles = generateRecommendations(formData);
      setRecommendations(roles);
      setIsAnalyzing(false);
      toast.success("Career analysis complete!");
    }, 2000);
  };

  const generateRecommendations = (data: typeof formData) => {
    const { course, interests, skills } = data;
    const recommendations: string[] = [];

    // Simple rule-based recommendations
    if (interests.toLowerCase().includes("data") || skills.toLowerCase().includes("python")) {
      recommendations.push("Data Analyst", "Data Scientist", "Business Intelligence Analyst");
    }
    if (interests.toLowerCase().includes("web") || skills.toLowerCase().includes("javascript")) {
      recommendations.push("Frontend Developer", "Full Stack Developer", "Web Developer");
    }
    if (interests.toLowerCase().includes("design") || skills.toLowerCase().includes("figma")) {
      recommendations.push("UI/UX Designer", "Product Designer", "Graphic Designer");
    }
    if (interests.toLowerCase().includes("marketing") || course.toLowerCase().includes("business")) {
      recommendations.push("Digital Marketing Specialist", "Content Strategist", "Marketing Analyst");
    }

    // Default recommendations
    if (recommendations.length === 0) {
      recommendations.push("Software Developer", "Project Manager", "Business Analyst");
    }

    return recommendations.slice(0, 5);
  };

  const handleContinueToCraft = () => {
    if (!selectedRole) {
      toast.error("Please select a role to continue");
      return;
    }
    // Store selected role for Craft page
    localStorage.setItem("selectedRole", selectedRole);
    localStorage.setItem("userName", formData.name);
    navigate("/craft");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Career Compass</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your <span className="gradient-text">Ideal Career</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Let AI analyze your profile and recommend the perfect career paths
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card mb-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
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
                <Label htmlFor="course">Current Course / Degree</Label>
                <Input
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  placeholder="e.g., B.Tech CSE, MBA, BCA"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="interests">Interests & Passions</Label>
                <Textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  placeholder="What topics, industries, or activities excite you?"
                  required
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="skills">Skills & Technologies</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="List your technical and soft skills"
                  required
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="gradient"
                className="w-full"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Analyzing Your Profile...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    Analyze & Get Recommendations
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Recommended Career Roles</h2>
                <p className="text-muted-foreground">
                  Based on your profile, here are the top matches for you
                </p>
              </div>

              <div className="grid gap-4">
                {recommendations.map((role, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border cursor-pointer transition-all ${
                      selectedRole === role
                        ? "bg-gradient-primary border-primary shadow-glow"
                        : "bg-card border-border hover-glow"
                    }`}
                    onClick={() => setSelectedRole(role)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 ${
                          selectedRole === role ? "text-primary-foreground" : "text-foreground"
                        }`}>
                          {role}
                        </h3>
                        <p className={`text-sm ${
                          selectedRole === role ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}>
                          {index === 0 ? "Best Match" : `Match Score: ${90 - index * 5}%`}
                        </p>
                      </div>
                      {selectedRole === role && (
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                variant="gradient"
                className="w-full"
                onClick={handleContinueToCraft}
                disabled={!selectedRole}
              >
                Continue to Craft Roadmap
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
