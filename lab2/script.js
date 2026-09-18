
// Пункти 1.2.3 – 1.2.6. 

let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 220;
car1.tuning = true;
car1["number of accidents"] = 0; 

car1.driver = new Object();
car1.driver.name = "Богдан Бачинський"; 
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";

let car2 = {
  color: "red",
  maxSpeed: 190,
  tuning: false,
  "number of accidents": 2,
  driver: {
    name: "Богдан Бачинський",
    category: "B",
    "personal limitations": null
  }
};

car1.drive = function() {
  console.log("I am not driving at night");
};


car2.drive = function() {
  console.log("I can drive anytime");
};

console.log("--- Перевірка car1 та car2 ---");
car1.drive();
car2.drive();

// Пункти 1.2.7 – 1.2.10. 


function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;

  this.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      let nightText = this.driver.nightDriving ? "drives at night" : "does not drive at night";
      console.log("Driver " + this.driver.name + " " + nightText + " and has " + this.driver.experience + " years of experience");
    }
  };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience
  };
};

console.log("\n--- Перевірка Truck ---");
let truck1 = new Truck("blue", 6000, 80.5, "Scania", "R500");
let truck2 = new Truck("silver", 5500, 75.0, "Volvo", "FH16");

truck1.AssignDriver("Богдан Бачинський", true, 6);
truck2.AssignDriver("Богдан Бачинський", false, 3);

truck1.trip();
truck2.trip();

// Пункти 1.2.11 – 1.2.24. 

class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Квадрат: правильний 4-кутник, у якого всі сторони рівні, а всі кути прямі (90°).");
  }

  length() {
    let p = 4 * this.a;
    console.log("Периметр квадрата: " + p);
    return p;
  }

  square() {
    let s = this.a * this.a;
    console.log("Площа квадрата: " + s);
    return s;
  }

  info() {
    console.log("=== Інформація про Квадрат ===");
    console.log("Сторони: a=" + this.a + ", b=" + this.a + ", c=" + this.a + ", d=" + this.a);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log("Периметр: " + (4 * this.a));
    console.log("Площа: " + (this.a * this.a));
  }
}

// 1.2.16 - 1.2.17. 
class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("Прямокутник: паралелограм, у якого всі кути прямі (90°). Протилежні сторони попарно рівні.");
  }

  length() {
    let p = 2 * (this.a + this.b);
    console.log("Периметр прямокутника: " + p);
    return p;
  }

  square() {
    let s = this.a * this.b;
    console.log("Площа прямокутника: " + s);
    return s;
  }

  info() {
    console.log("=== Інформація про Прямокутник ===");
    console.log("Сторони: a=" + this.a + ", b=" + this.b + ", c=" + this.a + ", d=" + this.b);
    console.log("Кути: 90°, 90°, 90°, 90°");
    console.log("Периметр: " + (2 * (this.a + this.b)));
    console.log("Площа: " + (this.a * this.b));
  }
}

// 1.2.18 - 1.2.19 та 1.2.22. 
class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this._alpha = alpha; 
    this._beta = beta;   
  }

  // 1.2.22. 
  get a() { return this._a; }
  set a(val) { this._a = val; }

  get alpha() { return this._alpha; }
  set alpha(val) { this._alpha = val; }

  get beta() { return this._beta; }
  set beta(val) { this._beta = val; }

  static help() {
    console.log("Ромб: чотирикутник, у якого всі сторони рівні. Протилежні кути попарно рівні.");
  }

  length() {
    let p = 4 * this.a;
    console.log("Периметр ромба: " + p);
    return p;
  }

  square() {
    let rad = this.beta * (Math.PI / 180);
    let s = (this.a * this.a) * Math.sin(rad);
    console.log("Площа ромба: " + s.toFixed(2));
    return s;
  }

  info() {
    console.log("=== Інформація про Ромб ===");
    console.log("Сторони: a=" + this.a + ", b=" + this.a + ", c=" + this.a + ", d=" + this.a);
    console.log("Кути: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
    console.log("Периметр: " + (4 * this.a));
    let rad = this.beta * (Math.PI / 180);
    console.log("Площа: " + ((this.a * this.a) * Math.sin(rad)).toFixed(2));
  }
}

// 1.2.20 - 1.2.21. 
class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Паралелограм: чотирикутник, протилежні сторони якого паралельні та рівні між собою.");
  }

  length() {
    let p = 2 * (this.a + this.b);
    console.log("Периметр паралелограма: " + p);
    return p;
  }

  square() {
    let rad = this.beta * (Math.PI / 180);
    let s = this.a * this.b * Math.sin(rad);
    console.log("Площа паралелограма: " + s.toFixed(2));
    return s;
  }

  info() {
    console.log("=== Інформація про Паралелограм ===");
    console.log("Сторони: a=" + this.a + ", b=" + this.b + ", c=" + this.a + ", d=" + this.b);
    console.log("Кути: " + this.alpha + "°, " + this.beta + "°, " + this.alpha + "°, " + this.beta + "°");
    console.log("Периметр: " + (2 * (this.a + this.b)));
    let rad = this.beta * (Math.PI / 180);
    console.log("Площа: " + (this.a * this.b * Math.sin(rad)).toFixed(2));
  }
}

// 1.2.23. 
console.log("\n--- Виклики методів help() ---");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24. 
console.log("\n--- Інформація про екземпляри класів ---");
let figure1 = new Square(6);
let figure2 = new Rectangle(5, 8);
let figure3 = new Rhombus(5, 130, 50);
let figure4 = new Parallelogram(6, 9, 120, 60);

figure1.info();
figure2.info();
figure3.info();
figure4.info();



// Пункти 1.2.25 – 1.2.31.


function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

console.log("\n--- Трикутники (Triangular) ---");
let t1 = Triangular();
let t2 = Triangular(6, 8, 10);
let t3 = Triangular(5, 5, 8);
console.log("t1 (за замовчуванням):", t1);
console.log("t2:", t2);
console.log("t3:", t3);

// 1.2.27 - 1.2.28. 
function PiMultiplier(num) {
  return function() {
    return Math.PI * num;
  };
}

let mult2 = PiMultiplier(2);
let mult2_3 = PiMultiplier(2 / 3);
let div2 = PiMultiplier(1 / 2);

console.log("\n--- Результати PiMultiplier ---");
console.log("Pi * 2 =", mult2());
console.log("Pi * 2/3 =", mult2_3());
console.log("Pi / 2 =", div2());

// 1.2.29 - 1.2.30. 
function Painter(color) {
  return function(obj) {
    if (obj && obj.type !== undefined) {
      console.log("Color: " + color + ", Object Type: " + obj.type);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

// 1.2.31. 
let test1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
let test2 = { type: "Truck", "avg speed": 90, "load capacity": 2400 };
let test3 = { maxSpeed: 180, color: "purple", isCar: true };

console.log("\n--- Результати Painter ---");
console.log("Синій (PaintBlue):");
PaintBlue(test1);
PaintBlue(test2);
PaintBlue(test3);

console.log("Червоний (PaintRed):");
PaintRed(test1);
PaintRed(test2);
PaintRed(test3);

console.log("Жовтий (PaintYellow):");
PaintYellow(test1);
PaintYellow(test2);
PaintYellow(test3);
