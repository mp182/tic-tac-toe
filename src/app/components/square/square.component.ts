import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    CommonModule,
    MatRippleModule,
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {

  @Input() position!: Number;
  @Input() value!: 'X' | 'O';
  @Input() winner!: string | null;
  @Input() winnerPositions!: Number[];

}
