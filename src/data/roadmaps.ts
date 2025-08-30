// TypeScript interfaces for roadmap data structure
export interface RoadmapStep {
  title: string;
  duration: string;
  description?: string;
  resources: string[];
  prerequisites?: string[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  steps: RoadmapStep[];
  tags: string[];
}

export interface InterestMapping {
  interests: string[];
  targetSkill: string;
  confidence: number; // 0-1 score for how well interests match
}

// Mock roadmap database
export const mockRoadmaps: Record<string, Roadmap> = {
  'web-development': {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'Complete path to becoming a full-stack web developer with modern technologies',
    difficulty: 'Beginner',
    estimatedTime: '6-8 months',
    tags: ['Frontend', 'Backend', 'JavaScript', 'React', 'Node.js'],
    steps: [
      {
        title: 'HTML & CSS Fundamentals',
        duration: '2-3 weeks',
        description: 'Learn the building blocks of web pages',
        resources: ['MDN Web Docs', 'freeCodeCamp HTML/CSS', 'CSS-Tricks'],
        prerequisites: []
      },
      {
        title: 'JavaScript Basics',
        duration: '4-6 weeks',
        description: 'Master the programming language of the web',
        resources: ['JavaScript.info', 'Eloquent JavaScript', 'MDN JavaScript Guide'],
        prerequisites: ['HTML & CSS Fundamentals']
      },
      {
        title: 'React Framework',
        duration: '6-8 weeks',
        description: 'Build interactive user interfaces with React',
        resources: ['React Official Docs', 'React Tutorial', 'React DevTools'],
        prerequisites: ['JavaScript Basics']
      },
      {
        title: 'Backend with Node.js',
        duration: '8-10 weeks',
        description: 'Create server-side applications and APIs',
        resources: ['Node.js Docs', 'Express.js Guide', 'RESTful API Design'],
        prerequisites: ['JavaScript Basics']
      },
      {
        title: 'Database Integration',
        duration: '3-4 weeks',
        description: 'Store and manage application data',
        resources: ['MongoDB University', 'PostgreSQL Tutorial', 'SQL Basics'],
        prerequisites: ['Backend with Node.js']
      }
    ]
  },
  
  'data-science': {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Journey from beginner to data scientist with Python and machine learning',
    difficulty: 'Intermediate',
    estimatedTime: '8-12 months',
    tags: ['Python', 'Statistics', 'Machine Learning', 'Data Analysis'],
    steps: [
      {
        title: 'Python Programming',
        duration: '4-6 weeks',
        description: 'Learn Python fundamentals for data science',
        resources: ['Python.org Tutorial', 'Automate the Boring Stuff', 'Python Crash Course'],
        prerequisites: []
      },
      {
        title: 'Statistics & Mathematics',
        duration: '6-8 weeks',
        description: 'Build mathematical foundation for data science',
        resources: ['Khan Academy Statistics', 'StatQuest YouTube', 'Think Stats'],
        prerequisites: ['Python Programming']
      },
      {
        title: 'Data Analysis with Pandas',
        duration: '4-5 weeks',
        description: 'Master data manipulation and analysis',
        resources: ['Pandas Documentation', '10 Minutes to Pandas', 'Python for Data Analysis'],
        prerequisites: ['Python Programming']
      },
      {
        title: 'Data Visualization',
        duration: '3-4 weeks',
        description: 'Create compelling data visualizations',
        resources: ['Matplotlib Docs', 'Seaborn Tutorial', 'Plotly Dash'],
        prerequisites: ['Data Analysis with Pandas']
      },
      {
        title: 'Machine Learning',
        duration: '10-12 weeks',
        description: 'Build predictive models and algorithms',
        resources: ['Scikit-learn', 'Coursera ML Course', 'Hands-On Machine Learning'],
        prerequisites: ['Statistics & Mathematics', 'Data Analysis with Pandas']
      }
    ]
  },

  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery',
    description: 'Comprehensive guide to modern digital marketing strategies',
    difficulty: 'Beginner',
    estimatedTime: '4-6 months',
    tags: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    steps: [
      {
        title: 'Digital Marketing Fundamentals',
        duration: '2-3 weeks',
        description: 'Understanding the digital marketing landscape',
        resources: ['Google Digital Marketing Course', 'HubSpot Academy', 'Marketing Land'],
        prerequisites: []
      },
      {
        title: 'Content Marketing Strategy',
        duration: '4-5 weeks',
        description: 'Create engaging content that converts',
        resources: ['Content Marketing Institute', 'Copyblogger', 'CoSchedule Blog'],
        prerequisites: ['Digital Marketing Fundamentals']
      },
      {
        title: 'Search Engine Optimization',
        duration: '5-6 weeks',
        description: 'Optimize for search engines and drive organic traffic',
        resources: ['Moz SEO Guide', 'Google Search Console', 'Ahrefs Academy'],
        prerequisites: ['Content Marketing Strategy']
      },
      {
        title: 'Social Media Marketing',
        duration: '3-4 weeks',
        description: 'Build brand presence across social platforms',
        resources: ['Facebook Blueprint', 'Hootsuite Academy', 'Buffer Blog'],
        prerequisites: ['Digital Marketing Fundamentals']
      },
      {
        title: 'Analytics & Optimization',
        duration: '4-5 weeks',
        description: 'Measure performance and optimize campaigns',
        resources: ['Google Analytics Academy', 'Google Tag Manager', 'Hotjar Academy'],
        prerequisites: ['SEO', 'Social Media Marketing']
      }
    ]
  },

