const fetch = require('node-fetch');
const URL = 'http://api.icndb.com/jokes/random';

const getNorrisJoke = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.value.joke);
  } catch (error) {
    console.log(error);
  }
};

getNorrisJoke(URL);



