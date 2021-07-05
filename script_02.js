const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


//*** Sors-moi la liste des titres des livres du CDI ***
const bookTitle = books.map((book) => ({
  titre: book.title,
}));
console.log(bookTitle)

//*** Est-ce que tous les livres ont été empruntés au moins une fois ? ***
let hasBeenRented = books.filter( book => {
  return book.rented > 0;
});
console.log(hasBeenRented)

//*** Quel est le livre le plus emprunté ? ***
const displayTheMostRentedBook = (arr) => {
  let mostRented = 0;
  arr.filter(x => {
      if (x.rented > mostRented) mostRented = x.rented;
  });
  return mostRented;
};
  console.log(displayTheMostRentedBook(books));

  //*** Quel est le livre le moins emprunté ? ***
  const displayTheLeastRentedBook = (arr) => {
    let leastRented = 999;
    arr.filter(x => {
        if (x.rented < leastRented) leastRented = x.rented;
    });
    return leastRented;
  };
    console.log(displayTheLeastRentedBook(books));

  //*** Supprime le livre avec l'ID 133712 ***

var id = 133712
var list = books
var index = books.map(x => {
  return x.id ;
}).indexOf(id);

list.splice(index, 1);
console.log(list);