  'mobile-development': {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications',
    difficulty: 'Intermediate',
    estimatedTime: '7-10 months',
    tags: ['React Native', 'iOS', 'Android', 'Mobile UI/UX'],
    steps: [
      {
        title: 'Mobile Development Fundamentals',
        duration: '2-3 weeks',
        description: 'Understanding mobile platforms and development approaches',
        resources: ['Mobile Development Overview', 'iOS vs Android', 'App Store Guidelines'],
        prerequisites: []
      },
      {
        title: 'JavaScript & React Basics',
        duration: '6-8 weeks',
        description: 'Master the foundation for React Native development',
        resources: ['JavaScript.info', 'React Documentation', 'ES6+ Features'],
        prerequisites: ['Mobile Development Fundamentals']
      },
      {
        title: 'React Native Framework',
        duration: '8-10 weeks',
        description: 'Build cross-platform mobile apps with React Native',
        resources: ['React Native Docs', 'Expo Documentation', 'React Native Navigation'],
        prerequisites: ['JavaScript & React Basics']
      },
      {
        title: 'Mobile UI/UX Design',
        duration: '4-5 weeks',
        description: 'Design intuitive mobile user interfaces',
        resources: ['Material Design', 'iOS Human Interface Guidelines', 'Mobile Design Patterns'],
        prerequisites: ['React Native Framework']
      },
      {
        title: 'App Deployment & Store Publishing',
        duration: '2-3 weeks',
        description: 'Deploy apps to App Store and Google Play',
        resources: ['App Store Connect', 'Google Play Console', 'App Deployment Guide'],
        prerequisites: ['Mobile UI/UX Design']
      }
    ]
  },

  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    description: 'Protect digital assets and systems from cyber threats',
    difficulty: 'Advanced',
    estimatedTime: '10-15 months',
    tags: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
    steps: [
      {
        title: 'IT & Networking Fundamentals',
        duration: '6-8 weeks',
        description: 'Build strong foundation in IT infrastructure',
        resources: ['CompTIA Network+', 'Cisco Networking Basics', 'TCP/IP Guide'],
        prerequisites: []
      },
      {
        title: 'Security Principles & Frameworks',
        duration: '4-6 weeks',
        description: 'Learn core security concepts and methodologies',
        resources: ['CISSP Study Guide', 'NIST Cybersecurity Framework', 'ISO 27001'],
        prerequisites: ['IT & Networking Fundamentals']
      },
      {
        title: 'Ethical Hacking & Penetration Testing',
        duration: '8-10 weeks',
        description: 'Learn to think like an attacker to better defend',
        resources: ['CEH Study Materials', 'Metasploit Unleashed', 'OWASP Testing Guide'],
        prerequisites: ['Security Principles & Frameworks']
      },
      {
        title: 'Incident Response & Forensics',
        duration: '6-8 weeks',
        description: 'Handle security incidents and investigate breaches',
        resources: ['SANS Incident Response', 'Digital Forensics Guide', 'Volatility Framework'],
        prerequisites: ['Ethical Hacking & Penetration Testing']
      },
      {
        title: 'Security Management & Compliance',
        duration: '4-6 weeks',
        description: 'Manage security programs and ensure compliance',
        resources: ['CISM Study Guide', 'GDPR Compliance', 'Security Risk Management'],
        prerequisites: ['Incident Response & Forensics']
      }
    ]
  }
};

