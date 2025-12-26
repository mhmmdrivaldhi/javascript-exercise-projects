const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  }
];

const quoteText = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("btnQuote")

function generateRandQuote() {
    // get random quotes from the quotes of array
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // update random quotes text and author in the html element
    quoteText.textContent = `"${randomQuote.text}"`;
    author.textContent = `- ${randomQuote.author} -`;
}

btn.addEventListener("click", generateRandQuote)

generateRandQuote()