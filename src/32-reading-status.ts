export {};

type Book = {
  title: string;
  author: string;
  isRead: boolean;
}

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

for ( let i = 0; i< library.length; i++)

{
const book = "`" + library[i].title + "`" + `by `+ library[i].author + ".";

if (library[i].isRead){
        console.log ("Already read" + book);
        } else {
        console.log ("You still need to read" + book);
        }
}
// const showStatus = (library: Book) => {
//   console.log()
// }


// showStatus(library);

/*
  Expected output:

  Already read 'The Road Ahead' by Bill Gates.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
