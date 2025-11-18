import { Person } from "./person";

export interface PeopleResponse {
  page: number;
  results: Person[];
  total_pages: number;
  total_results: number;
}
