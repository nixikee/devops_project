import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  formData = { name: '',
               birthdate: '',
               nickname: '',
               location: ''};

  onSubmit() {
    this.formSubmitted.emit(this.formData);
    //this.router.navigateByUrl('/print');
  }

/*constructor(private formBuilder: FormBuilder, private location: Location, private router: Router) {
  }*/
}
