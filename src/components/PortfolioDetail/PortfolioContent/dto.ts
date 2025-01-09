export interface PortfolioData {
  id: number;
  title: string;
  writer: number;
  major_field: string;
  sub_field: string;
  description: string;
  skills: string[];
  experiences: string[];
  related_projects: number[];
  invite_url: string;
  created_at: string;
  is_public: boolean;
  views: number;
  username: string;
}

export interface RelatedProject {
  id: number;
  writer: number;
  title: string;
  project_img: string[];
}
