import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{

    public constructor(public tokenService:AuthService,
                       public router: Router){
    }


    public signOutUser(){
        this.tokenService.signOut().subscribe(
            ()=>{
                this.router.navigate(['/sign-in'])
            }
        );
    }
}