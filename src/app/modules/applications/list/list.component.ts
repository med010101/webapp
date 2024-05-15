import { Component, ViewChild } from '@angular/core';
import { faEdit, faEye, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Application } from '../../../models/application';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  faPlus = faPlus;
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;

  addClientForm: FormGroup = new FormGroup({});
  id!: string;
  isAddMode!: boolean;
  loading = false;


  applications: Application[] = [
    {
      demand_id: 1,
      center: "Center A",
      appointment_sub_category: "Category X",
      booking_period: "Period Y",
      comments_for_agents: "Lorem ipsum dolor sit amet",
      service_type: "Service Type A",
      agence_convention_name: "Convention Name 1",
      agency_mobile_1: 1234567890,
      agency_mobile_2: 9876543210
    },
    {
      demand_id: 2,
      center: "Center B",
      appointment_sub_category: "Category Y",
      booking_period: "Period Z",
      comments_for_agents: "Consectetur adipiscing elit",
      service_type: "Service Type B",
      agence_convention_name: "Convention Name 2",
      agency_mobile_1: 2345678901,
      agency_mobile_2: 8765432109
    },
    // Add more application objects here as needed
  ];
  displayedColumns: string[] = ['center', 'appointment_sub_category', 'booking_period', 'comments_for_agents', 'service_type', 'agence_convention_name', 'agency_mobile', 'actions'];
  dataSource = new MatTableDataSource(this.applications);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

  }

  constructor(
    public dialog: MatDialog, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      width: '1024px', disableClose: true,
    });
  }

  deleteApplication(id: string) {

  }


}
