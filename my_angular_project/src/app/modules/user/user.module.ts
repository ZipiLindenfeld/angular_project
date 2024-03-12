import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./user.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    declarations: [LoginComponent, LogoutComponent, RegisterComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, UserRoutingModule, MatFormFieldModule, MatIconModule, MatInputModule],
    providers: [UserService],
    exports: [LoginComponent]
})

export class UserModule {

}