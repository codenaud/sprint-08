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
  private debounceTimer?: NodeJS.Timeout;
  onQueryChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      console.log('Mandar este query:', query);
    }, 350);
  }
}
