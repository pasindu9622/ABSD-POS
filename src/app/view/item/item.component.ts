import {Component, OnInit} from '@angular/core';
import {ItemDTO} from '../../dto/itemDTO';
import {ItemService} from '../../service/ItemService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemDTO: ItemDTO = new ItemDTO();
  itemList: Array<ItemDTO> = [];
  isEdit: Boolean = false;
  itemId: number;

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
  }

  addItem() {
     alert('work');
    this.itemDTO.id = 0;
    console.log(JSON.stringify(this.itemDTO));
    this.itemService.addItem(this.itemDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  updateItem() {
    // this.customerDTO.cid = 0;
    console.log(this.itemDTO.id);
    console.log(JSON.stringify(this.itemDTO));
    alert(JSON.stringify(this.itemDTO));
    this.itemService.updateItem(this.itemDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  getAll() {

    this.itemService.getItem().subscribe(result => {
      this.itemList = result;
      console.log('Customer List :- ' + JSON.stringify(this.itemDTO.id));
    });

  }

  deleteItem(id: number) {
    alert('IDm componont :----> ' + id);
    this.itemService.deleteItem(id).subscribe(relsult => {
      if (relsult === true) {
        alert('Item deleted successfully');
      } else {
        alert('Item deleted failed');
      }
    });
  }

  loadCustomer(item) {
    this.isEdit = true;
    const obj = this.itemDTO;
    this.itemDTO = Object.assign(obj, item);
  }

}
