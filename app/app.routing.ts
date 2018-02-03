import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
	{ path: "", redirectTo:"/home", pathMatch: "full"},
	{ path: "home", component: HomeComponent, canActivate: [AuthGuard]},
	{ path: "sign-in", component: SignInComponent },
	{ path: "sign-up", component: SignUpComponent }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }