import { Component, OnInit, NgZone} from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private  mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);
  links = [
    {
      name: 'Invoices',
      url: 'Invoices'
    },
    {
      name: 'Clients',
      url : 'Clients'
    }
  ];

  constructor(zone: NgZone) {
    this.mediaMatcher.addEventListener('change', () => {
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`));
    });
  }

  ngOnInit(): void {}

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
