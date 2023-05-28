/* const path = require('path');
const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

app.set('view engine', 'hbs');
const port = 3000;
const staticpath=path.join(__dirname,"..");
app.use(express.static(staticpath));
app.use('/Images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname,'css/style.css')));
app.use('/Vegetables', express.static(path.join(__dirname, '/views/Vegetables.hbs')));
app.use('/js', express.static(path.join(__dirname,'js/script.js')));
app.use('/potato', express.static(path.join(__dirname, '/views/potato.hbs')));
app.use('/brinjal', express.static(path.join(__dirname, '/views/brinjal.hbs')));
app.use('/cabbage', express.static(path.join(__dirname, '/views/cabbage.hbs')));
app.use('/gourd', express.static(path.join(__dirname, '/views/gourd.hbs')));
app.use('/spinach', express.static(path.join(__dirname, '/views/spinach.hbs')));
app.use('/tomato', express.static(path.join(__dirname, '/views/tomato.hbs')));
app.use('/index', express.static(path.join(__dirname, '/views/index.hbs')));

console.log(path.join(__dirname, '/views/index.hbs'));


app.set('view engine', 'hbs');

app.get("/", (req, res) => {  
  
  res.render('index');
});

const vegetables = {
  "10201": "Potatoes",
  "10203": "Tomatoes",
  "10205": "Spinach",
  "10206": "Cabbage",
  "10209": "Brinjal",
  "10210": "Gourd"
};

var val1,recc1,val2,recc2,val3,recc3;
val1="10203";
recc1 = vegetables["10203"];
val2="10210";
recc2 = vegetables["10210"];   
val1="10203";
recc1 = vegetables["10203"];
val3="10201";
recc3=vegetables["10201"];

app.post('/', (req, res) => {   
  
var veget=req.body["vege"];
console.log(`current:${veget}`);

exec('gcc recommend.c -o recommend', (error, stdout, stderr) => {
    exec(path.join(__dirname, `recommend ${veget}`), (error, stdout, stderr) => {
    console.log(`recommended:${stdout}`);
    //console.log(`stderr:${stderr}`);
    if (error) {
        console.error(`Error executing C program: ${error}`);
        return res.status(500).send('Internal Server Error');
    }     
    const data = stdout.split(" ");
    val1=data[0].trim();
    recc1 = vegetables[val1];
    val2=data[1].trim();
    recc2 = vegetables[val2];    
    val3=data[2].trim();
    recc3=vegetables[val3];
    if(veget=="10201")
    {
    return res.render('potato',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10203")
    {
      return res.render('tomato',{ recc1,val1,recc2,val2});
      
    }
    else if(veget=="10205")
    {
      return res.render('spinach',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10206")
    {
      return res.render('cabbage',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10209")
    {
      return res.render('brinjal',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10210")
    {
      return res.render('gourd',{ recc1,val1,recc2,val2});
    }   
    });
 });
});  


app.get("/Vegetables.hbs", (req, res) => {  
  
  res.set('Cache-Control', 'no-store');
  res.render('Vegetables',{recc3,val3});
});
app.get("/", (req, res) => {  
  
  res.render('index');
});

app.get("/potato.hbs", (req, res) => {  

res.render('potato',{ recc1,val1,recc2,val2});
});
app.get("/brinjal.hbs", (req, res) => {  

res.render('brinjal',{ recc1,val1,recc2,val2});
});
app.get("/cabbage.hbs", (req, res) => {  

res.render('cabbage',{ recc1,val1,recc2,val2});
});
app.get("/gourd.hbs", (req, res) => {  

res.render('gourd',{ recc1,val1,recc2,val2});
});
app.get("/spinach.hbs", (req, res) => {  

res.render('spinach',{ recc1,val1,recc2,val2});
});
app.get("/tomato.hbs", (req, res) => {  

res.render('tomato',{ recc1,val1,recc2,val2});
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
   */
const path = require('path');
const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

