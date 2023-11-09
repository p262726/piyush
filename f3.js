const clock=document.querySelector('#clock')

// let Date=new Date();
// console.log(date.toLocaleTimeString());



setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000)