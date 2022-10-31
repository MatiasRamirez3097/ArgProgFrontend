import { Component, OnInit } from '@angular/core';
import { Edu } from 'src/app/model/edu';
import { EduService } from 'src/app/service/edu.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-edu',
    templateUrl: './edu.component.html',
    styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
    edu: Edu[] = []
    constructor(private eduService: EduService, private tokenService: TokenService) { }
    isLogged = false

    ngOnInit(): void {
        this.loadEdu()
        if (this.tokenService.getToken()) this.isLogged = true
        else this.isLogged = false
    }

    loadEdu(): void {
        this.eduService.lista().subscribe({
            next: (v) => this.edu = v
        })
    }

    delete(id?: number) {
        if (id != undefined) this.eduService.delete(id).subscribe({
            next: (v) => this.loadEdu(),
            error: (e) => alert('Error al eliminar!')
        })
    }
}
