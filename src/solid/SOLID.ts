// S.O.L.I.D design patterns/principles

// Single Responsibility Principle (SRP)

// Anti Pattern
class UserRepoService {
    getUsers(someData: any[]) {
      // Fetch users from database
      const checkUser = someData.filter((value: any, index: number, userCheckInfo) => {
        return userCheckInfo
      });
 
      if (checkUser.length >= 1) {
        //do something
      }
      // .getUsers()
      // call db for the user
    }
  
    saveUser(user: any) {
      // Save user db call to database
    }
  
    sendWelcomeEmail(user: any) {

    }
  }

  // Pattern
  class UserRepository {
    getUsers() {
      // Fetch users from database
    }
  
    saveUser(user: any) {
      // Save user to database
    }
  }
  

  class EmailService {
    sendWelcomeEmail(user: any) {
      // Send email logic
    }
}

// Open/Closed Principle (OCP)

// Anti pattern
class PaymentProcessor {
    processPayment(type: string, amount: number) {
      if (type === "creditCard") {
        console.log(`Processing credit card payment: $${amount}`);
      } else if (type === "paypal") {
        console.log(`Processing PayPal payment: $${amount}`);
      }
    }
  }

  // Pattern
  interface PaymentMethod {
    pay(amount: number): void;
  }
  
  class CreditCardPayment implements PaymentMethod {
    pay(amount: number) {
      console.log(`Processing credit card payment: $${amount}`);
    }
  }
  
  class PayPalPayment implements PaymentMethod {
    pay(amount: number) {
      console.log(`Processing PayPal payment: $${amount}`);
    }
  }
  
  class PaymentProcessor {
    processPayment(method: PaymentMethod, amount: number) {
      method.pay(amount);
    }
  }
  
  
// Liskov Substitution Principle (LSP)

// Anti Pattern
  class Rectangle {
    constructor(protected width: number, protected height: number) {}
  
    setWidth(width: number) {
      this.width = width;
    }
  
    setHeight(height: number) {
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    setWidth(width: number) {
      this.width = width;
      this.height = width;
    }
  
    setHeight(height: number) {
      this.width = height;
      this.height = height;
    }
  }

  // Pattern
  interface Shape {
    getArea(): number;
  }
  
  class Rectangle implements Shape {
    constructor(protected width: number, protected height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square implements Shape {
    constructor(private size: number) {}
  
    getArea(): number {
      return this.size * this.size;
    }
  }


  // Interface Segregation Principle (ISP)
  // Anti pattern
  interface Worker {
    work(): void;
    eat(): void
  }
  
  class Developer implements Worker {
    work() {
      console.log("Writing code...");
    }
  
    eat() {
      console.log("Eating lunch...");
    }
  }
  
  class Robot implements Worker {
    work() {
      console.log("Working continuously...");
    }
  
    eat() {
      throw new Error("Robots don't eat!");
    }
  }

// Pattern
  interface Workable {
    work(): void;
  }
  
  interface Eatable {
    eat(): void;
  }
  
  class Developer implements Workable, Eatable {
    work() {
      console.log("Writing code...");
    }
  
    eat() {
      console.log("Eating lunch...");
    }
  }
  
  class Robot implements Workable {
    work() {
      console.log("Working continuously...");
    }
  }

  // Dependency Inversion Principle (DIP)
  // Anti pattern
  class MySQLDatabase {
    getData() {
      return "Fetching data from MySQL";
    }
  }
  
  class DataFetcher {
    private database: MySQLDatabase;
  
    constructor() {
      this.database = new MySQLDatabase(); // Direct dependency
    }
  
    fetchData() {
      return this.database.getData();
    }
  }

  // Pattern
  interface Database {
    getData(): string;
  }
  
  class MySQLDatabase implements Database {
    getData() {
      return "Fetching data from MySQL";
    }
  }
  
  class MongoDBDatabase implements Database {
    getData() {
        // mon
      return "Fetching data from MongoDB";
    }
  }
  
  class DataFetcher {
    public database: Database;
  
    constructor(database: Database) {
      this.database = database;
    }
  
    fetchData() {
      return this.database.getData();
    }
  }
