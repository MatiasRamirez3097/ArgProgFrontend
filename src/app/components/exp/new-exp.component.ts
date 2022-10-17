import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exp } from 'src/app/model/exp';
import { ExpService } from 'src/app/service/exp.service';

@Component({
    selector: 'app-new-exp',
    templateUrl: './new-exp.component.html',
    styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
    nombreExp: string = ''
    descExp: string = ''
    constructor(private expService: ExpService, private router: Router) { }

    ngOnInit(): void {
    }

    onCreate(): void {
        const exp = new Exp(this.nombreExp, this.descExp);
        this.expService.save(exp).subscribe(data => {
            alert("Experiencia añadida")
            this.router.navigate([''])
        }, err => {
            alert('Error!')
            this.router.navigate([''])
        })
    }
}
