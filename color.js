let h1=document.querySelector('h1');
let cr=document.querySelector('button');
cr.addEventListener('click',function()
{
    let newcolor=makecolor()
    document.body.style.backgroundColor=newcolor;
    h1.innerText=newcolor;
})
const makecolor=()=>{
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
 return `rgb(${r},${g},${b})`
}