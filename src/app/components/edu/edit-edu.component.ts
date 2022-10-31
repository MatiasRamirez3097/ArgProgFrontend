import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edu } from 'src/app/model/edu';
import { EduService } from 'src/app/service/edu.service';

@Component({
    selector: 'app-edit-edu',
    templateUrl: './edit-edu.component.html',
    styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {
    edu: Edu = null;
    constructor(private eduService: EduService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.eduService.detail(id).subscribe({
            next: (v) => this.edu = v,
            error: (e) => {
                alert("Error al editar!")
                this.router.navigate([''])
            }
        })
    }

    onUpdate(): void {
        const id = this.activatedRoute.snapshot.params['id']
        this.eduService.update(id, this.edu).subscribe({
            error: (e) => alert('Error al editar!'),
            complete: () => this.router.navigate([''])
        })
    }
}
