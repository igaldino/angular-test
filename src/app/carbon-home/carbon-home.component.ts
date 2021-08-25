import { Component, OnInit } from '@angular/core';

import 'carbon-web-components/es/components/accordion/accordion';
import 'carbon-web-components/es/components/accordion/accordion-item';
import 'carbon-web-components/es/components/link/link';
import 'carbon-web-components/es/components/list/list-item';
import 'carbon-web-components/es/components/list/unordered-list';
import 'carbon-web-components/es/components/ui-shell/header';
import 'carbon-web-components/es/components/ui-shell/header-menu-button';
import 'carbon-web-components/es/components/ui-shell/header-name';
import 'carbon-web-components/es/components/ui-shell/header-nav';
import 'carbon-web-components/es/components/ui-shell/header-nav-item';
import 'carbon-web-components/es/components/ui-shell/header-menu';
import 'carbon-web-components/es/components/ui-shell/header-menu-item';

@Component({
  selector: 'app-carbon-home',
  templateUrl: './carbon-home.component.html',
  styleUrls: ['./carbon-home.component.scss']
})
export class CarbonHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
