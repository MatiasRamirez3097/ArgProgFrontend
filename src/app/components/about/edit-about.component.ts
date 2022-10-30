import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
    selector: 'app-edit-about',
    templateUrl: './edit-about.component.html',
    styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
    persona: Persona = null
    constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.personaService.detail(id).subscribe({
            next: (v) => this.persona = v,
            error: (e) => {
                alert('Error!')
                this.router.navigate([''])
            }
        })
    }

    onUpdate() {
        const id = this.activatedRoute.snapshot.params['id']
        this.personaService.update(id, this.persona).subscribe({
            next: (v) => this.router.navigate(['']),
            error: (e) => {
                alert('Error al editar!')
                this.router.navigate([''])
            }
        )
    }

    uploadImage($event: any) {

    }

}
