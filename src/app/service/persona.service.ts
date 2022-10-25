import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    url = environment.url + 'personas/';

    constructor(private http: HttpClient) { }

    public getPersona(): Observable<persona> {
        return this.http.get<persona>(this.url + 'getprofile');
    }
}
