export class Student{
    public studentId: number = 0;
    public firstName: string ='';
    public lastName: string ='';;
    public email: string ='';;
    public password: string ='';;
    public phone: string ='';;

    public get studentid(): number{
        return this.studentId;
    }
    public set studentid(value: number){
        this.studentId=value;
    }
    public get firstname(): string{
        return this.firstName;
    }
    public set firstname(value: string){
        this.firstName = value;
    }
    public get lastname(): string{
        return this.lastName;
    }
    public set lastname(value: string){
        this.lastName = value;
    }
    public get emailId(): string{
        return this.email;
    }
    public set emailId(value: string){
        this.email = value;
    }
    public get phoneId(): string{
        return this.phone;
    }
    public set phoneId(value: string){
        this.phone = value;
    }
    public get passWord(): string{
        return this.password;
    }
    public set passWord(value: string){
        this.password = value;
    }


}