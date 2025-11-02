import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Star, Calendar } from "lucide-react";
import { toast } from "sonner";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  experience: string;
  avatar: string;
  rating: number;
}

const Mentors = () => {
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Data Scientist",
      company: "Amazon India",
      expertise: ["Data Science", "Machine Learning", "Python"],
      experience: "8 years",
      avatar: "👩‍💼",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Lead Frontend Engineer",
      company: "Flipkart",
      expertise: ["React", "TypeScript", "System Design"],
      experience: "6 years",
      avatar: "👨‍💻",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Product Designer",
      company: "Paytm",
      expertise: ["UI/UX", "Figma", "Design Systems"],
      experience: "5 years",
      avatar: "👩‍🎨",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Tech Lead",
      company: "Microsoft",
      expertise: ["Full Stack", "Cloud", "Leadership"],
      experience: "10 years",
      avatar: "👨‍🏫",
      rating: 5.0,
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "Marketing Head",
      company: "Zomato",
      expertise: ["Digital Marketing", "Growth", "Analytics"],
      experience: "7 years",
      avatar: "👩‍💼",
      rating: 4.7,
    },
    {
      id: 6,
      name: "Arjun Mehta",
      role: "DevOps Engineer",
      company: "Google India",
      expertise: ["AWS", "Docker", "CI/CD"],
      experience: "6 years",
      avatar: "👨‍🔧",
      rating: 4.8,
    },
  ];

  const handleBookMentor = (mentor: Mentor) => {
    toast.success(`Booking request sent to ${mentor.name}!`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Mentorship Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn from <span className="gradient-text">Industry Experts</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get personalized guidance from experienced professionals in your field
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 animate-scale-in">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-1">50+</div>
              <p className="text-sm text-muted-foreground">Expert Mentors</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-1">1000+</div>
              <p className="text-sm text-muted-foreground">Sessions Completed</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-1">4.8★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>

          {/* Mentors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-card rounded-xl border border-border p-6 hover-glow animate-fade-in"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-3xl shadow-glow">
                    {mentor.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{mentor.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-muted-foreground">• {mentor.experience} experience</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button
                  variant="gradient"
                  className="w-full"
                  onClick={() => handleBookMentor(mentor)}
                >
                  <Calendar className="w-4 h-4" />
                  Book Session
                </Button>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border">
            <h2 className="text-2xl font-bold text-center mb-8">How Mentorship Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  1
                </div>
                <h3 className="font-semibold mb-2">Choose Your Mentor</h3>
                <p className="text-sm text-muted-foreground">
                  Browse profiles and select a mentor aligned with your goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  2
                </div>
                <h3 className="font-semibold mb-2">Schedule Session</h3>
                <p className="text-sm text-muted-foreground">
                  Pick a convenient time slot for your 1-on-1 video call
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                  3
                </div>
                <h3 className="font-semibold mb-2">Get Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized advice, feedback, and actionable insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mentors;