app.set('view engine', 'hbs');
const port = 3000;
const staticpath=path.join(__dirname,"..");
app.use(express.static(staticpath));
app.use('/Images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname,'css/style.css')));
app.use('/js', express.static(path.join(__dirname,'js/script.js')));
app.use('/index', express.static(path.join(__dirname, '/views/index.hbs')));

app.use('/Vegetables', express.static(path.join(__dirname, '/views/Vegetables.hbs')));
app.use('/potato', express.static(path.join(__dirname, '/views/potato.hbs')));
app.use('/brinjal', express.static(path.join(__dirname, '/views/brinjal.hbs')));
app.use('/cabbage', express.static(path.join(__dirname, '/views/cabbage.hbs')));
app.use('/gourd', express.static(path.join(__dirname, '/views/gourd.hbs')));
app.use('/spinach', express.static(path.join(__dirname, '/views/spinach.hbs')));
app.use('/tomato', express.static(path.join(__dirname, '/views/tomato.hbs')));

app.use('/Fruits', express.static(path.join(__dirname, '/views/Fruits.hbs')));
app.use('/apple', express.static(path.join(__dirname, '/views/apple.hbs')));
app.use('/mango', express.static(path.join(__dirname, '/views/mango.hbs')));
app.use('/banana', express.static(path.join(__dirname, '/views/banana.hbs')));
app.use('/orange', express.static(path.join(__dirname, '/views/orange.hbs')));
app.use('/grapes', express.static(path.join(__dirname, '/views/grapes.hbs')));
app.use('/pineapple', express.static(path.join(__dirname, '/views/pineapple.hbs')));

//console.log(path.join(__dirname, '/views/index.hbs'));

app.set('view engine', 'hbs');

app.get("/", (req, res) => {  
  
  res.render('index');
});


const vegetables = {
  "10201": "Potatoes",
  "10203": "Tomatoes",
  "10205": "Spinach",
  "10206": "Cabbage",
  "10209": "Brinjal",
  "10210": "Gourd"
};

var val1,recc1,val2,recc2,val3,recc3;
val1="10203";
recc1 = vegetables["10203"];
val2="10210";
recc2 = vegetables["10210"];   
val1="10203";
recc1 = vegetables["10203"];
val3="10210";
recc3=vegetables["10210"];

app.post('/', (req, res) => {   
  
var veget=req.body["vege"];
console.log(`current:${veget}`);

exec('gcc recommend.c -o recommend', (error, stdout, stderr) => {
    exec(path.join(__dirname, `recommend ${veget}`), (error, stdout, stderr) => {
    console.log(`recommended:${stdout}`);
    //console.log(`stderr:${stderr}`);
    if (error) {
        console.error(`Error executing C program: ${error}`);
        return res.status(500).send('Internal Server Error');
    }     
    const data = stdout.split(" ");
    val1=data[0].trim();
    recc1 = vegetables[val1];
    val2=data[1].trim();
    recc2 = vegetables[val2];    
    val3=data[2].trim();
    recc3=vegetables[val3];
    if(veget=="10201")
    {
    return res.render('potato',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10203")
    {
      return res.render('tomato',{ recc1,val1,recc2,val2});
      
    }
    else if(veget=="10205")
    {
      return res.render('spinach',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10206")
    {
      return res.render('cabbage',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10209")
    {
      return res.render('brinjal',{ recc1,val1,recc2,val2});
    }
    else if(veget=="10210")
    {
      return res.render('gourd',{ recc1,val1,recc2,val2});
    }   
    });
 });
});  


app.get("/Vegetables.hbs", (req, res) => {  
  
  res.set('Cache-Control', 'no-store');
  res.render('Vegetables',{recc3,val3});
});
app.get("/", (req, res) => {  
  
  res.render('index');
});

app.get("/potato.hbs", (req, res) => {  

res.render('potato',{ recc1,val1,recc2,val2});
});
app.get("/brinjal.hbs", (req, res) => {  

res.render('brinjal',{ recc1,val1,recc2,val2});
});
app.get("/cabbage.hbs", (req, res) => {  

res.render('cabbage',{ recc1,val1,recc2,val2});
});
app.get("/gourd.hbs", (req, res) => {  

res.render('gourd',{ recc1,val1,recc2,val2});
});
app.get("/spinach.hbs", (req, res) => {  

res.render('spinach',{ recc1,val1,recc2,val2});
});
app.get("/tomato.hbs", (req, res) => {  

res.render('tomato',{ recc1,val1,recc2,val2});
});

const fruits = {
  "20101": "apple",
  "20102": "mango",
  "20103": "banana",
  "20104": "orange",
  "20105": "grapes",
  "20106":"pineapple"
};

var fval1,frecc1,fval2,frecc2,fval3,frecc3;
fval1="20101";
frecc1 = fruits["20101"];
fval2="20102";
frecc2 = fruits["20102"];   
/* val1="20103";
recc1 = vegetables["20103"]; */
fval3="20103";
frecc3=fruits["20103"];

app.post('/fruit', (req, res) => {   
  
var frut=req.body["fru"];
console.log(`current:${frut}`);

exec('gcc recommend.c -o recommend', (error, stdout, stderr) => {
    exec(path.join(__dirname, `recommend ${frut}`), (error, stdout, stderr) => {
    console.log(`recommended:${stdout}`);
    //console.log(`stderr:${stderr}`);
    if (error) {
        console.error(`Error executing C program: ${error}`);
        return res.status(500).send('Internal Server Error');
    }     
    const data = stdout.split(" ");
    fval1=data[0].trim();
    frecc1 = fruits[fval1];
    fval2=data[1].trim();
    frecc2 = fruits[fval2];    
    fval3=data[2].trim();
    frecc3=fruits[fval3];
    if(frut=="20101")
    {
    return res.render('apple',{ frecc1,fval1,frecc2,fval2});
    }
    else if(frut=="20102")
    {
      return res.render('mango',{ frecc1,fval1,frecc2,fval2});
      
    }
    else if(frut=="20103")
    {
      return res.render('banana',{ frecc1,fval1,frecc2,fval2});
    }
    else if(frut=="20104")
    {
      return res.render('orange',{frecc1,fval1,frecc2,fval2});
    }
    else if(frut=="20105")
    {
      return res.render('grapes',{ frecc1,fval1,frecc2,fval2});
    } 
    else if(frut=="20106")
    {
      return res.render('pineapple',{ frecc1,fval1,frecc2,fval2});
    }     
    });
 });
});  

app.get("/Fruits.hbs", (req, res) => {  
  
  res.set('Cache-Control', 'no-store');
  res.render('Fruits',{frecc3,fval3});
});
app.get("/", (req, res) => {  
  
  res.render('index');
});

app.get("/apple.hbs", (req, res) => {  

res.render('apple',{ frecc1,fval1,frecc2,fval2});
});
app.get("/mango.hbs", (req, res) => {  

res.render('mango',{ frecc1,fval1,frecc2,fval2});
});
app.get("/banana.hbs", (req, res) => {  

res.render('banana',{ frecc1,fval1,frecc2,fval2});
});
app.get("/orange.hbs", (req, res) => {  

res.render('orange',{ frecc1,fval1,frecc2,fval2});
});
app.get("/grapes.hbs", (req, res) => {  

res.render('grapes',{ frecc1,fval1,frecc2,fval2});
});
app.get("/pineapple.hbs", (req, res) => {  

  res.render('pineapple',{ frecc1,fval1,frecc2,fval2});
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  