
import Card from '@mui/material/Card';
import "./InfoBox.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function InfoBox({info}) {
  const INIT_URL="https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvZ2d5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
     const hot_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const rain_url="https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
    return (
        <div className="InfoBox">
           
    
    <div className="cardConatiner">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rain_url: info.temp >15 ? hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color="text.secondary" component={"span"} >
      <p>Temperature={info.temp}&deg;C</p>
      <p>Humidity={info.humidity}</p>
      <p>Min Temp={info.tempMin}</p>
     
      <p>The weather can be described as {info.weather} and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
};