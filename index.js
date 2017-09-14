const express = require("express"),
      app     = express();
      
app.get('/', (req, res) => {
  res.send({bye: 'buddy'});
});

app.listen(process.env.PORT, process.env.IP)