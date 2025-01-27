import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Desktop';
  http = inject(HttpClient)
  fb = inject(FormBuilder)
  private url = environment.apiUrl;
  public registerForm = this.fb.group({
    userName:'',
    password:''
  })

  ngOnInit() {
    this.http.get(`${this.url}products/getAllProducts`).subscribe((e:any)=>{
      console.log(e.productsList);
    })
  }

  submitForm() {
    this.http.post(`${this.url}auth/authUser`,{userName:'SupsderAdmin@gmail.com',password:'SuperAadmin1234'}).subscribe((e:any)=>{
      console.log(e);
    })
  }
}
