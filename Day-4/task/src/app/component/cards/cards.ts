import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Card {
  @Input() product: any;
}