// netlify/functions/getAirbnbUnavailableDates.js
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const response = await fetch('https://www.airbnb.com/calendar/ical/612841667247831226.ics?s=6d0e5b006c8a4a4fb594689930f6fadd');
    const text = await response.text();

    return {
      statusCode: 200,
      body: text,
      headers: {
        'Content-Type': 'text/plain',
      },
    };
  } catch (error) {
    console.error('Error fetching Airbnb iCal file:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
