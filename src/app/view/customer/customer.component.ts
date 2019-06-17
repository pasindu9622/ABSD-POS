import {Component, OnInit} from '@angular/core';
import {CustomerDTO} from '../../dto/customerDTO';
import {CustomerService} from '../../service/CustomerService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private customerDTO: CustomerDTO = new CustomerDTO();
  private customerList: Array<CustomerDTO> = [];

  constructor(
    private customerService: CustomerService
  ) {

  }

  ngOnInit() {
  }

  addCustomer() {
    this.customerService.addCustomer(this.customerDTO).subscribe(
      result => {
        if (result) {
          this.customerList.push(this.customerDTO);
        }

      }
    );
  }
}
