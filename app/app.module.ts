//angular imports
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

//nativescript imports
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

//app core imports
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

//componentes imports
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

//services imports
import { AuthGuard } from "./guard/auth.guard";
import { AuthService } from "./shared/auth.service";
import { TokenService } from './shared/token.service';

// rxjs operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

// rxjs extensions
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NativeScriptHttpModule,
    NativeScriptModule
  ],
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    TokenService

  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
