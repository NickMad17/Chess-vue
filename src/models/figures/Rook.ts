import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
// @ts-ignore
import blackLogo from "../../assets/black-rook.png"
// @ts-ignore
import whiteLogo from "../../assets/white-rook.png"

export class Rook extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK
    }
}