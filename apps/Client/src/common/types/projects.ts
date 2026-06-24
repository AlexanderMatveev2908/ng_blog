import { AppTypeT } from '@/features/projects/reducer';

export interface ProjectT {
  title: string;
  repo: string;
  live: string;
  appType: AppTypeT;
  defName: string;
  down: boolean;
  img: string;
  id: string;
}
