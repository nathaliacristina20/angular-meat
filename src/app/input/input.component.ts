import { Component, OnInit, ContentChild, AfterContentInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }

  input: any;
  @Input() errorMessage: string;
  @Input() label: string;

  @ContentChild(NgModel) model: NgModel;

  ngOnInit() {
  }

  ngAfterContentInit(){

    this.input = this.model;

    if (this.input === undefined){
      throw new Error('Este componente precisa ser usado com a diretiva ngModel.');
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touch);
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touch);
  }

}