// Interest-to-skill mapping algorithm
export const interestMappings: InterestMapping[] = [
  { interests: ['art', 'technology'], targetSkill: 'web-development', confidence: 0.85 },
  { interests: ['technology', 'art'], targetSkill: 'web-development', confidence: 0.85 },
  { interests: ['design', 'technology'], targetSkill: 'web-development', confidence: 0.9 },
  { interests: ['technology', 'design'], targetSkill: 'web-development', confidence: 0.9 },
  
  { interests: ['data', 'technology'], targetSkill: 'data-science', confidence: 0.95 },
  { interests: ['technology', 'data'], targetSkill: 'data-science', confidence: 0.95 },
  { interests: ['math', 'technology'], targetSkill: 'data-science', confidence: 0.8 },
  { interests: ['technology', 'math'], targetSkill: 'data-science', confidence: 0.8 },
  { interests: ['statistics', 'programming'], targetSkill: 'data-science', confidence: 0.9 },
  
  { interests: ['business', 'technology'], targetSkill: 'digital-marketing', confidence: 0.75 },
  { interests: ['technology', 'business'], targetSkill: 'digital-marketing', confidence: 0.75 },
  { interests: ['marketing', 'social media'], targetSkill: 'digital-marketing', confidence: 0.9 },
  { interests: ['social media', 'marketing'], targetSkill: 'digital-marketing', confidence: 0.9 },
  
  { interests: ['mobile', 'technology'], targetSkill: 'mobile-development', confidence: 0.85 },
  { interests: ['technology', 'mobile'], targetSkill: 'mobile-development', confidence: 0.85 },
  { interests: ['apps', 'programming'], targetSkill: 'mobile-development', confidence: 0.8 },
  
  { interests: ['security', 'technology'], targetSkill: 'cybersecurity', confidence: 0.9 },
  { interests: ['technology', 'security'], targetSkill: 'cybersecurity', confidence: 0.9 },
  { interests: ['hacking', 'security'], targetSkill: 'cybersecurity', confidence: 0.95 },
  { interests: ['security', 'hacking'], targetSkill: 'cybersecurity', confidence: 0.95 },
];

// Helper function to find best matching skill based on interests
export const findBestMatchingSkill = (interest1: string, interest2: string): string => {
  const normalizedInterest1 = interest1.toLowerCase().trim();
  const normalizedInterest2 = interest2.toLowerCase().trim();
  
  // Find exact matches first
  for (const mapping of interestMappings) {
    if (
      (mapping.interests[0] === normalizedInterest1 && mapping.interests[1] === normalizedInterest2) ||
      (mapping.interests[0] === normalizedInterest2 && mapping.interests[1] === normalizedInterest1)
    ) {
      return mapping.targetSkill;
    }
  }
  
  // Find partial matches
  let bestMatch = 'web-development';
  let highestScore = 0;
  
  for (const mapping of interestMappings) {
    let score = 0;
    if (mapping.interests.some(interest => 
      interest.includes(normalizedInterest1) || normalizedInterest1.includes(interest)
    )) {
      score += mapping.confidence * 0.5;
    }
    if (mapping.interests.some(interest => 
      interest.includes(normalizedInterest2) || normalizedInterest2.includes(interest)
    )) {
      score += mapping.confidence * 0.5;
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = mapping.targetSkill;
    }
  }
  
  return bestMatch;
};

// Helper function to get roadmap by skill name
export const getRoadmapBySkill = (skillName: string): Roadmap | null => {
  const normalizedSkill = skillName.toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  // Direct match
  if (mockRoadmaps[normalizedSkill]) {
    return mockRoadmaps[normalizedSkill];
  }
  
  // Partial match
  for (const [key, roadmap] of Object.entries(mockRoadmaps)) {
    if (
      roadmap.title.toLowerCase().includes(skillName.toLowerCase()) ||
      roadmap.tags.some(tag => tag.toLowerCase().includes(skillName.toLowerCase())) ||
      skillName.toLowerCase().includes(key.replace('-', ' '))
    ) {
      return roadmap;
    }
  }
  
  // Default fallback
  return mockRoadmaps['web-development'];
};