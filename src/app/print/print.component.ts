import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {
  @Input() data: any;
}
