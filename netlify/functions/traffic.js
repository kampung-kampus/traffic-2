const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const API_URL = 'https://datamall2.mytransport.sg/ltaodataservice/TrafficSpeedBands';
  
  // Use environment variable for security (set this in Netlify dashboard)
  const ACCOUNT_KEY = process.env.LTA_ACCOUNT_KEY || '325y4IwcQU+mqCX5P+D01g==';

  try {
    const response = await fetch(API_URL, {
      headers: {
        'AccountKey': ACCOUNT_KEY,
        'accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`LTA API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error fetching traffic data:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to fetch traffic data',
        message: error.message 
      })
    };
  }
};
