export interface ProjectData {
  id: number;
  writer: number;
  title: string;
  description: string;
  major_field: string;
  sub_field: string;
  tags: string[];
  skills: string[];
  links: { title: string; url: string }[];
  project_img: string[];
  created_at: string;
  is_public: boolean;
  liked_count: number;
  comment_count: number;
}
