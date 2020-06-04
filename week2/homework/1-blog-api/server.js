const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))

app.use('/blogs', require('./routes/api/blogs'))

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));