import { Component } from '@angular/core';
import { faHouse, faUser, faPaperPlane, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faHouse = faHouse;
  faUser = faUser;
  faPaperPlane = faPaperPlane;
  faUsers = faUsers

}
