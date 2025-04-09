import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input()
  productName!: string;

  @Input()
  author!: string;

  @Input()
  company!: string;

  @Input({ transform: booleanAttribute })
  isShow!: boolean;

  @Output()
  isShowChange = new EventEmitter<boolean>();

  @Input()
  photoUrl!: string;

  @Input()
  createDate!: Date;

  onsetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}
