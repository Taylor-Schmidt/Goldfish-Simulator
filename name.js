import fetch from "node-fetch";

//var jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//const { window } = new JSDOM();
//const { document } = (new JSDOM('')).window;
//global.document = document;

//const { data } = require("jquery");

//var $ = jQuery = require('jquery')(window);

let url ="https://randommer.io/api/Name?nameType=firstname&quantity=1";
let apiKey = "e30cceee755b4b6dbbf7a794db05588e";

//$.ajax({
//   url: url,
//   type:"GET",
//   beforeSend: function(request) {
//      request.setRequestHeader("accept", "*/*");
//      request.setRequestHeader("X-Api-Key", apiKey);
//    },
//   dataType:"json",
//   error: function(err){
//      console.log(err);
//   },
//   success: function(data)
//   {
//      console.log(data);
//   }
//})

 async function getName(){
   const response = await fetch(url,{
      method: 'GET',
      headers:{
         'Content-Type': 'application/json',
         'accept': '*/*',
         'X-Api-Key': apiKey
      },
   });
   return response.json();
}

export function setName(){
   getName()
   .then(data =>{
      let text = JSON.stringify(data);
      console.log(text);
   })
   /*.then(html =>{
     document.getElementById('nametag').innerHTML=html;
   })*/
   ;
}


