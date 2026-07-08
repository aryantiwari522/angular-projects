import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
  expanded: { [key: string]: boolean } = {};

  toggleExpand(key: string) {
    // Close all other items
    Object.keys(this.expanded).forEach(k => {
      if (k !== key) {
        this.expanded[k] = false;
      }
    });
    // Toggle the clicked item
    this.expanded[key] = !this.expanded[key];
  }
}
