import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Card {
  @Input() product: any;

  getRatingColor(rating: number): string {
    if (rating >= 4) return 'success';
    if (rating >= 3) return 'warning';
    return 'danger';
  }
}
