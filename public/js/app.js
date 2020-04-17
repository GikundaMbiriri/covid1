//import { query } from "express/lib/express"

//import { response } from "express/lib/express"

console.log('hello ,this is my first client side project')

const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageOn=document.querySelector('#message');
const messageOne=document.querySelector('#message-1');
const messageTwo=document.querySelector('#message-2');
const messageThree=document.querySelector('#message-3');
const messageFour=document.querySelector('#message-4');
const messageFive=document.querySelector('#message-5');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const country=search.value;
    messageOn.textContent='loading...';
    messageTwo.textContent='';
    fetch('/covid?country='+country).then((response)=>{
       
response.json().then((data)=>{
    if(data.error){
        messageOn.textContent=data.error
    }else{
        messageOn.textContent=''
        messageOne.textContent=data.countryName
        messageTwo.textContent=data.total,
        messageThree.textContent=data.death,
        messageFour.textContent=data.recovered,
        messageFive.textContent=data.active

    }})
})
    //console.log(location)
})
