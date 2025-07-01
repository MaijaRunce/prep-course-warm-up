function onlyTheAces(arr: string[]) {
  const newArr: string[] = [];

  for (const element of arr) {
    if (element == "Ace") {
      newArr.push(element);
    }
  }

  console.log(newArr);
}



console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
