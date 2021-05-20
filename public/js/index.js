const singleblock=document.querySelectorAll('.single-block');
const serachbtn=document.querySelector('.searcharea');

const brand=document.querySelector('.brand');
singleblock.forEach((item)=>{
    item.addEventListener('click',()=>{
        const mid=item.getAttribute('id');
        const p=document.querySelector('.main-container').getAttribute('id');
        const q=item.getAttribute('data-q');
        window.location.href=`https://moviearena.herokuapp.com/movie?id=${mid}&page=${p}&query=${q}` || `https://moviearena.herokuapp.com/movie?id=${mid}&page=${p}&query=${q}`;
    })
})

serachbtn.addEventListener('keyup',(evt)=>{
    if(evt.key=='Enter')
    {
        const value=serachbtn.value;
        if(value==="")
        {
            window.location.href="https://moviearena.herokuapp.com/" || "http://localhost:4000/";
        }
        else
        { 
            window.location.href=`https://moviearena.herokuapp.com/search?v=${value}` || `http://localhost:4000/search?v=${value}`;
        }
    }
})


brand.addEventListener('click',()=>{
    window.location.href="https://moviearena.herokuapp.com/" || "http://localhost:4000/";
})

