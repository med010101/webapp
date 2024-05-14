import { Component } from '@angular/core';
import { Client } from '../../../models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  client!: Client;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientsService // Inject your ClientService
  ) { }

  onEdit(): void {
    this.router.navigate(['clients/edit', this.id]); // Assuming the route for edit client is '/edit-client/:id'
  }

  onBack(): void {
    this.router.navigate(['/clients']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClient();
  }

  getClient(): void {
    this.clientService.getClientById(parseInt(this.id))
      .subscribe(data => {
        this.client = data.response;
      });
  }
}
