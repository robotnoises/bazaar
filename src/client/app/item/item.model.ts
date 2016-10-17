export enum ListItemType {
  'ITEM',
  'ADVERTISEMENT'
};

export interface IListItem {
  title: string;
  description: string;
  type: ListItemType;
}

export class Item {
  title: string;
  description: string;
  ecv: number;
  type: ListItemType;

  constructor(values?: any) {
    this.title = (values) ? values.title : ''; 
    this.description = (values) ? values.description : '';
    this.ecv = (values) ? values.ecv : 0;
    this.type = ListItemType.ITEM;
  }
}

export class Advertisement {
  title: string;
  description: string;
  link: string;
  type: ListItemType;

  constructor(values?: any) {
    this.title = (values) ? values.title : ''; 
    this.description = (values) ? values.description : '';
    this.link = (values) ? values.link : '';
    this.type = ListItemType.ADVERTISEMENT;
  }
}