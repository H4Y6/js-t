{
  const user = { name: 'Bill', age: 22 };

  const addProps = function (obj, key, value) {
    return { ...obj, [key]: value };
  };
  console.log(addProps(user, 'email', 'fol@ok.ps'));
}

const employee1 = { id: 1, name: 'Sam', salary: 2000, bonus: 200 };
const employee2 = { id: 2, name: 'Ben', salary: 3000 };
const employee3 = { id: 3, name: 'Den', salary: 2000, bonus: 100 };

const company = {
  employees: [],
  budjet: 60000,
  income: 0,

  addEmploee(employee) {
    this.employees.push(employee);
  },

  // deleteEmploee(employeeName) {
  //   for (let i = 0; i < this.employees.length; i++) {
  //     const employee = this.employees[i];
  //     if (employee.name === employeeName) {
  //       this.employees.splice(i, 1);
  //     }
  //   }
  // },

  // deleteEmploee(id) {
  //   for (let i = 0; i < this.employees.length; i++) {
  //     const employee = this.employees[i];
  //     if (employee.id === id) {
  //       this.employees.splice(i, 1);
  //     }
  //   }
  // },

  // deleteEmploee(id) {
  //   const newEmployeeList = [];

  //   for (const employee of this.employees) {
  //     if (employee.id !== id) {
  //       newEmployeeList.push(employee);
  //     }
  //   }
  //   this.employees = newEmployeeList;
  // },

  deleteEmploee(id) {
    const newEmployeeList = [];

    for (const employee of this.employees) {
      if (employee.id === id) {
        continue;
      }
      newEmployeeList.push(employee);
    }
    this.employees = newEmployeeList;
  },

  calculateEmployeeSalary() {
    let sum = 0;

    for (const employee of this.employees) {
      // const bonus = employee.bonus ? employee.bonus : 0;
      const bonus = employee.bonus ?? 0;
      sum += employee.salary + bonus;
      // sum += employee.salary + (employee.bonus ? employee.bonus : 0);
    }

    return sum;
  },

  calculateCompanyIncome() {
    this.income = this.budjet - this.calculateEmployeeSalary();
    // return this.budjet - this.calculateEmployeeSalary();
  },
};
company.addEmploee(employee1);
company.addEmploee(employee2);
company.addEmploee(employee3);
console.log(company.calculateEmployeeSalary());
company.calculateCompanyIncome();
console.log(company);
// company.deleteEmploee('Den');
company.deleteEmploee(3);

const animal = { legs: 4 };
const cat = Object.create(animal);
cat.name = 'Meow';
console.log(cat);
console.log(cat.legs);

const createUser = function (name, age) {
  return {
    name, age
  };
};
const user = createUser('Paul', 33);
console.log(user);

const addProperty = function (obj, key, value) {
  return { ...obj, [key]: value };
};
console.log(addProperty(user, 'eyeColor', 'brown'));
