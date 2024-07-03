// ===>   🚀....................100 Days Codding Challange!!!....................🚀



// 🚀 Day 1 Challenge: Start Coding! 🚀

// QUESTION: 2
// Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you
//  like to learn some TypeScript today?”

let name = "Ahsan";
console.log(`Hello ${name} would you like to learn some TypeScript today?`);

// QUESTION: 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase
// , uppercase, and titlecase.
let personName:string = "Ahsan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

// .................................................................................................................//

// 🚀 Day 2 Challenge: Start Coding! 🚀

// QUESTION: 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

let author :string = "Albert Einstein";
console.log(`${author} once said; "A Person Who Never Made a Mistake Never Tried Anything New."`);

// Question: 5
// Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message. Print your message.
 
let personName1 = "Albert Einstein";
let message :string = 'once said "A Person Who Never Made a Mistake Never Tried Anything New."'
console.log(`${personName1} ${message} `);

// QUESTION: 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the 
// name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is 
// displayed. Then print the name after stripping the white spaces.

let whitespace:string="\n\t Ahsan\t\n"
console.log(whitespace);
let withoutWhiteSpace=whitespace.trim()
console.log(withoutWhiteSpace);

//..................................................................................................................//

// 🚀 Day 3 Challenge: Start Coding! 🚀

// QUESTION: 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result
//  in the number 8. Enclose your operations in print statements.
 
console.log(5+3); // Addition
console.log(10-2);// Subtration
console.log(4*2);// Multipilication
console.log(16/2);// Division

// QUESTION: 8
//  You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

   console.log(5+3);
   console.log(4*2);
   console.log(10-2);
   console.log(16/2);
   
// QUESTION: 9
// Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number.
//  Print that message.

const favNumber:number=56;
let  message1:string="is the Jersey Number King Babar Azam";
console.log(`${favNumber} ${message1}`);

//....................................................................................................................//

// 🚀 Day 4 Challenge: Start Coding! 🚀

// QUESTION: 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If the programs are straightforward at this point, just add your name and the current date at the top of each
//   program file. Then, write one sentence describing what the program does.

// Ahsan 
// This Message are Print In Node>Js
let personName2:string="Ahsan";
console.log(`Hello ${personName2}, would you like to learn some TypeScript today?`);

// QUESTION: 11
// Names: Store the names of a few of your friends in an array called names. Print each person’s 
// name by accessing each element in the list, one at a time.

let names :string[] = ["Ahsan","Danish","Asad","Sheraz","Arsalan"];
for(let i = 0; i< names.length; i++){
   console.log(names[i]);
}

//QUESTION: 12
// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. 
// The message should be the same for each person, but personalized with their name.

let names1 :string [] = ["Joseph","Harry","Chris"];
for(let name of names){
    console.log(`Hello! ${name}, would you like to learn some TypeScript today?`);
}

// ..................................................................................................................//

// 🚀 Day 5 Challenge: Start Coding! 🚀

// QUESTION: 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
// that stores several examples. Use your list to print a series of statements about these items, such as
//  “I would like to own a Honda motorcycle.”

let transportation:string[]=["Suzuki 150cc","Audi G-tron","Honda Civic"];
transportation.forEach(transport=>{
    console.log(`I would like to own a ${transport}.`);
})

//QUESTION: 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
//  includes at least three people you’d like to invite to dinner. Then use your list to print a message to each
//  person, inviting them to dinner.

// let guests:string[]=["Danish","Hamza","Fahad"];
// guests.forEach(guest=>{
    // console.log(`Hello ${guests} Would you like To join my Home for Dinner`);
// })

//Question: 15
// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of 
// invitations with a replacement guest.

let unableToAttend = "Fahad";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Mazz";
// guests[guests.indexOf(unableToAttend)] = newGuest;
// guests.forEach(guest => {
    // console.log(`Mr ${guests} Would you like To join my Home for Dinner`);
// });


//...................................................................................................................//


// 🚀 Day 6 Challenge: Start Coding! 🚀

// QUESTION: 16
// More Guests: You've found a bigger dinner table, so there's room for more guests

let guests:string[]=["Danish","Hamza","Fahad"];
console.log("Great News ! , I Found a Bigger Dinner Table");
guests.unshift("Umar");
guests.push("Haris")
guests.splice(guests.length / 2,0,"Shoaib");
 guests.forEach(guest => {
    console.log(`Mr ${guests} Would you like To join my Home for Dinner`);
});

//QUESTION: 17
//Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Sorry Guys! I can Invited  Only 2 Peoples");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Mr ${guest},You are Invited a Dinner`);
});
// guests.splice(0, guests.length);
console.log(guests)

//QUESTION: 18
// Seeing the World: Think of at least five places you’d like to visit.

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);