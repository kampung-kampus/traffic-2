# Singapore Causeway Traffic Map

A real-time traffic visualization map for the Singapore-Johor Bahru causeway using LTA DataMall API.

## Features

- Real-time traffic speed bands from LTA DataMall
- Interactive map with polyline and heatmap views
- Auto-refresh every 60 seconds
- Toggle between different visualization modes
- Responsive design for mobile and desktop

## Deployment

### Netlify Deployment

1. **Fork this repository** to your GitHub account
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select this repository
3. **Set Environment Variable**:
   - In Netlify dashboard, go to **Site settings** → **Environment variables**
   - Add: `LTA_ACCOUNT_KEY` = `325y4IwcQU+mqCX5P+D01g==`
4. **Deploy** - Netlify will automatically deploy your site

 
## API Usage

This project uses the LTA DataMall API:
- **Endpoint**: TrafficSpeedBands
- **Refresh Rate**: Every 60 seconds
- **Data**: Real-time traffic speed information

## Technologies Used

- Leaflet.js for mapping
- Netlify Functions for serverless backend
- LTA DataMall API for traffic data
- HTML5/CSS3/JavaScript

## License

MIT License
