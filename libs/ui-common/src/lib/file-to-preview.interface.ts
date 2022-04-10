export type Language = 'typescript' | 'html';

export interface FileToPreview {
  fileName: string;
  fileContents: { default: string };
  language: Language;
}
