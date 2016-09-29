import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginComponent } from './index';
import { UserService } from '../shared/user/index';

@NgModule({
    imports: [CommonModule, HttpModule, ReactiveFormsModule],
    providers: [CookieService, UserService],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
