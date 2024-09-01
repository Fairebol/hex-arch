import {returnInfo} from "../application/returnInfo";
import { UserController } from "./userController";

export const info = new returnInfo();
export const userController = new UserController(info);