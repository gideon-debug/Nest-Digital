import { ChangeDetectorRef, Component } from '@angular/core';
import { Fakeapi } from '../../fakeapi';
import { Card } from '../../component/cards/cards';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  data: any[] = [];

  constructor(private api: Fakeapi, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getFakeProducts().subscribe((res: any) => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }
}
