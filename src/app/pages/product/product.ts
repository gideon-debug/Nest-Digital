import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../component/cards/cards';
import { Game } from '../../api/gamingapi';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  data: Game[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.http.get<Game[]>('/games.json').subscribe({
      next: (games) => {
        this.data = games;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching games:', err)
    });
  }
}
