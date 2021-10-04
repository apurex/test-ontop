import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ColumnHead } from 'src/app/_interfaces/column.interface';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  /**
   * Vars
   */
  @Input() columns: ColumnHead[] = [];
  @Input() data: any[] = [];
  @Input() showActions: boolean = false;

  @Input() length = 100;
  @Input() pageSize = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  // @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  pageEvent?: PageEvent;

  @Input() editAction: boolean = false;
  @Input() deleteAction: boolean = false;
  @Input() singAction: boolean = false;
  @Input() summaryAction: boolean = false;

  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() singEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() summaryEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  paginatorChanges(event?: PageEvent) {
    console.log(event);
    return event;
  }

}
