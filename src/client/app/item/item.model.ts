export class Item {
  title: string;
  description: string;
  ecv: number;

  constructor(values?: any) {
    this.title = (values) ? values.title : ''; 
    this.description = (values) ? values.description : '';
    this.ecv = (values) ? values.ecv : 0;
  }
}