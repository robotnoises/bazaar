export class Search {
  title: string;
  description: string;
  ecv: number;

  constructor(title?: string, description?: string, ecv?: number) {
    this.title = title || ''; 
    this.description = description || '';
    this.ecv = ecv || 0;
  }
}