import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { SquareComponent } from '../square/square.component';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatButtonModule,
        BoardComponent,
        SquareComponent,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with new game', () => {
    expect(component.squares.length).toEqual(9);
    expect(component.winner).toBeNull();
    expect(component.winnerPositions).toEqual([]);
  });

  it('should switch player after making a move', () => {
    component.newGame();
    const currentPlayer = component.player;
    component.makeMove(0);
    expect(component.player).not.toEqual(currentPlayer);
  });

  it('should detect winner correctly', () => {
    component.squares = ['X', 'X', 'X', null, null, null, null, null, null];
    component.makeMove(0);
    expect(component.winner).toEqual('X');
    expect(component.winnerPositions).toEqual([0, 1, 2]);
  });

  it('should not allow overwriting existing moves', () => {
    component.squares = ['X', null, null, null, null, null, null, null, null];
    const initialSquares = component.squares.slice();
    component.makeMove(0);
    expect(component.squares).toEqual(initialSquares);
  });
});
