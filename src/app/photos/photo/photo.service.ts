import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root' })

export class PhotoService{
  listFromUserPaginated(userName: string, arg1: number): any {
    throw new Error('Method not implemented.');
  }
        constructor(private http: HttpClient){}
      
    listFromUser(userName: string) {

         return this.http
        .get<Photo[]>(API +'/' + userName + '/photos');
      
    }
}