//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalid;
const startchangingColor = function(){
  if(!intervalid){ intervalid= setInterval(changeBgColor,1000);
  }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopchangingColor = function(){
     clearInterval(intervalid);
     intervalid=null;
};

document.querySelector('#start').addEventListener('click',startchangingColor);

document.querySelector('#stop').addEventListener('click',stopchangingColor);