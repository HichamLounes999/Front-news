import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {ENVIRONMENT} from "../env/env";



@Injectable()
export class BaseService {
  protected baseUrl = ENVIRONMENT.baseURL;

  constructor(protected http : HttpClient){

  }
}
