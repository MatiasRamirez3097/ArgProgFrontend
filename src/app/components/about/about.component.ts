import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    persona: Persona = null;
    constructor(public personaService: PersonaService, private tokenService: TokenService) { }
    isLogged = false;

    ngOnInit(): void {
        this.loadPerson();
        if (this.tokenService.getToken()) this.isLogged = true;
        else this.isLogged = false;
    }

    loadPerson() {
        this.personaService.detail(1).subscribe({
            next: (v) => this.persona = v,
        })
    }
}
