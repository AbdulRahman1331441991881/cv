document.getElementById('li1').addEventListener('mousemove',()=>{
    document.getElementById('sss').style.marginRight='430px';
    document.getElementById('sss').style.width='50px';

})
document.getElementById('li2').addEventListener('mousemove',()=>{
    document.getElementById('sss').style.marginRight='335px';
})
document.getElementById('li3').addEventListener('mousemove',()=>{
    document.getElementById('sss').style.marginRight='235px';
})
document.getElementById('li4').addEventListener('mousemove',()=>{
    document.getElementById('sss').style.marginRight='125px';
})
document.getElementById('li5').addEventListener('mousemove',()=>{
    document.getElementById('sss').style.marginRight='0';
})

document.getElementById('open').addEventListener('click',()=>{
    document.getElementById('list').style.display='flex';
})
document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('list').style.display='none';
})