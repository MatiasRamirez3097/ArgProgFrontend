import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    url = environment.url + 'personas/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Persona[]> {
        return this.httpClient.get<Persona[]>(this.url + 'lista')
    }

    public detail(id: number): Observable<Persona> {
        return this.httpClient.get<Persona>(this.url + 'detail/' + id)
    }

    public update(id: number, persona: Persona): Observable<any> {
        return this.httpClient.put<any>(this.url + 'update/' + id, persona)
    }
}
