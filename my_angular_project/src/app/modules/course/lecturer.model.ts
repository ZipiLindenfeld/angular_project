export class Lecturer {
    code: number;
    fullName: string;
    address: string;
    email: string;
    password: string;
    constructor(code: number, password: string, fullname: string = "", address: string = "", email: string = "") {
        this.code = code;
        this.password = password;
        this.fullName = fullname;
        this.address = address;
        this.email = email;
    }
}