var quoteList = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    quoteAuthor: "--Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    quoteAuthor: "--Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    quoteAuthor: "--Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    quoteAuthor: "--Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    quoteAuthor: "--Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    quoteAuthor: "--Mahatma Gandhi",
  },
  {
    quote:
      "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    quoteAuthor: "--Narcotics Anonymous",
  },
  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    quoteAuthor: "--Andre Gide, Autumn Leaves",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    quoteAuthor: "--Elbert Hubbard",
  },
  {
    quote:
      "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
    quoteAuthor: "--Lao Tzu",
  },
];
let previousNumber;
let newNumber;
function generateQuote() {
  do {
    newNumber = parseInt(Math.random() * quoteList.length);
  } while (newNumber == previousNumber);
  previousNumber = newNumber;
  document.getElementById("Quote").innerHTML = `
  <p >${quoteList[newNumber].quote} </p>
  <p>${quoteList[newNumber].quoteAuthor}</p>`;
  console.log(newNumber);
}
