import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  constructor() { }

  @Input() delivery: number;
  @Input() itemsValue: number;

  ngOnInit() {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }

}
