// interface Laptop {
//   brand: string;
//   model: string;
// }

// interface GamingLaptop extends Laptop {
//   gpu: string;
// }

// const myLaptop: GamingLaptop = {
//   brand: "ASUS",
//   model: "ROG Strix",
//   gpu: "NVIDIA RTX 4060"
// };

// console.log("Brand:", myLaptop.brand);
// console.log("Model:", myLaptop.model);
// console.log("GPU:", myLaptop.gpu);






interface Database {
  connect(): void;
  disconnect(): void;
  query(sql: string): any;
}

class MySQLDatabase implements Database {

  connect(): void {
    console.log("Database Connected");
  }

  disconnect(): void {
    console.log("Database Disconnected");
  }

  query(sql: string): any {
    console.log("Executing Query:", sql);
    return "Query Result";
  }
}

const db = new MySQLDatabase();

db.connect();
db.query("SELECT * FROM users");
db.disconnect();

