import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: "MON" },
    { label: 'Cartão de Débito', value: "DEB" },
    { label: 'Cartão Refeição', value: "REF" }
  ];

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
  this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }

}
