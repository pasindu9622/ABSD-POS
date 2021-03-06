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
  isEdit: Boolean = false;
  customerId: number;

  constructor(
    private customerService: CustomerService
  ) {

  }

  ngOnInit() {
    this.getAll();
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
    // this.customerDTO.cid = 0;
    console.log(this.customerDTO.cid);
    console.log(JSON.stringify(this.customerDTO));
    alert(JSON.stringify(this.customerDTO));
    this.customerService.updateCustomer(this.customerDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  getAll() {

    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log('Customer List :- ' + JSON.stringify(this.customerDTO.cid));
    });

  }

  deleteCustomer(id: number) {
    alert('IDm componont :----> ' + id);
    this.customerService.deleteCustomer(id).subscribe(relsult => {
      if (relsult === true) {
        alert('Customer deleted successfully');
      } else {
        alert('Customer deleted failed');
      }
    });
  }

  loadCustomer(customer) {
    this.isEdit = true;
    const obj = this.customerDTO;
    this.customerDTO = Object.assign(obj, customer);
  }
}
