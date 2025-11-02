import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Map, Users, TrendingUp, Brain, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Logo } from "@/components/ui/logo";

const Home = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Logo */}
            <Logo className="w-24 h-24 mx-auto mb-8" variant="gradient" animate />
            
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-oxford-blue/90 border border-[#FFA21F]/20 shadow-glow">
              <Sparkles className="w-5 h-5 text-[#FFA21F]" />
              <span className="text-base font-medium tagline text-[#FFFAE5]">AI-Powered Career Ecosystem</span>
            </div>
            
            <h1 className="text-5xl md:text-[56px] font-bold leading-tight tracking-tight text-[#FFFAE5]">
              AI-Powered Ecosystem for Guidance Growth & Opportunities
            </h1>
            
            <p className="text-xl text-[#FFFAE5] max-w-2xl mx-auto subheading leading-relaxed">
              Transform from confusion to career clarity through AI-driven consultancy, 
              structured roadmaps, and verified opportunities. 
              <span className="tagline block mt-2 text-[#C2C2C2]">Your GPS for the future.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/career">
                <Button 
                  size="lg" 
                  variant="gradient" 
                  className="text-lg px-10 py-6 bg-[#FFA21F] text-[#12122B] hover:bg-gradient-to-r from-[#FFA21F] to-[#840D0D] hover:text-[#FFFAE5] transition-all duration-300"
                >
                  <Rocket className="w-5 h-5" />
                  Try Demo
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-6 border-2 border-[#FFA21F] text-[#FFA21F] hover:bg-[#FFA21F] hover:text-[#12122B] transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-muted-foreground">
              Every year, over 1.2 crore Indian students graduate. But according to the India Skills Report 2024, 
              only 45% are employable. Not because they lack talent — but because they lack direction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-card border border-border hover-glow pop-up">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">No Clear Direction</h3>
                <p className="text-sm text-muted-foreground">
                  Students learn skills randomly without structure or strategy
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover-glow pop-up">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <Map className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Disconnected Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Taking courses without knowing how to connect them to real jobs
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border hover-glow pop-up">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">No Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Zero insight on how "job-ready" they actually are
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="gradient-text">Career Craft Cafe</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A three-pillar approach: Career (Consultancy), Craft (Roadmaps), Cafe (Community)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Career */}
            <Link to="/career" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border hover-glow pop-up">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Career</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered consultancy analyzes your skills and interests to recommend ideal career paths
                </p>
                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover Your Path
                  <span className="text-xl">→</span>
                </span>
              </div>
            </Link>

            {/* Craft */}
            <Link to="/craft" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border hover-glow">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <Map className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Craft</h3>
                <p className="text-muted-foreground mb-4">
                  Structured 12-week roadmaps with milestones, tracking, and dynamic readiness scoring
                </p>
                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Build Your Roadmap
                  <span className="text-xl">→</span>
                </span>
              </div>
            </Link>

            {/* Cafe */}
            <Link to="/cafe" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border hover-glow">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Cafe</h3>
                <p className="text-muted-foreground mb-4">
                  Access curated resources, mentorship opportunities, and host community events
                </p>
                <span className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Join Community
                  <span className="text-xl">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Vision & Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              To build a guided ecosystem that helps every student move from confusion to career clarity 
              through consultancy, structured roadmaps, and verified opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
                <p className="text-muted-foreground">Students Guided (Target)</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">60%</div>
                <p className="text-muted-foreground">Employability Improvement</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                <p className="text-muted-foreground">Internships Unlocked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-12 rounded-2xl bg-gradient-card border border-border shadow-elevated">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Career Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with our AI Career Compass and discover your ideal path in minutes
            </p>
            <Link to="/career">
              <Button size="lg" variant="gradient" className="text-lg px-8 py-6">
                <Sparkles className="w-5 h-5" />
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
