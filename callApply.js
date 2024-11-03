const normalPerson = {
    firstName: 'Minhaz',
    lastName: 'Uddin',
    salary: 10000,
    fullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(bill) {
        this.salary = this.salary - bill;
        return this.salary;
    },
}
const newPerson = {
    firstName: 'Selim',
    lastName: 'Reza',
    salary: 40000,
}
// normalPerson.chargeBill(1000);
// console.log(normalPerson.salary);
const newPersonBill = normalPerson.chargeBill.bind(newPerson);
newPersonBill(5000);
console.log(newPerson.salary);