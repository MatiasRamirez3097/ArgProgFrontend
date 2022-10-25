import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
    selector: 'app-new-has',
    templateUrl: './new-has.component.html',
    styleUrls: ['./new-has.component.css']
})
export class NewHasComponent implements OnInit {
    nombre: string;
    valor: number;
    constructor(private skillService: SkillService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const skill = new Skill(this.nombre, this.valor)
        this.skillService.save(skill).subscribe(
            {
                next: (v) => {
                    alert('Skill creada')
                    this.router.navigate([''])
                },
                error: (e) => {
                    alert('Error!')
                    this.router.navigate([''])
                }
            },
        )
    }

}
