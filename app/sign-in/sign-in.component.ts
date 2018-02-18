import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth.service";

@Component({
    selector : 'sign-in',
    moduleId: module.id,
    templateUrl : './sign-in.component.html',
    styleUrls:["./sign-in.component.css"]
})

export class SignInComponent{

    public form: FormGroup;
    private submitted: boolean;
    private formErros: Array<string>;

    public constructor(public tokenService:AuthService,
                       public formBuilder:FormBuilder,
                       public router: Router){
        this.setupForm();
        this.submitted = false;
        this.formErros = null;
    }

    public signInUser(){
        this.submitted = true;
        this.tokenService.signIn(this.form.get('email').value, this.form.get('password').value)
        .subscribe(
            () => {
                this.router.navigate(['/home']);
                this.formErros = null;
            },
            (error) =>{
                this.submitted = false;
                //Erros nos dados
                if(error.status === 401){
                    this.formErros = error._body.errors;
                    
                } else {
                    this.formErros = ["Erro no processamento, tente novamente mais tarde."]
                }
            }
        );
    }

    private setupForm(){
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email, Validators.minLength(8)]],
            password: [null, [Validators.required]]
        });
    }

} 