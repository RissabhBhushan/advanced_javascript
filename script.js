const  a = 'test';
let b = true;
let c = 789;

a = test;

const person = 
{
	firstname : "john",
	lastName  : "Doe",
	age       : 50,
	eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;

const a = 'test';
const b = true;
const c = 789;

const okObj = 
{
	a,
	b,
	c
};

const whereAmI = (username, location) =>
{
	if(username && location)
		return "I am not Lost";
	else
		return "Not Lost";
}

const sum = (a, b) => a + b;

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(3)(5);

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

const array = [1, 2, 4, 8];
const double = [];

const newArray = array.forEach((num) => 
{
	double.push(num * 2);
})

console.log('forEach', double);

const mapArray = array.map((num) =>
{
	return num * 2;
});

console.log('map', mapArray);

let newArray[];
array.forEach(user => 
{
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})

const mapArray = array.map(user =>
{
	let { username } = user;
	return username + "?";
})

const filterArray = array.filter(user =>
{
	let { teamRed } = team;
	return user.team === "red";
})

const totalArray = array.reduce((acc, user) =>
{
	return acc + user.score;
}, 0)


class Animal
{
	constructor(name, type, color)
	{
		this.name = name;
		this.type = type;
		this.color = color;
	}
}
class Mammal extends Animal
{
	constructor(name, type, color)
	{
		super(name, type, color);
	}
	sound()
	{
		console.log(`I'm ${this.name} and my type is ${this.type} and ${this.color}`);
	}
}

const cow = new Mammal('raghav', 'saand', 'black');

dragons.filter(name =>
{
	name.includes('John');
})

const power100 = (num) => num ** 100;


let obj = 
{
	username0: 'santa',
	username1: 'banta',
	username2: 'paaji'
}

Object.keys(obj).forEach((key, index) =>
{
	console.log(key, obj[key]);
})

Object.entries(obj).map(value => 
{
	return value[1] + value[0].replace('username', '');
})


// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(8, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'


Object.entries(obj).map(value =>

	value.join(" ")
).join()