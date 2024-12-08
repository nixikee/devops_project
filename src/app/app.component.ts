import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { PrintComponent } from './print/print.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            AddComponent,
            PrintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devops project';
}
