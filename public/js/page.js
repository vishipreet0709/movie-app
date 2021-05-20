const btn=document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
    const p=document.querySelector('.container').getAttribute('id');
const q=document.querySelector('.btn').getAttribute('id');
    window.location.href=`https://moviearena.herokuapp.com/cross?p=${p}&q=${q}` || `http://localhost:4000/cross?p=${p}&q=${q}`;
})