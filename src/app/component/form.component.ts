import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private fb : FormBuilder
  ) {}

  form! : FormGroup
  name! : string
  email! : string
  form$!: Observable<any>

  createForm() { 
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(1)]),
      email: this.fb.control<string>('', [Validators.required, Validators.minLength(1)])
    })
  }

  ngOnInit() {
    this.form = this.createForm()
    this.form$ = this.form.valueChanges

    this.form.valueChanges.subscribe(
      v => {console.info(">> form: ", v)}
    )

    this.form.statusChanges.subscribe(
      v => {console.info(">> status: ", v)}
    )
  }

}