import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService,
    private router: Router, private formBuilder: FormBuilder) { }

  delivery: number = 8;
  orderForm: FormGroup;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: "MON" },
    { label: 'Cartão de Débito', value: "DEB" },
    { label: 'Cartão Refeição', value: "REF" }
  ];

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: '',
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: '',
      number: '',
      optionAddress: '',
      paymentOption: ''
    });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.orderService.clear();
      this.router.navigate(['/order-sumary']);
    });
  }

}
