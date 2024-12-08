import { Component } from '@angular/core';
import { AddComponent } from './../add/add.component';
import { PrintComponent } from './../print/print.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AddComponent,
  PrintComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  receivedData: any;

  handleFormData(data: any) {
    this.receivedData = data;
  }
}
