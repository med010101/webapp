import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit {
  addClientForm: FormGroup = new FormGroup({});
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientsService
  ) {}

  ngOnInit(): void {
    this.addClientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      personalMobile1: ['', Validators.required],
      personalMobile2: [''],
      birthDate: ['', Validators.required],
      rdvPaymentHandler: [''],
      cardHolder: [''],
      cardNumber: [''],
      month: [''],
      year: [''],
      cvv: ['']
    });

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      console.log(this.id);
      this.clientService
        .getClientById(parseInt(this.id))
        .subscribe((data) => {
          console.log(data);
          this.addClientForm.patchValue(data.response); // Populate form fields with client data
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addClientForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addClientForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.loading = true;
    this.clientService.createClient(this.addClientForm.value)
      .subscribe({
        next: (v) => {
          console.log('Client created successfully', v);
          this.router.navigate(['/clients']);
        },
        error: (e) => {
          console.error('Error occurred while creating client', e);
          this.loading = false;
        },
        complete: () => console.info('complete') 
    }
      );
    
    } else {
      console.log("send update request");
      this.clientService.updateClient(parseInt(this.id), this.addClientForm.value).subscribe({
        next: (v) => {
          console.log('Client updated successfully', v);
          this.router.navigate(['/clients']);
        },
        error: (e) => {
          console.error('Error occurred while updating client', e);
          this.loading = false;
        },
        complete: () => console.info('complete')
      });
    }
  }
  }

