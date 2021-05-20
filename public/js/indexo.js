const serachbtn=document.querySelector('.searcharea');
const brand=document.querySelector('.brand');

serachbtn.addEventListener('keyup',(evt)=>{
    if(evt.key=='Enter')
    {
        const value=serachbtn.value;
        if(value==="")
        {
            window.location.href='https://moviearena.herokuapp.com/' ||`http://localhost:4000/`;
        }
        else
        {
            
            window.location.href=`https://moviearena.herokuapp.com/search?v=${value}` || `http://localhost:4000/search?v=${value}`;
        }
    }
})


brand.addEventListener('click',()=>{
    window.location.href="https://moviearena.herokuapp.com/" || `http://localhost:4000/`;
})