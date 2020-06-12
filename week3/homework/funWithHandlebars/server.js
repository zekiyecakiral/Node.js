const Handlebars = require("handlebars");

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon",
];

const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing",
];

function drawCard() {
  const cardData = {
    subject: subjects[getRandomWord()],
    punchline: punchlines[getRandomWord()],
  };

  const card = Handlebars.compile("{{subject}} is great to {{punchline}}");
  console.log(
    card({ subject: cardData.subject.charAt(0).toUpperCase() + cardData.subject.slice(1) , punchline: cardData.punchline })
  );
}
function getRandomWord() {
  return Math.floor(Math.random() * 7);
}
drawCard();
