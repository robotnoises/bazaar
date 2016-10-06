import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginComponent } from './index';

@NgModule({
    imports: [CommonModule, HttpModule, ReactiveFormsModule],
    providers: [CookieService],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
