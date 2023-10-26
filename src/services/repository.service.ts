import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class RepositoryService {
    constructor(private http: HttpClient) { }


    public getRepositories(): Observable<any> {
        const headers = { 'Content-Type': 'application/json' };
        return this.http.get(`https://api.github.com/users/denisxoctavian/repos`, { headers }).pipe();
    }

}