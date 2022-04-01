import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pages;
  @Input() currentPage;
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitSelected(page: number) {
    this.selected.emit(page);
  }

}
