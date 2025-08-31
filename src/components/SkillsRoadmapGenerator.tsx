import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Loader2, Target, Lightbulb, Clock, BarChart3, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-4xl space-y-8 lg:space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Personalized Learning Paths
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills Roadmap Generator
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a personalized learning path tailored to your goals and interests
          </p>
        </header>

        {/* Input Section */}
        <Card className="p-6 sm:p-8 shadow-elegant border-2 bg-card/50 backdrop-blur hover:shadow-glow transition-all duration-500 animate-scale-in">
          {/* Mode Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button
              variant={inputMode === 'skill' ? 'default' : 'outline'}
              onClick={() => setInputMode('skill')}
              className="h-12 text-base transition-all duration-300 hover:scale-105 group"
              size="lg"
            >
              <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              I know a skill I want to improve
            </Button>
            <Button
              variant={inputMode === 'interests' ? 'default' : 'outline'}
              onClick={() => setInputMode('interests')}
              className="h-12 text-base transition-all duration-300 hover:scale-105 group"
              size="lg"
            >
              <Lightbulb className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              I have interests to explore
            </Button>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 animate-fade-in">
            {inputMode === 'skill' ? (
              <div className="space-y-3">
                <Label htmlFor="skill" className="text-base font-medium text-foreground">
                  What skill do you want to develop?
                </Label>
                <Input
                  id="skill"
                  placeholder="e.g., Web Development, Data Science, Digital Marketing"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="h-12 text-base border-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 focus:shadow-glow"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <Label className="text-base font-medium text-foreground">What are you interested in?</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    id="interest1"
                    placeholder="First interest (e.g., art, technology)"
                    value={interest1}
                    onChange={(e) => setInterest1(e.target.value)}
                    className="h-12 text-base border-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 focus:shadow-glow"
                  />
                  <Input
                    id="interest2"
                    placeholder="Second interest (e.g., design, business)"
                    value={interest2}
                    onChange={(e) => setInterest2(e.target.value)}
                    className="h-12 text-base border-2 transition-all duration-300 focus:ring-2 focus:ring-primary/20 hover:border-primary/50 focus:shadow-glow"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Generate Button */}
          <Button
            onClick={generateRoadmap}
            disabled={isLoading || (inputMode === 'skill' ? !skill.trim() : !interest1.trim() || !interest2.trim())}
            className="w-full mt-8 h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 disabled:hover:scale-100 group"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Your Roadmap...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Generate Roadmap
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </Card>

        {/* Enhanced Output Section */}
        {roadmap && (
          <Card className="p-6 sm:p-8 shadow-elegant border-2 bg-card/50 backdrop-blur animate-fade-in hover:shadow-glow transition-all duration-500">
            {/* Roadmap Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{roadmap.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{roadmap.description}</p>
                </div>
                <div className="flex lg:flex-col gap-4 lg:gap-2 lg:text-right">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="h-4 w-4 text-primary" />
                    {roadmap.estimatedTime}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    {roadmap.difficulty}
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t">
                {roadmap.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Roadmap Steps */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                <h3 className="text-xl lg:text-2xl font-bold">Learning Path</h3>
              </div>
              
              <div className="space-y-6">
                {roadmap.steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < roadmap.steps.length - 1 && (
                      <div className="absolute left-5 top-14 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/30"></div>
                    )}
                    
                    <div className="group border-2 rounded-xl p-6 space-y-4 hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-background to-secondary/5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-bold text-lg lg:text-xl group-hover:text-primary transition-colors">{step.title}</h4>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <p className="text-sm font-medium">{step.duration}</p>
                          </div>
                        </div>
                      </div>
                      
                      {step.description && (
                        <p className="text-muted-foreground pl-0 sm:pl-14 leading-relaxed">{step.description}</p>
                      )}
                      
                      {/* Prerequisites */}
                      {step.prerequisites && step.prerequisites.length > 0 && (
                        <div className="pl-0 sm:pl-14 bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4">
                          <h4 className="font-semibold text-sm mb-2 text-orange-600 dark:text-orange-400 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Prerequisites:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.prerequisites.map((prereq: string, prereqIndex: number) => (
                              <span
                                key={prereqIndex}
                                className="px-2 py-1 bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 rounded text-xs font-medium"
                              >
                                {prereq}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Resources */}
                      <div className="pl-0 sm:pl-14">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Recommended Resources:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {step.resources.map((resource: string, resourceIndex: number) => (
                            <div
                              key={resourceIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3 hover:bg-secondary transition-colors"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span className="truncate">{resource}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}