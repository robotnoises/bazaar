import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from './index';
import { SearchService } from './search.service';

@Component({
  moduleId: module.id,
  providers: [SearchService],
  selector: 'bazaar-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {

  constructor(private router: Router, private searchService: SearchService) {    
    
  }

  // todo
}
