import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() queryParams;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get charactersActive() {
    return this.router.url.includes('/characters') || this.router.url === "/";
  }

}
