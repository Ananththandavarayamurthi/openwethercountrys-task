
     
     function createcountries(countrys){
        countrys.forEach((countrys) => {
         ((countrys,) => { 
            document.body.innerHTML+=`<div class="container">
            <h2 class="name">
            ${countrys.name.common}</h2>
        <div class=""><img src="${countrys.flags.svg}" alt="img"></div>
        <div class='content-container'>
        <p></p>
        <p><span class="title">REGION:</span>${countrys.region}</p>
        <p><span class="title">CAPITAL:</span>${countrys.capital}</p>
        <p><span class="title">COUNTRY CODE:</span>${countrys.car.cca3}</p>
       
           </div> 
        </div>`;
        });
         
        }); 
     };
   fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
// .then((countrys)=>console.log(countrys))
.then((countrys)=>createcountries(countrys));

