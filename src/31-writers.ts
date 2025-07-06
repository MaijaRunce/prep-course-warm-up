export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

type Writer = {
  firstName: string;
  lastName: string;
  occupation: string;
  age: number;
  alive: boolean;
};

const writers: Writer[] = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

// filter masiva iebuveta funkcija, atfiltre visus dzivos, ar for of loopu izkonsole visus dzivos taja teikuma

let alivewritersV = writers.filter((writer) => writer.alive == true);

for (const alivewriter of alivewritersV){
  console.log(`Hi, my name is ${alivewriter.firstName} ${alivewriter.lastName}. I am ${alivewriter.age} years old, and work as a ${alivewriter.occupation}.`)

}

