
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();


app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.use(express.json());
app.use(express.urlencoded({extended :false}));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index')
);

//Weather API routes
app.use('/weather', require('./routes/weather'))

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));