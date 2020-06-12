const fetch = require('node-fetch');
const URL = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const makeReservation =  async (url,reservationDetail) => {
  try {
    const response =  await fetch(url,{
        method: 'post',
        body: JSON.stringify(reservationDetail),
        headers:{
            'Content-Type': 'application/json'
    }
    });
    const json = await response.text();
    console.log(json);
    
  } catch (error) {
    console.log(error);
  }
};

const reservationDetail = { 'name': 'John Doe',
'numberOfPeople': 3};

makeReservation(URL,reservationDetail);







