const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.json());
app.use(express.urlencoded({extended :true}));

// Homepage Route
app.get('/', (req, res) =>{
  res.render('index')
}
);

//Weather API routes
app.use('/weather', require('./routes/weather'))

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));