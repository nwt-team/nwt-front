import {HttpHeaders} from "@angular/common/http";

export class Service {
  protected _header(headerList: object = {}){
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }
}

