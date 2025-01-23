// welcome Message Function
function welcomeMessage() {
  alert("Welcome To Our Movies List");
  alert("Please Select A Movie To Show It's Details");
}
welcomeMessage();


// Movies List
const movies = [
  {
    id: Math.random(),
    movieName: "Spider Man",
    releaseYear: 2003,
    rates: 5,
    available: false
  },
  {
    id: Math.random(),
    movieName: "Fast Farious 4",
    releaseYear: 2005,
    rates: 4,
    available: false
  },
  {
    id: Math.random(),
    movieName: "Sonic The Hedhog 4",
    releaseYear: 2019,
    rates: 5,
    available: true
  },
  {
    id: Math.random(),
    movieName: "Sonic The Hedhog 3",
    releaseYear: 2023,
    rates: 2,
    available: true
  }
]


// User Input Function
function userInput(input) {

  switch(input) {
    case "1":
      return true;
    case "2":
      return false;
  }

}


// Choose Movies Or Exit
let userChoice = prompt("1-Select\n2-Exit The Programme");
let manInput = userInput(userChoice);

if (manInput) {
  movies.forEach((element, index)=> {
    alert(`Movie ${index + 1} => ${JSON.stringify(element)}`);
  })
  alert("Thank You Bye");
  console.log(movies);
} else {
  alert("You Closed The Programme Thank You");
  window.close();
}


