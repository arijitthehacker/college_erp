import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutePartsService } from './services/router/router-parts.service';
import { SwUpdate } from '@angular/service-worker';
import { CommonService } from './services/commonService/common.service';
import { CONSTANT } from './core/constant';

import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from '../environments/environment';
import { HttpService } from './services/http/http.service';
import { ApiUrl } from './core/apiUrl';
import { MessageService } from './services/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  appTitle = CONSTANT.SITE_NAME;
  pageTitle = '';


  constructor(
    private router: Router, private activeRoute: ActivatedRoute, private routePartsService: RoutePartsService,
    private title: Title, private swUpdate: SwUpdate, public commonService: CommonService,
    public http: HttpService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.changePageTitle();
    this.checkNewVersion();


  }


  changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange) => {
      const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);

      if (!routeParts.length) {
        return this.title.setTitle(this.appTitle);
      }
      // Extract title from parts;
      this.pageTitle = routeParts.reverse().map((part) => part.title).reduce((partA, partI) => `${partA} > ${partI}`);
      this.commonService.title = this.pageTitle;
      this.commonService.breadcrumb = routeParts[0].breadcrumb;
      this.pageTitle = `${this.appTitle} | ` + this.pageTitle;
      this.title.setTitle(this.pageTitle);
    });
  }

  checkNewVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
      this.swUpdate.versionUpdates.subscribe(res => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

}
