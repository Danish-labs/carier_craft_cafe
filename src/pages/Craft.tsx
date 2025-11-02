import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Map, CheckCircle2, Circle, TrendingUp, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface Milestone {
  week: number;
  title: string;
  tasks: string[];
  completed: boolean;
}

const Craft = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [userName, setUserName] = useState("");
  const [roadmap, setRoadmap] = useState<Milestone[]>([]);
  const [readinessScore, setReadinessScore] = useState(0);

  useEffect(() => {
    const role = localStorage.getItem("selectedRole");
    const name = localStorage.getItem("userName");
    
    if (!role) {
      toast.error("Please complete the Career page first");
      navigate("/career");
      return;
    }

    setSelectedRole(role);
    setUserName(name || "");
    
    // Load saved progress or generate new roadmap
    const savedRoadmap = localStorage.getItem(`roadmap_${role}`);
    if (savedRoadmap) {
      const parsed = JSON.parse(savedRoadmap);
      setRoadmap(parsed);
      calculateReadiness(parsed);
    } else {
      const generatedRoadmap = generateRoadmap(role);
      setRoadmap(generatedRoadmap);
      localStorage.setItem(`roadmap_${role}`, JSON.stringify(generatedRoadmap));
    }
  }, [navigate]);

  const generateRoadmap = (role: string): Milestone[] => {
    const roadmaps: Record<string, Milestone[]> = {
      "Data Analyst": [
        { week: 1, title: "Excel & Statistics Basics", tasks: ["Master Excel formulas", "Learn descriptive statistics", "Practice data cleaning"], completed: false },
        { week: 2, title: "SQL Fundamentals", tasks: ["Learn SQL queries", "Practice joins and aggregations", "Database design basics"], completed: false },
        { week: 3, title: "Python for Data Analysis", tasks: ["Python basics", "Pandas library", "NumPy fundamentals"], completed: false },
        { week: 4, title: "Data Visualization", tasks: ["Matplotlib & Seaborn", "Create dashboards", "Storytelling with data"], completed: false },
        { week: 5, title: "Statistical Analysis", tasks: ["Hypothesis testing", "Probability distributions", "A/B testing"], completed: false },
        { week: 6, title: "Power BI / Tableau", tasks: ["Learn BI tools", "Create interactive dashboards", "Connect to data sources"], completed: false },
        { week: 7, title: "Advanced SQL", tasks: ["Window functions", "CTEs and subqueries", "Query optimization"], completed: false },
        { week: 8, title: "Real-world Project 1", tasks: ["Sales analysis project", "Customer segmentation", "Insights presentation"], completed: false },
        { week: 9, title: "Machine Learning Basics", tasks: ["Scikit-learn intro", "Regression models", "Classification basics"], completed: false },
        { week: 10, title: "Data Pipeline & ETL", tasks: ["ETL concepts", "Data warehousing", "Automation scripts"], completed: false },
        { week: 11, title: "Real-world Project 2", tasks: ["End-to-end analysis", "Dashboard creation", "Business recommendations"], completed: false },
        { week: 12, title: "Portfolio & Interview Prep", tasks: ["Build portfolio website", "Practice case studies", "Mock interviews"], completed: false },
      ],
      "Frontend Developer": [
        { week: 1, title: "HTML & CSS Mastery", tasks: ["Semantic HTML5", "CSS Grid & Flexbox", "Responsive design"], completed: false },
        { week: 2, title: "JavaScript Fundamentals", tasks: ["ES6+ syntax", "DOM manipulation", "Async programming"], completed: false },
        { week: 3, title: "React Basics", tasks: ["Components & Props", "State management", "React hooks"], completed: false },
        { week: 4, title: "Advanced React", tasks: ["Context API", "Custom hooks", "Performance optimization"], completed: false },
        { week: 5, title: "TypeScript", tasks: ["Type system", "Interfaces", "Generic types"], completed: false },
        { week: 6, title: "Styling Solutions", tasks: ["Tailwind CSS", "CSS Modules", "Styled components"], completed: false },
        { week: 7, title: "State Management", tasks: ["Redux basics", "React Query", "Zustand"], completed: false },
        { week: 8, title: "Testing", tasks: ["Jest basics", "React Testing Library", "E2E with Cypress"], completed: false },
        { week: 9, title: "Build Tools", tasks: ["Vite/Webpack", "Bundle optimization", "Environment config"], completed: false },
        { week: 10, title: "Real Project 1", tasks: ["E-commerce frontend", "API integration", "Auth flow"], completed: false },
        { week: 11, title: "Real Project 2", tasks: ["Dashboard application", "Charts & tables", "Export features"], completed: false },
        { week: 12, title: "Portfolio & Deploy", tasks: ["Portfolio website", "Deploy projects", "Resume building"], completed: false },
      ],
    };

    return roadmaps[role] || roadmaps["Data Analyst"];
  };

  const calculateReadiness = (currentRoadmap: Milestone[]) => {
    const completed = currentRoadmap.filter(m => m.completed).length;
    const score = Math.round((completed / currentRoadmap.length) * 100);
    setReadinessScore(score);
  };

  const toggleMilestone = (week: number) => {
    const updatedRoadmap = roadmap.map(milestone =>
      milestone.week === week ? { ...milestone, completed: !milestone.completed } : milestone
    );
    setRoadmap(updatedRoadmap);
    localStorage.setItem(`roadmap_${selectedRole}`, JSON.stringify(updatedRoadmap));
    calculateReadiness(updatedRoadmap);
    
    if (!roadmap.find(m => m.week === week)?.completed) {
      toast.success(`Week ${week} milestone completed!`);
    }
  };

  const canUnlockOpportunities = readinessScore >= 80;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-4">
              <Map className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Roadmap Engine</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="gradient-text">{selectedRole}</span> Roadmap
            </h1>
            <p className="text-lg text-muted-foreground">
              {userName && `Welcome ${userName}! `}Complete milestones to unlock opportunities
            </p>
          </div>

          {/* Readiness Score */}
          <div className="bg-gradient-card rounded-2xl border border-border p-8 shadow-card mb-8 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Readiness Score</h2>
                <p className="text-muted-foreground">
                  {canUnlockOpportunities 
                    ? "🎉 You're ready for opportunities!" 
                    : `${80 - readinessScore}% more to unlock opportunities`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold gradient-text">
                  {readinessScore}%
                </div>
                <TrendingUp className={`w-8 h-8 ${canUnlockOpportunities ? 'text-primary animate-glow-pulse' : 'text-muted-foreground'}`} />
              </div>
            </div>
            <Progress value={readinessScore} className="h-3" />
            
            {canUnlockOpportunities && (
              <Button
                size="lg"
                variant="gradient"
                className="w-full mt-6 animate-glow-pulse"
                onClick={() => navigate("/opportunities")}
              >
                <Unlock className="w-5 h-5" />
                Unlock Opportunities
              </Button>
            )}
          </div>

          {/* Roadmap Milestones */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">12-Week Learning Path</h2>
            
            <div className="grid gap-4">
              {roadmap.map((milestone) => (
                <div
                  key={milestone.week}
                  className={`p-6 rounded-xl border transition-all cursor-pointer ${
                    milestone.completed
                      ? "bg-gradient-primary border-primary shadow-glow"
                      : "bg-card border-border hover-glow"
                  }`}
                  onClick={() => toggleMilestone(milestone.week)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      milestone.completed ? "bg-primary-foreground/20" : "bg-muted"
                    }`}>
                      {milestone.completed ? (
                        <CheckCircle2 className={`w-6 h-6 ${milestone.completed ? "text-primary-foreground" : "text-primary"}`} />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-medium ${
                          milestone.completed ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}>
                          Week {milestone.week}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          milestone.completed 
                            ? "bg-primary-foreground/20 text-primary-foreground" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {milestone.completed ? "Completed" : "In Progress"}
                        </span>
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 ${
                        milestone.completed ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {milestone.title}
                      </h3>
                      <ul className="space-y-2">
                        {milestone.tasks.map((task, idx) => (
                          <li key={idx} className={`flex items-center gap-2 text-sm ${
                            milestone.completed ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Locked Opportunities Teaser */}
          {!canUnlockOpportunities && (
            <div className="mt-12 p-8 rounded-2xl bg-card/50 border border-border text-center">
              <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Opportunities Locked</h3>
              <p className="text-muted-foreground">
                Complete more milestones to reach 80% readiness and unlock verified internships
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Craft;
