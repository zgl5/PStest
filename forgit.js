class Hamster {
    constructor(name){
        this.owner=''
        this.name= name;
        this.price=15
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    wheelRun() {
        console.log("nibble nibble")
    }
    getPrice(){
        console.log(this.price)
    }
}


class Person {
    constructor(name){
        this.name= name;
        this.age=0
        this.height=0
        this.weight=0
        this.mood = 0
        this.hamster = []
        this.bankAccount=0
    }
    getName() {
        console.log(this.name)
    }
    getAge() {
        console.log(this.age)
    }
    getWeight() {
        console.log(this.weight)
    }
    greet(){
        console.log("Hello " + this.name)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
    
    this.hamster.push(hamster)
    this.mood+=10
    this.bankAccount-=hamster.getPrice()
    }
}
    
const timmy = new Person("Timmy")
for (let i = 0; i<5; i++){
    timmy.ageUp()
}

for (let e = 0; e<5; e++){
    timmy.eat()
}
for (let k = 0; k<5; k++){
    timmy.exercise()
}

for (let a = 0; a<9; a++){
    timmy.ageUp()
}

const gus = new Hamster("Gus")
gus.owner = "Timmy"
timmy.buyHamster(gus)

for (let t = 5; t<15; t++){
    timmy.ageUp()
}

timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()


class Dinner {
    constructor(type,appetizer, entree, dessert){
        this.type=type
        this.appetizer=appetizer
        this.entree = entree
        this.dessert=dessert
    }
    chef(){
        console.log(this.type)

    }
}

class DinnerFactory {
    constructor(factoryType) {
      this.factoryType = factoryType;
      this.dinner = [];
    }
  
    makeNewdinner(appetizer, entree, dessert) {
      const newDinner = new Dinner(this.factoryType,appetizer, entree, dessert);
      this.dinner.push(newDinner);
    }
  
    printoptions() {
      for (let option of this.dinner) {
        console.log(option);
      }
    }
  }
  
  let option1 = new DinnerFactory('option1');
  option1.makeNewdinner("Cheese Dip","Meatloaf", "Pudding")
  option1.printoptions()

  let option2 = new DinnerFactory('option2');
  option2.makeNewdinner("Spinach Dip", "Grilled Cheese", "Pie")
  option2.printoptions()

  let option3 = new DinnerFactory('option3');
  option3.makeNewdinner("Artichoke Dip", "Spaghetti", "Ice-cream")
  option3.printoptions()