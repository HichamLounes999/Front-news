import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LatestNews } from "src/models/latest-new.model";
import { BaseService } from "./base.service";
import {HttpParams} from "@angular/common/http";
import {ENVIRONMENT} from "../env/env";


@Injectable()
export class LatestNewsService extends BaseService{

  private getAllLatestNewsApi = "latestNews";

  public getAll(params?: any): Observable<LatestNews[]>{

    return this.http.get<LatestNews[]>(`${this.baseUrl}${this.getAllLatestNewsApi}`, {params: params})
  }
  getLatestNewsFiltred(LatestNewsFiltered, page: number = 0, size: number = 50): Observable<any> {
    let params = new HttpParams()
    params = params.append('page', String(page))
      .append('size', String(size))
    Object.keys(LatestNewsFiltered).forEach(key => {
      if (LatestNewsFiltered[key]) {
        params = params.set(key, LatestNewsFiltered[key]);
      }
    });
    return this.http.get<any>(`${ENVIRONMENT}/latestNews/filter`, {params})
  }
}
