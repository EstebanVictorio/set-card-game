import { ReactComponent as OvalSolid } from "icons/Oval-Solid.svg";
import { ReactComponent as OvalStriped } from "icons/Oval-Striped.svg";
import { ReactComponent as OvalOutlined } from "icons/Oval-Outlined.svg";
import { ReactComponent as DiamondSolid } from "icons/Diamond-Solid.svg";
import { ReactComponent as SquiggleSolid } from "icons/Squiggle-Solid.svg";
import { ReactComponent as DiamondStriped } from "icons/Diamond-Striped.svg";
import { ReactComponent as DiamondOutlined } from "icons/Diamond-Outlined.svg";
import { ReactComponent as SquiggleStriped } from "icons/Squiggle-Striped.svg";
import { ReactComponent as SquiggleOutlined } from "icons/Squiggle-Outlined.svg";

const COLORS = ["red", "purple", "green"];
const SHADES = ["Outlined", "Solid", "Striped"];
const SHAPES = ["Diamond", "Oval", "Squiggle"];
const NUMBERS = [1, 2, 3];

const BLANK_CARD = {
  color: null,
  shade: null,
  shape: null,
  number: null
};

const TOKENS = {
  OvalSolid,
  OvalStriped,
  OvalOutlined,
  DiamondSolid,
  SquiggleSolid,
  DiamondStriped,
  DiamondOutlined,
  SquiggleStriped,
  SquiggleOutlined
};

export { BLANK_CARD, COLORS, SHADES, SHAPES, NUMBERS, TOKENS };
