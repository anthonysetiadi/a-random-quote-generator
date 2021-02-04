/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
completed by Anthony Setiadi
******************************************/

// Quotes that will be randomly generated
  // Some quotes include different properties
const quotes = [
  {
    quote: 'You will face many defeats in life, but never let yourself be defeated.',
    source: 'Maya Angelou',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
  },
  {
    quote: `If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you."`,
    source: 'Steve Jobs'
  },
  {
    quote: `You don't learn to walk by following rules, you learn by doing and falling over.`,
    source: 'Richard Branson',
    handle: '@richardbranson'
  },
  {
    quote: `May the Force be with you.`,
    source: `Luke Skywalker`,
    citation: `Star Wars`,
    year: '1977'
  },
  {
    quote: `I am your father.`,
    source: `Darth Vader`,
    citation: `Star Wars Episode V: The Empire Strikes Back`,
    year: `1980`
  }
]



// Function returns a random object from quotes array
  // random object contains quotes, sources and other properties
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * Object.keys(quotes).length)
  let randomQuote = quotes[randomNum]
  return randomQuote
}


// Function prints random object to html
  // Check if random object contains different properties
  // initializes changeBackground function
  
function printQuote () {
  let getQuote = getRandomQuote()
  let quoteDisplay = `
  <p class="quote">${getQuote.quote}</p>
  <p class="source">${getQuote.source}`

  if (getQuote.citation !== undefined) {
    quoteDisplay += `<span class="citation">${getQuote.citation}</span>`
  }
  if (getQuote.year !== undefined) {
    quoteDisplay += `<span class="year">${getQuote.year}</span>`
  }
  if (getQuote.handle !== undefined) {
    quoteDisplay += `<span class="year">${getQuote.handle}</span>`
  }
  quoteDisplay += `</p>`
  document.getElementById('quote-box').innerHTML = quoteDisplay
  changeBackground ()
}

// Function to change background color
function changeBackground () {
  red = Math.floor(Math.random() * 256)
  green = Math.floor(Math.random() * 256)
  blue = Math.floor(Math.random() * 256)
  randomRGB = `rgb(${red}, ${green}, ${blue})`
  document.body.style.background = randomRGB
}
// Change background and quote every 5 seconds 
  setInterval (printQuote, 5000)

// Click the button for a new quote
document.getElementById('load-quote').addEventListener("click", printQuote, false);