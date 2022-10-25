import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Edu } from '../model/edu';

@Injectable({
    providedIn: 'root'
})
export class EduService {
    eduURL = environment.url + 'edu/'
    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Edu[]> {
        return this.httpClient.get<Edu[]>(this.eduURL + 'lista')
    }

    public detail(id: number): Observable<Edu> {
        return this.httpClient.get<Edu>(this.eduURL + 'detail/' + id)
    }

    public save(edu: Edu): Observable<any> {
        return this.httpClient.post<any>(this.eduURL + 'create', edu)
    }

    public update(id: number, edu: Edu): Observable<any> {
        return this.httpClient.put<any>(this.eduURL + 'update/' + id, edu)
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.eduURL + 'delete/' + id)
    }
}
