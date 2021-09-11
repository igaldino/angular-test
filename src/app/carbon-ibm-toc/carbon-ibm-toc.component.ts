import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'carbon-web-components/es/components/button/button';
import 'carbon-web-components/es/components/form/form-item';
import 'carbon-web-components/es/components/input/input';
import 'carbon-web-components/es/components/search/search';

import '@carbon/ibmdotcom-web-components/es/components/content-group-simple/index';
import '@carbon/ibmdotcom-web-components/es/components/dotcom-shell/index';
import '@carbon/ibmdotcom-web-components/es/components/leadspace-block/index';
import '@carbon/ibmdotcom-web-components/es/components/table-of-contents/index';

@Component({
  selector: 'app-carbon-ibm-toc',
  templateUrl: './carbon-ibm-toc.component.html',
  styleUrls: ['./carbon-ibm-toc.component.scss']
})
export class CarbonIbmTocComponent implements OnInit {
  partNumber: string = '';
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

  onSearch() {
    console.log('value');
  }
}
