import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  activeId: any = 1;
  status: boolean = false;
  constructor(private router: Router, private sharedService: SharedService) {
    this.sharedService.getObservable().subscribe((res: any) => {
      this.status = true;
    });
    this.activeId = localStorage.getItem('id');
  }

  removeClass() {
    this.status = false;
  }

  onClickPrayer() {
    this.status = true;
    var id = localStorage.getItem('id');
    if (id == null) {
      this.activeId = 1;
      this.router.navigateByUrl('/tabs/prayer/' + 1);
    } else {
      this.activeId = id;
      this.router.navigateByUrl('/tabs/prayer/' + this.activeId);
    }
  }
}
