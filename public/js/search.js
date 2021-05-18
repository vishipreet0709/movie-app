const singleblock=document.querySelectorAll('.single-block');
const serachbtn=document.querySelector('.searcharea');
const nextbtn=document.querySelector('.next');
const backbtn=document.querySelector('.back');
const brand=document.querySelector('.brand');
singleblock.forEach((item)=>{
    item.addEventListener('click',()=>{
        const mid=item.getAttribute('id');
        const p=document.querySelector('.main-container').getAttribute('id');
        const q=document.querySelector('.title').getAttribute('id');
        window.location.href=`https://moviearena.herokuapp.com/movie?id=${mid}&page=${p}&query=${q}`;
    })
})

serachbtn.addEventListener('keyup',(evt)=>{
    if(evt.key=='Enter')
    {
        const value=serachbtn.value;
        if(value==="")
        {
            window.location.href="https://moviearena.herokuapp.com/";
        }
        else
        {
            window.location.href=`https://moviearena.herokuapp.com/search?v=${value}`;
        }
    }
})


brand.addEventListener('click',()=>{
    window.location.href="https://moviearena.herokuapp.com/";
})

nextbtn.addEventListener('click',(e)=>{
    const btn=e.target;
    const v=document.querySelector('.title').getAttribute('id');
    window.location.href=`https://moviearena.herokuapp.com/snext?q=${v}`;
})

backbtn.addEventListener('click',(e)=>{
    const btn=e.target;
    const v=document.querySelector('.title').getAttribute('id');
    window.location.href=`https://moviearena.herokuapp.com/sback?q=${v}`;
})