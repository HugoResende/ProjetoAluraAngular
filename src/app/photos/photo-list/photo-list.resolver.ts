
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { Photo } from '../photo/photo';
import { PhotoService } from 'alurapic/src/app/photos/photo/photo.service';




    @Injectable({providedIn: 'root'})

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

    
    constructor(private Service: PhotoService){}

        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
        const userName = route.params.userName;
        return this.Service.listFromUser(userName);
    }
}