export type Language = 'typescript' | 'html';

export interface FileToPreview {
  fileName: string;
  fileContents: string;
  language: Language;
}
