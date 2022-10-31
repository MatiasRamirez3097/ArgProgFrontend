import { Component, OnInit } from '@angular/core';
import { Exp } from 'src/app/model/exp';
import { ExpService } from 'src/app/service/exp.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
    selector: 'app-exp',
    templateUrl: './exp.component.html',
    styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
    exp: Exp[] = [];
    constructor(private expService: ExpService, private tokenService: TokenService) { }

    isLogged = false;

    ngOnInit(): void {
        this.loadExp()
        if (this.tokenService.getToken()) this.isLogged = true;
        else this.isLogged = false;
    }

    delete(id?: number) {
        if (id != undefined) {
            this.expService.delete(id).subscribe({
                next: (v) => this.loadExp(),
                error: (e) => alert('Error! No se pudo borrar')
            })
        }
    }

    loadExp(): void {
        this.expService.lista().subscribe({
            next: (v) => this.exp = v
        })
    }
}
