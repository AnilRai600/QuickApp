export class Student {
  // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(id?: number, Name?: string, Address?: string, email?: string, dateOfBirth?: Date, gender?: string, enrolledDate?: Date) {

    this.id = id;
    this.Name = Name;
    this.Address = Address;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.enrolledDate = enrolledDate;

    
  }



  public id: number;
  public Name: string;
  public Address: string;
  public email: string;
  public dateOfBirth: Date;
  public gender: string;
  public enrolledDate: Date;
  
}

