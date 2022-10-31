import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
    selector: 'app-edit-has',
    templateUrl: './edit-has.component.html',
    styleUrls: ['./edit-has.component.css']
})
export class EditHasComponent implements OnInit {
    skill: Skill = null;
    constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.skillService.details(id).subscribe({
            next: (v) => this.skill = v,
            error: (e) => {
                alert('Error!')
                this.router.navigate([''])
            }
        })
    }

    onUpdate(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.skillService.update(id, this.skill).subscribe({
            error: (e) => {
                alert('Error!')
            },
            complete: () => this.router.navigate([''])
        })
    }
}
