import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Loader2, Target, Lightbulb, Clock, BarChart3 } from 'lucide-react';
import { mockRoadmaps, findBestMatchingSkill, getRoadmapBySkill, type Roadmap } from '@/data/roadmaps';

export default function SkillsRoadmapGenerator() {
  const [inputMode, setInputMode] = useState<'skill' | 'interests'>('skill');
  const [skill, setSkill] = useState('');
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRoadmap = async () => {
    if (inputMode === 'skill' && !skill.trim()) return;
    if (inputMode === 'interests' && (!interest1.trim() || !interest2.trim())) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let generatedRoadmap: Roadmap | null = null;
    
    if (inputMode === 'skill') {
      generatedRoadmap = getRoadmapBySkill(skill);
    } else {
      const targetSkill = findBestMatchingSkill(interest1, interest2);
      generatedRoadmap = mockRoadmaps[targetSkill] || mockRoadmaps['web-development'];
    }
    
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

        {/* Enhanced Output Section */}
        {roadmap && (
          <Card className="p-8 shadow-elegant border-0 bg-card/50 backdrop-blur animate-in slide-in-from-bottom duration-500">
            {/* Roadmap Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">{roadmap.title}</h2>
                  <p className="text-muted-foreground text-lg">{roadmap.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Clock className="h-4 w-4" />
                    {roadmap.estimatedTime}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BarChart3 className="h-4 w-4" />
                    {roadmap.difficulty}
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {roadmap.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Roadmap Steps */}
            <div className="space-y-6">
              {roadmap.steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < roadmap.steps.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold shadow-glow">
                      {index + 1}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pb-6">
                      <div className="bg-muted/30 border border-border/50 rounded-lg p-6">
                        <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                        <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </span>
                        </div>
                        {step.description && (
                          <p className="text-muted-foreground mb-4">{step.description}</p>
                        )}
                        
                        {/* Prerequisites */}
                        {step.prerequisites && step.prerequisites.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-medium text-sm mb-2 text-muted-foreground">Prerequisites:</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.prerequisites.map((prereq: string, prereqIndex: number) => (
                                <span
                                  key={prereqIndex}
                                  className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs"
                                >
                                  {prereq}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Resources */}
                        <div>
                          <h4 className="font-medium text-sm mb-3 text-foreground">Recommended Resources:</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.resources.map((resource: string, resourceIndex: number) => (
                              <span
                                key={resourceIndex}
                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth cursor-pointer"
                              >
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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