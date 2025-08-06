const express = require("express");
const app = express()
const port = 3001;
const axios = require("axios");
const cors = require("cors");

app.use(cors()); //allow all users to accress the API end-points
app.listen(port, ()=>{
    console.log("Server is Running " + port)
})

app.get("/swiggy", async(req, res)=>{
   const response  = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0225&lng=72.5714&page_type=DESKTOP_WEB_LISTING",
    {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "application/json",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.swiggy.com/",
          "Origin": "https://www.swiggy.com",
        },
      },

      
   )
   res.json(response.data)
})