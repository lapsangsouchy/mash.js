/* Get User Inputs */
let inputHome = process.argv[2];
let inputPet = process.argv[3];

/* Number Generator Function */

function randNumGenerator(num) {
  return Math.floor(Math.random() * num);
}

/* Functions for MASH Variables */

function getHome() {
  let homes = ['Mansion', 'Castle', 'Shack', 'House'];
  if (inputHome != undefined) {
    return inputHome;
  }
  return homes[randNumGenerator(homes.length)];
}

function getPet() {
  if (inputPet != undefined) {
    let petIndex = randNumGenerator(2);
    if (petIndex == 1) {
      return inputPet;
    }
  }
  let pets = ['Dog', 'Cat', 'Capybara', 'Mosquito'];
  return pets[randNumGenerator(pets.length)];
}

function getTravelCount() {
  return randNumGenerator(101);
}

function getCollege() {
  let colleges = ['NorthEastern', 'Rutgers', 'NYU', 'MIT', 'Community College'];
  return colleges[randNumGenerator(colleges.length)];
}

function getCar() {
  let cars = ['Toyota', 'Mazda', 'Tesla', 'Mustang', 'Saturn'];
  return cars[randNumGenerator(cars.length)];
}

/* MASH function */

function mash() {
  /* Run Functions and Assign to Variables */
  let home = getHome();
  let travelCount = getTravelCount();
  let pet = getPet();
  let college = getCollege();
  let car = getCar();

  let statement =
    'You will live in a ' +
    home +
    ', travel to ' +
    travelCount +
    ' countries, have a pet ' +
    pet +
    ', graduate from ' +
    college +
    ', and drive a ' +
    car +
    '!';
  if (
    home == 'Shack' &&
    travelCount <= 1 &&
    pet == 'Mosquito' &&
    college == 'Community College' &&
    car == 'Saturn'
  ) {
    statement = statement + '\nSorry! You got really unlucky :(';
  }
  return statement;
}
console.log(mash());
