"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
    function Student(id, Name, Address, email, dateOfBirth, gender, enrolledDate) {
        this.id = id;
        this.Name = Name;
        this.Address = Address;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.enrolledDate = enrolledDate;
    }
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.model.js.map