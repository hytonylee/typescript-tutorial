class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User created: ${this.name}`)
  }

  register() {
    console.log(`${this.name} is now registered!`)
  }

  payInvoice() {
    console.log(`${this.name}'s paid invoice.`)
  }
}

class Memeber extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice()
  }
}

// let john = new User('John Doe', 'john.d@gmail.com', 32)
// john.payInvoice();

let mike = new User('Mike Smith', 'mike.s@gmail.com', 42);
mike.payInvoice();