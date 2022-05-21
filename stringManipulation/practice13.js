// Quote extractor
// Given a quote in a format like this:

// “[QUOTE]” – [author]
///"([\w\s-]*.)" - ([\w\s-]*)/gm

// Return an array containing both the quote text and the author.
// Both components (quote, author) could also contain hyphens (-).

const extractQuote = (quote) => {
  const match = quote.match(/"([\w\s-]*.)" - ([\w\s-]*)/);

  return [match[1], match[2]];
};

const quote = `"The unexamined life is not worth living." - Socrates`;
console.log(extractQuote(quote));
// ["The unexamined life is not worth living.", "Socrates"]
