import logo from "../../assets/black-knight.png"
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE ="ФИГУРА",
    KING ="КОРОЛЬ",
    KNIGHT ="КОНЬ",
    PAWN ="ПЕШКА",
    QUEEN ="ФЕРЗЬ",
    ROOK ="ЛАДЬЯ",
    BISHOP ="СЛОН",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Date.now();
    }

    canMove(target: Cell) : boolean {
        return true
    }

    moveFigure(target: Cell) {}
}