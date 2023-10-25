import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isToolbarFixed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Set a threshold for scrolling to determine when the toolbar should be fixed
    const scrollThreshold = 100; // Adjust this value as needed
    const isScrolled = window.scrollY > scrollThreshold;

    // Update the isToolbarFixed variable based on scrolling
    this.isToolbarFixed = isScrolled;
  }
}
