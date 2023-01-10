import { Component } from '@angular/core';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private apiService: ApiService) { }

  search(event: any) {
    let searchKey = event.target.value
    this.apiService.searchKey.next(searchKey)
  }

}
