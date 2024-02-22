import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRippleModule } from '@angular/material/core';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule,
        MatRippleModule,
        SquareComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    component.winnerPositions = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct position input', () => {
    const position = 5;
    component.position = position;
    expect(component.position).toEqual(position);
  });

  it('should have correct value input', () => {
    const value = 'X';
    component.value = value;
    expect(component.value).toEqual(value);
  });

  it('should have correct winner input', () => {
    const winner = 'X';
    component.winner = winner;
    expect(component.winner).toEqual(winner);
  });

  it('should have correct winnerPositions input', () => {
    const winnerPositions = [0, 1, 2];
    component.winnerPositions = winnerPositions;
    expect(component.winnerPositions).toEqual(winnerPositions);
  });
});
