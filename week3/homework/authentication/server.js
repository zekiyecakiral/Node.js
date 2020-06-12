const fetch = require('node-fetch');
const URL = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';

const getBooks =  async url => {
  try {
    const response = await fetch(url,{
        headers:{'Authorization': `Basic ${Buffer.from('admin:hvgX8KlVEa').toString('base64')}`}
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getBooks(URL);