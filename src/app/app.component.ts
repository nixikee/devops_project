import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './add/add.component';
import { PrintComponent } from './print/print.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            AddComponent,
            PrintComponent,
            ParentComponent,
            FormsModule,
            CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Devops project';
}
