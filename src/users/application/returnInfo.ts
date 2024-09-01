import { User } from "../domain/user";

export class returnInfo {
    constructor() {}

    info(userInfo: any) {
        return userInfo.id;
    }
}