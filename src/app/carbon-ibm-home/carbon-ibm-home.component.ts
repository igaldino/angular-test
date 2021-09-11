import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import '@carbon/ibmdotcom-web-components/es/components/content-group-simple/index';
import '@carbon/ibmdotcom-web-components/es/components/dotcom-shell/index';
import '@carbon/ibmdotcom-web-components/es/components/leadspace-block/index';

@Component({
  selector: 'app-carbon-ibm-home',
  templateUrl: './carbon-ibm-home.component.html',
  styleUrls: ['./carbon-ibm-home.component.scss']
})
export class CarbonIbmHomeComponent implements OnInit {
  l1Data = {
    title: 'Carbon for DSWDown',
    url: '/carbon-ibm-home',
    menuItems: [
      { title: 'Carbon', titleEnglish: '/carbon-home', url: 'carbon-home' },
      { title: 'Carbon for IBM.com', titleEnglish: '/carbon-ibm-home', url: 'carbon-ibm-home' },
      { title: 'C4IDC TOC', titleEnglish: '/carbon-ibm-toc', url: 'carbon-ibm-toc' },
      { title: 'DSWDown', titleEnglish: '//localhost:4201/', url: '//localhost:4201/' }
    ]
  };

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
