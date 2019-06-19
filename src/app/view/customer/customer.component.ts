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
    // alert('work');
    this.customerDTO.cid = 0;
    console.log(JSON.stringify(this.customerDTO));
    this.customerService.addCustomer(this.customerDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  updateCustomer() {
    alert('work');
  }

  getAll() {

    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log('Customer List :- ' + JSON.stringify(this.customerList));
    });

  }
}
