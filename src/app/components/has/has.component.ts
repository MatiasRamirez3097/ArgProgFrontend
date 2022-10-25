import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-has',
    templateUrl: './has.component.html',
    styleUrls: ['./has.component.css']
})
export class HasComponent implements OnInit {
    skills: Skill[] = [];
    constructor(private skillService: SkillService, private tokenService: TokenService) { }

    isLogged = false;
    ngOnInit(): void {
        this.loadSkills();
        if (this.tokenService.getToken()) this.isLogged = true;
        else this.isLogged = false;
    }
    loadSkills(): void {
        this.skillService.lista().subscribe({
            next: (v) => this.skills = v
        })
    }
    delete(id: number): void {
        if (id != undefined) this.skillService.delete(id).subscribe({
            next: (v) => this.loadSkills(),
            error: (e) => alert('Error!')
        })
    }
}
