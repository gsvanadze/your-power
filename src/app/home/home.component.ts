import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {LoaderComponent} from '../shared/components/tools/loader/loader.component';

@Component({
  selector: 'app-home',
  imports: [
    LoaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public loader: WritableSignal<boolean> = signal<boolean>(true);

  ngOnInit() {
    setTimeout(() => {
      this.loader.set(false)
    }, 1000)
  }
}
