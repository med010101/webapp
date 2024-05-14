import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  faPlus = faPlus;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.loadClients()
  }

  loadClients() {
    this.clientService.getClients().subscribe((data: any) => {
      console.log(data);
      this.clients = data.response;
  });
  }



  clients: Client[] = [];

  deleteClient(id: string) {
    const user = this.clients.find(x => x.id === id);
    if (!user) return;
    const confirmation = confirm(`Are you sure you want to perform the delete ? `);
    if (confirmation) {
      this.clientService.deleteClient(parseInt(id)).subscribe(() => {
        this.clients = this.clients.filter((client) => client.id !== id);
      });
    }
  }


}
