import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from '../model/exp';

@Injectable({
    providedIn: 'root'
})
export class ExpService {
    expURL = 'http://localhost:8080/exp/'
    constructor(private httpClient: HttpClient) { }
    public lista(): Observable<Exp[]> {
        return this.httpClient.get<Exp[]>(this.expURL + 'lista')
    }

    public detail(id: number): Observable<Exp> {
        return this.httpClient.get<Exp>(this.expURL + 'detail/' + id);
    }

    public save(exp: Exp): Observable<any> {
        return this.httpClient.post<any>(this.expURL + 'create', exp)
    }

    public update(id: number, exp: Exp): Observable<any> {
        return this.httpClient.put<any>(this.expURL + 'update/' + id, exp)
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.expURL + 'delete/' + id)
    }
}
