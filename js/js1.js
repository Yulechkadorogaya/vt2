
function checkForm(el)
{
      console.log("Проверка");


var fail = "";
var viv = name.value + email.value + tel.value;
if (name1 == ""|| email == ""|| tel == "")
fail="заполните все поля";
else if(name1.length <=1||name1.length>50)
fail="Введите корректное имя!";
else if(email.conteins("1")){
fail="Введите корректный email!"
}
if (fail == ""){
    document.getElementById('error').innerHTML = fail;
    return false;
} 
   
   else {document.getElementById('vivod').innerHTML = viv;
   return false;
    }
}
   
    
        function f4(){
            document.getElementById('posta').checked=true
            document.getElementById('tel').checked=true
            document.getElementById('tel posta').checked=true
        }
 

        
        let el = document.getElementsByClassName('smallp');
        console.log(el);
        for (i=0; i < el.length; ++i){
            el[i].onclick = pic; 
        }
        function pic(event){
            x=document.getElementById("bigp");
            console.log(event.target);
            x.src = event.target.src; 
        }

        
    let offset = 0;
    const sliderLine = document.querySelector('.slider-line');
    document.querySelector('.slider-next').addEventListener('click', function () {
        offset = offset + 256;
        //offset+=256;
        if (offset > 1024){
            offset = 0;
        }
    sliderLine.style.left = -offset + 'px';
    })
    document.querySelector('.slider-prev').addEventListener('click', function () {
        offset = offset - 256;
        //offset+=256;
        if (offset < 0){
            offset = 1024;
        }
    sliderLine.style.left = -offset + 'px';
    })



const MAX_PERCENTAGE = 100;

const COLORS = [
`#ffc8cb`,
`#8b00ff`,
`#cda4de`
];

const BarSize = {
MAX_HEIGHT: 190,
WIDTH: 50
};

const BarCoordinate = {
INITIAL_X: 80,
INITIAL_Y: 220
}

const Font = {
SIZE: `18px`,
FAMILY: `Tahoma`
};

const LabelCoordinate = {
INITIAL_X: 30,
INITIAL_Y: 70
}

const Gap = {
HORIZONTAL: 60,
VERTICAL: 30
}

const formElement = document.querySelector(`.chart__data`);
const inputElements = formElement.querySelectorAll(`.chart__input`);

const getData = (inputElements) => {
return Array.from(inputElements).map((input, index) => ({
name: input.name,
value: input.value,
color: COLORS[index]
}));
};

const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext(`2d`);

const renderChart = (items) => {
ctx.clearRect(0, 0, canvas.width, canvas.height);

let currentLabelY = LabelCoordinate.INITIAL_Y;
let currentBarX = BarCoordinate.INITIAL_X;
const gapBetweenBars = BarSize.WIDTH + Gap.HORIZONTAL;

for (const item of items) {
const barHeight = (item.value * BarSize.MAX_HEIGHT) / MAX_PERCENTAGE;

ctx.fillStyle = item.color;
ctx.font = `${Font.SIZE} ${Font.FAMILY}`;
ctx.save();
ctx.translate(0, canvas.height);
ctx.rotate(-Math.PI/2);
ctx.fillText(item.name.toUpperCase(), LabelCoordinate.INITIAL_X, currentLabelY);
ctx.restore();
ctx.fillRect(currentBarX, BarCoordinate.INITIAL_Y, BarSize.WIDTH, -barHeight);

currentBarX += gapBetweenBars;
currentLabelY += gapBetweenBars;
}
};

formElement.addEventListener(`submit`, (evt) => {
evt.preventDefault();
renderChart(getData(inputElements));
formElement.reset();
});
   


    
    document.getElementById('svaz').addEventListener("click", hiddenClick);
    function hiddenClick(){
        let x = document.getElementById('tel1');
        let y = document.getElementById('email1');
        if (document.getElementById('pochta').checked){
            y.style.visibility = 'visible';
        } else {
            y.style.visibility = 'hidden';
        }
        if (document.getElementById('tel').checked){
            x.style.visibility = 'visible';
        } else {
            x.style.visibility = 'hidden';
        }
    }
  
    
    localStorage.setItem('data', 7);
    console.log(localStorage.getItem('data'));
    const a = [4, 5, 6, 7, 8];
    localStorage.setItem('a', JSON.stringify(a));
    let b = localStorage.getItem('a');
    b = JSON.parse(b);
    console.log(b);
    console.log(b[0]);
    console.log(b[1]);
    console.log(typeof b);

    const c = {
        hello: 4,
        j: 7,
        4:'hello world'};
        localStorage.setItem('c', JSON.stringify(c));
    let d = localStorage.getItem('c');
    d = JSON.parse(d);
    console.log(d);
    console.log(typeof d);
    window.addEventListener('storage')
