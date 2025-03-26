import { ProductCardComponent } from './product-card/product-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shopping-cart';
}
