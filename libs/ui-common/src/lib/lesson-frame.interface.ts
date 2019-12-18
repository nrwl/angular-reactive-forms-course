import { FileToPreview } from './file-to-preview.interface';

export interface LessonFrame {
  working: FileToPreview[];
  completed: FileToPreview[];
}
