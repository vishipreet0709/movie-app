const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const fs=require('fs');
const axios=require('axios');
const fetch=require('node-fetch');
const mongoose=require('mongoose');
const { stringify } = require('querystring');
const https=require('https');
const urlmodule=require('url');

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.set('view engine',"ejs");

const apikey='048e68f3b550a0431d7bc64f59be1645';
const url='https://api.themoviedb.org/3';
const imgurl="https://image.tmdb.org/t/p/w200/";
var i=1;
var s=1;

app.get('/',async (req,res)=>{

    const searchurl='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=048e68f3b550a0431d7bc64f59be1645&page=1';
    try{
    const response=await axios.get(searchurl);
    i=1;
    s=1;
    res.render('index',{results:response.data.results,page:i,query:""});
    }
    catch(err){
        console.log(err);
    }
})
app.get('/next',async (req,res)=>{
    i++;
    const searchurl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=048e68f3b550a0431d7bc64f59be1645&page=${i}`;
    try{
    const response=await axios.get(searchurl);
    if(response.data.results.length!==0)
    res.render('index',{results:response.data.results,page:i,query:""});
    else
    {
        res.render('oops');
    }
    }
    catch(err){
        console.log(err);
    }
})

app.get('/back',async (req,res)=>{
    i--;
    if(i<=0)
    {
        i=1;
        res.redirect('/');
    }
    else
    {
        const searchurl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=048e68f3b550a0431d7bc64f59be1645&page=${i}`;
        try{
        const response=await axios.get(searchurl);
        if(response.data.results.length!==0)
        res.render('index',{results:response.data.results,page:i,query:""});
        else
        {
            res.render('oops');
        }
        }
        catch(err){
            console.log(err);
        }
    }
})

app.get('/search',async (req,res)=>{
    const v=req.query.v;
   const u=` https://api.themoviedb.org/3/search/movie?api_key=048e68f3b550a0431d7bc64f59be1645&query=${v}&page=1`;
   try{
       const response=await axios.get(u);
       if(response.data.results.length!==0)
       {
           s=1;
      
       res.render('search',{page:s,results:response.data.results,query:v});
       }
       else
       {
           res.render('oops');
       }
   }
   catch(err)
   {
       console.log(err);
   }

})

app.get('/snext',async (req,res)=>{
    s++;
    const v=req.query.q;
    const searchurl=`https://api.themoviedb.org/3/search/movie?api_key=048e68f3b550a0431d7bc64f59be1645&query=${v}&page=${s}`;
    try{
    const response=await axios.get(searchurl);
    const v=req.query.q;
    if(response.data.results.length!==0)
    res.render('search',{page:s,query:v,results:response.data.results});
    else
    {
        res.render('oops');
    }
    }
    catch(err){
        console.log(err);
    }
})

app.get('/sback',async (req,res)=>{
    s--;
    const v=req.query.q;
    if(s<=0)
    {
        s=1;

    }
        const searchurl=`https://api.themoviedb.org/3/search/movie?api_key=048e68f3b550a0431d7bc64f59be1645&query=${v}&page=${s}`;
        try{
        const response=await axios.get(searchurl);
        const v=req.query.q;
        if(response.data.results.length!==0)
        res.render('search',{results:response.data.results,query:v,page:s});
        else
        {
            res.render('oops');
        }
        }
        catch(err){
            console.log(err);
        }
})




app.get('/movie',async(req,res)=>{
    const id=req.query.id;
    const p=req.query.page;
    const q=req.query.query;
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=048e68f3b550a0431d7bc64f59be1645`;

    try{
        const response=await axios.get(url);
       
        res.render('page',{result:response.data,page:p,query:q});
    }
    catch(err)
    {
        console.log(err);
    }
})
app.get('/cross',async (req,res)=>{
        const p=req.query.p;
        const q=req.query.q;
        if(q==="")
        {
            const searchurl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=048e68f3b550a0431d7bc64f59be1645&page=${p}`;
         try{
    const response=await axios.get(searchurl);
    res.render('index',{results:response.data.results,page:p,query:""});
    }
    catch(err){
        console.log(err);
    }
        }
        else
        {
            const u=`https://api.themoviedb.org/3/search/movie?api_key=048e68f3b550a0431d7bc64f59be1645&query=${q}&page=${p}`;
            try{
                const response=await axios.get(u);
                if(response.data.results.length!==0)
                {
                    
                res.render('search',{results:response.data.results,query:q,page:p});
                }
                else
                {
                    res.render('oops');
                }
            }
            catch(err)
            {
                console.log(err);
            }
        }
})

app.listen(process.env.PORT || 4000);














// omdb
// http://img.omdbapi.com/?apikey=[e9d021c8]&
// // apikey
// // e9d021c8
// tmdb
// https://api.themoviedb.org/3/movie/550?api_key=048e68f3b550a0431d7bc64f59be1645