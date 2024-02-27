// search-bar.component.ts
import { Component } from '@angular/core';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  imports: [SearchResultsComponent],
})
export class SearchBarComponent {
  onQueryChanged(query: string = '') {
    console.log(query);
  }
}
