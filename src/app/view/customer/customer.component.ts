import {Component, OnInit} from '@angular/core';
import {CustomerDTO} from '../../dto/customerDTO';
import {CustomerService} from '../../service/CustomerService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDTO: CustomerDTO = new CustomerDTO();
  customerList: Array<CustomerDTO> = [];

  constructor(
    private customerService: CustomerService
  ) {

  }

  ngOnInit() {
  }

  addCustomer() {
    alert('work');
    this.customerService.addCustomer(this.customerDTO).subscribe(
      result => {
        if (result) {
          this.customerList.push(this.customerDTO);
        }

      }
    );
  }

  updateCustomer() {
    alert('work');
  }
}
