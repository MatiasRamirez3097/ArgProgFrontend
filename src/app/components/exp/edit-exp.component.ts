import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp } from 'src/app/model/exp';
import { ExpService } from 'src/app/service/exp.service';

@Component({
    selector: 'app-edit-exp',
    templateUrl: './edit-exp.component.html',
    styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
    exp: Exp = null
    constructor(private expService: ExpService, private activatedRouter: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id']
        this.expService.detail(id).subscribe(
            data => {
                this.exp = data
            }, err => {
                alert('Error!')
                this.router.navigate([''])
            }
        )
    }

    onUpdate(): void {
        const id = this.activatedRouter.snapshot.params['id']
        this.expService.update(id, this.exp).subscribe(
            data => {
                this.router.navigate([''])
            }, err => {
                alert('Error!')
                this.router.navigate([''])
            }
        )
    }
}
