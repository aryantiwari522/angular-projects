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
    this.expanded[key] = !this.expanded[key];
  }
}
