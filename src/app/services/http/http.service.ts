import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { CommonService } from '../commonService/common.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient, public commonService: CommonService,
    private loader: LoaderService
  ) {
  }

  getData(url: string, data?: any, backGroundUrl?: boolean): Observable<any> {
    const searchParams = this.appendParams(data);
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    if (backGroundUrl) {
      this.loader.backGroundUrls.push(apiUrl);
    }
    return this.http.get(apiUrl, {params: searchParams}).pipe(map((response: any) => {
      return response;
    }));
  }


  postData(url: string, data?,  formData?: boolean, backGroundUrl?: boolean) {
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    const postData = !formData ? data : this.appendFormData(data);
    if (backGroundUrl) {
      this.loader.backGroundUrls.push(apiUrl);
    }

    return this.http.post(apiUrl, postData).pipe(map((response: any) => {
      return response;
    }));
  }

  // @ts-ignore
  uploadImageService(url: string, event, id, backGroundUrl?: boolean) {

    if (event.target.files && event.target.files[0]) {
      const apiUrl = `${environment.apiBaseUrl}${url}`;
      const fd = new FormData();
      fd.append('file', event.target.files[0]);
      if (backGroundUrl) {
        this.loader.backGroundUrls.push(apiUrl);
      }
      document.getElementById(id)[`value`] = '';
      return this.http.post(apiUrl, fd).pipe(map((response: any) => {
        return response;
      }));
    }
  }

  uploadMultipleService(url: string, data, formData?: boolean, backGroundUrl?: boolean) {
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    const postData = !formData ? data : this.appendFormData(data);
    if (backGroundUrl) {
      this.loader.backGroundUrls.push(apiUrl);
    }
    return this.http.post(apiUrl, postData).pipe(map((response: any) => {
      return response;
    }));
  }

  putData(url: string, data, formData?: boolean) {
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    const postData = !formData ? data : this.appendFormData(data);
    return this.http.put(apiUrl, postData).pipe(map((response: any) => {
      return response;
    }));
  }


  patchData(url: string, data, formData?: boolean) {
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    const postData = !formData ? data : this.appendFormData(data);
    return this.http.patch(apiUrl, postData).pipe(map((response: any) => {
      return response;
    }));
  }


  deleteData(url: string) {
    const apiUrl = `${environment.apiBaseUrl}${url}`;
    return this.http.delete(apiUrl).pipe(map((response: any) => {
      return response;
    }));
  }

  appendFormData(myFormData: { [x: string]: any; }): FormData {
    const fd = new FormData();
    for (const key of Object.keys(myFormData)) {
      fd.append(key, myFormData[key]);
    }
    return fd;
  }

  appendParams(myParams: { [x: string]: any; }): HttpParams {
    let params = new HttpParams();
    if (!!myParams) {
      for (const key of Object.keys(myParams)) {
        // if (data[key] || key == 'skip')
        params = params.append(key, myParams[key]);
      }
    }
    return params;
  }

  /**
   * @method (post http request)
   * @param url (api url)
   * @param data (data which we have to pass to server)
   */
  imageUpload(url: string, data) {
    const postData = this.appendFormData(data);
    return this.http.post(url, postData).pipe(map((response: any) => {
      return response;
    }));
  }





}
