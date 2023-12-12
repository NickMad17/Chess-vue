import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import blackLogo from "../../assets/black-pawn.png"
// @ts-ignore
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Figure {

    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }
        const direction  = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const isFirstStep  = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.x === this.cell.x + direction || this.isFirstStep
                && (target.x === this.cell.x + isFirstStep))
            && target.y === this.cell.y
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        if(target.x === this.cell.x + direction
            && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }



        return false
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }
}