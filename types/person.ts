interface KnownFor {
  id: number;
  title?: string;
  name?: string;
  media_type: string;
}

export interface Person {
  id: number;
  name: string;
  original_name: string;
  known_for_department: string;
  profile_path: string;
  popularity: number;
  known_for: KnownFor[];
}
