import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/_interfaces/menu-items.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [];

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Contracts',
        icon: 'person',
        link: 'https://www.ontop.ai/'
      },
      {
        label: 'Documents',
        icon: 'description',
        link: 'https://www.ontop.ai/'
      },
      {
        label: 'Payout',
        icon: 'payment',
        link: 'https://www.ontop.ai/'
      },
      {
        label: 'Time',
        icon: 'event',
        link: 'https://www.ontop.ai/'
      }
    ];
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
