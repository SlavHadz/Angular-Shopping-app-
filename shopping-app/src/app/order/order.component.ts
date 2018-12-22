import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  orderDetails;
  submitted = false;

  constructor(private fb: FormBuilder, private itemsService: ItemsService) { }

  get name() {
    return this.orderForm.get('name');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  get city() {
    return this.orderForm.get('address.city');
  }

  get postalCode() {
    return this.orderForm.get('address.postalCode');
  }

  get street() {
    return this.orderForm.get('address.street');
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: this.fb.group({
        city: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        street: ['', [Validators.required]]
      })
    });

    this.orderDetails = this.itemsService.getCart();
  }

  onSubmit() {
    const orderInfo = {
      orderDetails: this.orderDetails,
      customerDetails: this.orderForm.value
    };

    this.itemsService.sendOrder(orderInfo)
        .subscribe(
          response => {
            this.itemsService.clearCart();
            this.submitted = true;
          }
        );
  }
}
