import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fakeapi } from '../../fakeapi';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
  productdetails: any;
  id: string = '';
  
  constructor(
    private api: Fakeapi,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.api.getFakeProductsById(this.id).subscribe((res: any) => {
      this.productdetails = res;
      this.cd.detectChanges();
    });
  }
}