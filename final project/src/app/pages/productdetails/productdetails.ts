import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../api/gamingapi';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
  productdetails: Game | undefined;
  id: string = '';

  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    const gameId = parseInt(this.id);
    
    this.http.get<Game[]>('/games.json').subscribe({
      next: (games) => {
        this.productdetails = games.find(g => g.id === gameId);
        this.cd.detectChanges();
      },
      error: (err) => console.error('Error fetching game details:', err)
    });
  }
}
