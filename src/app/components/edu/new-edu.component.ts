import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edu } from 'src/app/model/edu';
import { EduService } from 'src/app/service/edu.service';

@Component({
    selector: 'app-new-edu',
    templateUrl: './new-edu.component.html',
    styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {
    nombreEdu: string;
    descEdu: string;
    constructor(private eduService: EduService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const edu = new Edu(this.nombreEdu, this.descEdu)
        this.eduService.save(edu).subscribe({
            error: (e) => alert('Error al crear la educación'),
            complete: () => this.router.navigate([''])
        })
    }
}
