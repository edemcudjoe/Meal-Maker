let menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
  
    },
    set appetizers(newAppetizer) {
  
    },
    get mains() {
  
    },
    set mains(newMains) {
  
    },
    get desserts() {
  
    },
    set desserts(newDesserts) {
  
    },
    get courses() {
      return this._courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      dish = {
        name: dishName,
        price: dishPrice,
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomDishIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomDishIndex];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price
      return `This is a meal option for today: \nAppetizer: ${appetizer.name} \nMain: ${main.name} \nDessert: ${dessert.name} \nThe total price for the meal would be ${totalPrice}`;
    }
  }
  
  menu.addDishToCourse('appetizers', 'Chips', 5);
  menu.addDishToCourse('appetizers', 'Salads', 10);
  menu.addDishToCourse('appetizers', 'Garlic bread', 4);
  menu.addDishToCourse('appetizers', 'Deviled Eggs', 7);
  
  menu.addDishToCourse('mains', 'Roasted Beef Tenderloins', 30);
  menu.addDishToCourse('mains', 'Seared Steak', 25);
  menu.addDishToCourse('mains', 'Grilled Chicken', 20);
  menu.addDishToCourse('mains', 'Pot Roast', 25);
  
  menu.addDishToCourse('desserts', 'Apple Pie', 10);
  menu.addDishToCourse('desserts', 'Cheesecake', 8);
  menu.addDishToCourse('desserts', 'Chocolate Pudding', 5);
  menu.addDishToCourse('desserts', 'Ice Cream', 10);
  
  
meal = menu.generateRandomMeal();
console.log(meal);  