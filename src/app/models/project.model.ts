export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category: string;
  icon?: string;
}
