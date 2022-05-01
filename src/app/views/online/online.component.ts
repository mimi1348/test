import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  selectedTab: string ;

  showSubmenu: any[] = [];
  showInfo: any[] = [];

  menus: any[] = [

  
    /* Market */
    {
      class: 'bx bx-chart',
      item: 'Market',
      route: '/online/market',
      arrowDown: 'bx bx-chevron-down',
      arrowUp: 'bx bx-chevron-up',

      submenus: [
        {
          class: 'bx bx-coin-stack',
          item: 'Value',
          route: '/market/value',
        },
        {
          class: 'bx bx-line-chart',
          item: 'Indice',
          route: '/market/indice',
        },
       
      ],
    },
   
  ];

  constructor() { }

  ngOnInit() {}


  toggleMenu(index: number) {
    this.showSubmenu[index] = !this.showSubmenu[index];
  }

  toggleSubmenu(event: MouseEvent, item: any) {
    event.stopPropagation();
    this.showInfo[item] = !this.showInfo[item];
  }

}