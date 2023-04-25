import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/Services/register.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  id: number = 0;
  email: string = '';
  name: string = '';
  password: string = '';

  @ViewChild('contenido') contenido: any;

  constructor(private modal: NgbModal, private persona: RegisterService, private activatedRoute: ActivatedRoute,private router: Router) {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

  }

  abrirC() {
    id: this.id;
   const Email=  this.email;

    const form = {
      email: this.email,
      name: this.name,
      password: this.password,
    }
    console.log("formulario",form);
    
    this.persona.addPersona(form).subscribe(
      (res) => {

        if (res== 401)
        {
          alert("El correo ya existe");
          
        }
       if (res== 200)
       {
        this.router.navigate(['/login']);
       }

      }
    );

 
  }
}
