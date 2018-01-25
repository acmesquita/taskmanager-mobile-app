import { Component } from "@angular/core";

import { NSAngular2TokenService } from './shared/ns-angular2-token/ns-angular2-token.service'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 

  public constructor (private tokenService: NSAngular2TokenService){
    this.tokenService.init({
      apiBase: "http://192.168.0.31:3000",
      globalOptions:{
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/vnd.taskmanager.v2"
        }
      }
    });

    this.tokenService.signIn({
      email: "catha.ana.1994@gmail.com",
      password: "catha1530"
    }).subscribe(res => console.dir(res))
  }
}
