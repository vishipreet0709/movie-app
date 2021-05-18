const btn=document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
    const p=document.querySelector('.container').getAttribute('id');
const q=document.querySelector('.container').getAttribute('data-q');
    window.location.href=`http://localhost:4000/cross?p=${p}&q=${q}`;
})