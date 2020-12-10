import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TableConfig<T>{
  columns: Array<ColumnConfig<T>>;
  data: Array<T>;
}

export interface ColumnConfig<T>{
  key: keyof T;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() config: TableConfig<any> | null;
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onRowSelected(row: any): void {
    if (this.rowSelected) {
      this.rowSelected.emit(row);
    }
  }

}
