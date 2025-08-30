import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Loader2, Target, Lightbulb } from 'lucide-react';

// Mock roadmap data
const mockRoadmaps = {
  'web development': {
    title: 'Web Development Roadmap',
    description: 'Complete path to becoming a full-stack web developer',
    steps: [
      { title: 'HTML & CSS Fundamentals', duration: '2-3 weeks', resources: ['MDN Web Docs', 'freeCodeCamp'] },
      { title: 'JavaScript Basics', duration: '4-6 weeks', resources: ['JavaScript.info', 'Eloquent JavaScript'] },
      { title: 'React Framework', duration: '6-8 weeks', resources: ['React Docs', 'React Tutorial'] },
      { title: 'Backend with Node.js', duration: '8-10 weeks', resources: ['Node.js Docs', 'Express.js Guide'] },
      { title: 'Database Integration', duration: '3-4 weeks', resources: ['MongoDB University', 'PostgreSQL Tutorial'] }
    ]
  },
  'data science': {
    title: 'Data Science Roadmap',
    description: 'Journey to becoming a data scientist',
    steps: [
      { title: 'Python Programming', duration: '4-6 weeks', resources: ['Python.org Tutorial', 'Automate the Boring Stuff'] },
      { title: 'Statistics & Math', duration: '6-8 weeks', resources: ['Khan Academy', 'StatQuest YouTube'] },
      { title: 'Data Analysis with Pandas', duration: '4-5 weeks', resources: ['Pandas Documentation', '10 Minutes to Pandas'] },
      { title: 'Machine Learning', duration: '10-12 weeks', resources: ['Scikit-learn', 'Coursera ML Course'] },
      { title: 'Deep Learning', duration: '8-10 weeks', resources: ['TensorFlow', 'Fast.ai'] }
    ]
  }
};

// Generate roadmap based on interests
const generateFromInterests = (interest1: string, interest2: string) => {
  const combinations = {
    'art,technology': 'web development',
    'technology,art': 'web development',
    'data,technology': 'data science',
    'technology,data': 'data science',
    'business,technology': 'web development',
    'technology,business': 'web development'
  };
  
  const key = `${interest1.toLowerCase()},${interest2.toLowerCase()}`;
  return combinations[key as keyof typeof combinations] || 'web development';
};

export default function SkillsRoadmapGenerator() {
  const [inputMode, setInputMode] = useState<'skill' | 'interests'>('skill');
  const [skill, setSkill] = useState('');
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [roadmap, setRoadmap] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRoadmap = async () => {
    if (inputMode === 'skill' && !skill.trim()) return;
    if (inputMode === 'interests' && (!interest1.trim() || !interest2.trim())) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let targetSkill = '';
    if (inputMode === 'skill') {
      targetSkill = skill.toLowerCase();
    } else {
      targetSkill = generateFromInterests(interest1, interest2);
    }
    
    const generatedRoadmap = mockRoadmaps[targetSkill as keyof typeof mockRoadmaps] || mockRoadmaps['web development'];
    setRoadmap(generatedRoadmap);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills Roadmap Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a personalized learning path tailored to your goals and interests
          </p>
        </header>

        {/* Input Section */}
        <Card className="p-8 mb-8 shadow-elegant border-0 bg-card/50 backdrop-blur">
          {/* Mode Selection */}
          <div className="flex gap-4 mb-8">
            <Button
              variant={inputMode === 'skill' ? 'default' : 'outline'}
              onClick={() => setInputMode('skill')}
              className="flex-1 h-12 text-base transition-smooth"
            >
              <Target className="mr-2 h-5 w-5" />
              I know a skill I want to improve
            </Button>
            <Button
              variant={inputMode === 'interests' ? 'default' : 'outline'}
              onClick={() => setInputMode('interests')}
              className="flex-1 h-12 text-base transition-smooth"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              I have interests to explore
            </Button>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            {inputMode === 'skill' ? (
              <div className="space-y-2">
                <Label htmlFor="skill" className="text-base font-medium">
                  What skill do you want to develop?
                </Label>
                <Input
                  id="skill"
                  placeholder="e.g., Web Development, Data Science, Digital Marketing"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="h-12 text-base border-2 transition-smooth focus:shadow-glow"
                />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="interest1" className="text-base font-medium">
                    First Interest
                  </Label>
                  <Input
                    id="interest1"
                    placeholder="e.g., Art, Technology, Business"
                    value={interest1}
                    onChange={(e) => setInterest1(e.target.value)}
                    className="h-12 text-base border-2 transition-smooth focus:shadow-glow"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest2" className="text-base font-medium">
                    Second Interest
                  </Label>
                  <Input
                    id="interest2"
                    placeholder="e.g., Data, Design, Marketing"
                    value={interest2}
                    onChange={(e) => setInterest2(e.target.value)}
                    className="h-12 text-base border-2 transition-smooth focus:shadow-glow"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Generate Button */}
          <Button
            onClick={generateRoadmap}
            disabled={isLoading || (inputMode === 'skill' ? !skill.trim() : !interest1.trim() || !interest2.trim())}
            className="w-full mt-8 h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Your Roadmap...
              </>
            ) : (
              'Generate Roadmap'
            )}
          </Button>
        </Card>

        {/* Output Section */}
        {roadmap && (
          <Card className="p-8 shadow-elegant border-0 bg-card/50 backdrop-blur animate-in slide-in-from-bottom duration-500">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">{roadmap.title}</h2>
              <p className="text-muted-foreground text-lg">{roadmap.description}</p>
            </div>
            
            <div className="space-y-4">
              {roadmap.steps.map((step: any, index: number) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground mb-2">Duration: {step.duration}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.resources.map((resource: string, resourceIndex: number) => (
                        <span
                          key={resourceIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}