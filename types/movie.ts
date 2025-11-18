import { MediaBase } from "./media";

export interface Movie extends MediaBase {
  title: string;
  release_date?: string;
  runtime?: number;
  media_type?: "movie";
}
