import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutePartsService } from './services/router/router-parts.service';
import { SwUpdate } from '@angular/service-worker';
import { CommonService } from './services/commonService/common.service';
import { CONSTANT } from './core/constant';

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  appTitle = CONSTANT.SITE_NAME;
  pageTitle = '';

  title1 = 'af-notification';
  message:any = null;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    private title: Title,
    private swUpdate: SwUpdate,
    public commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.changePageTitle();
    this.checkNewVersion();

    this.requestPermission();
    this.listen();

  }


  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      { vapidKey: environment.firebase.vapidKey}).then(
      (currentToken) => {
        if (currentToken) {
          console.log("Hurraaa!!! we got the token.....");
          console.log(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
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
