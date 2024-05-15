import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../../models/client';
import { faPlus, faSearch, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

import { ClientsService } from '../../../services/clients.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;

  clients: Client[] = [];

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'personalMobile', 'actions'];
  dataSource = new MatTableDataSource(this.clients);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clientService: ClientsService) { }


  ngOnInit(): void {
    this.loadClients()

    // applies filtering to following columns
    // this.dataSource.filterPredicate = function (data, filter: string): boolean {
    //   return data.firstName.toLowerCase().includes(filter) || data.lastName.toLowerCase().includes(filter);
    // };

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadClients() {
    this.clientService.getClients().subscribe((data: any) => {
      this.clients = data.response;
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData);
  }

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
