import { Component, OnInit } from '@angular/core';
import { ColumnHead } from 'src/app/_interfaces/column.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  client: string = 'Joel'
  columnsTable: ColumnHead[] = [];
  fakerData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initTable();

    this.fakerData = [
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Active',
        classStatus: 'active'
      },
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Active',
        classStatus: 'active'
      },
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Signature pending',
        classStatus: 'warning'
      },
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Active',
        classStatus: 'active'
      },
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Active',
        classStatus: 'active'
      },
      {
        name: 'Darlene Robertson',
        type: 'Traditional',
        start_date: '03/10/2021',
        amount: '$200 USD',
        status: 'Signature pending',
        classStatus: 'warning'
      },
    ];
  }

  initTable() {
    this.columnsTable = [
      {
        label: 'Contractor name',
        field: 'name',
        type: 'avatar'
      },
      {
        label: 'Type',
        field: 'type',
        type: 'text'
      },
      {
        label: 'Start date',
        field: 'start_date',
        type: 'date'
      },
      {
        label: 'Amount',
        field: 'amount',
        type: 'text'
      },
      {
        label: 'Status',
        field: 'status',
        type: 'status'
      }
    ];
  }

  rowEdit(row: any) {
    console.log(row);

  }

  rowDelete(row: any) {
    console.log(row);
  }

  rowSing(row: any) {
    console.log(row);
  }

  rowSummary(row: any) {
    console.log(row);
  }

  paginator(paginator: any) {
    console.log(paginator);

  }

}
