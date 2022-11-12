
const header = document.createElement("header");
const main= document.createElement("main");
const section = document.createElement("div");

section.className="row"
document.body.append(section)
      
 async function createcountries(){
        section.innerHTML="<h4>please wait</h4>" 
        try{
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          console.log(data);
          section.innerHTML="";

          for(let i=0;i<data.length;i++){
            section.innerHTML+=`<div class="container">
                         <h2 class="name" class="${data[i].name.common}">
                       ${data[i].name.common}</h2>
                       <img src="${data[i].flags.svg}" alt="${data[i].name.common}"> 
                       <div class="content-container"><p>CAPITAL:${data[i].capital}</p>
                       <p>REGION:${data[i].region}</p>
                       <p>COUNTRYCODE:${data[i].cca2}</p>
                       <div>
                       <div id="${data[i].cca2}"></div>
                       <button class="btn btn-primary"onclick="createweather(${data[i].cca2},${data[i].latlng[0]},${data[i].latlng[1]})">weather</button>
                       </div>
                      </div>
                    </div>`
          }
        }  catch(error){
          console.log(error);
        } 
      }
      async function createweather(id,lat,lan){
         console.log(id);
                let weatherData =document.getElementById(id);
                console.log(weatherData);
                id.innerHTML =`<h4>loading weather....</h4>`
                try{
                  const res =await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=367261ea67167733e6e17d88b7110e22&units=metric`
                  );
                 
                  const wdata= await res.json();
                 id.innerHTML=`<div class="jumbotron jumbotron-fluid">
                 <div class="container">
                   <h1 class="display-4">${wdata.name}</h1>
                   <p class="lead">Weather:${wdata.weather[0].description}</p>
                   <p class="lead">TEMP:${wdata.main.temp}</p>
                 </div>
               </div>
                 ` ;
                }catch(error){
                  console.log(error);
                }
              }
      createcountries();


// // createweather(weather);
//      function createcountries(countries,weather){
//      console.log(countries);
//       countries.map((countrys) => {
//             document.body.innerHTML+=`
            
//             <div class="container">
//             <h2 class="name" id="${countrys.name.common}">
//             ${countrys.name.common}</h2>
//             <img src="${countrys.flags.svg}" alt="${countrys.name.common}"> 
//             <div class="content-container"><p>CAPITAL:${countrys.capital}</p>
//             <p>REGION:${countrys.region}</p>
//             <p>COUNTRYCODE:${countrys.car.cca2}</p>
//             <div>
//             <div id="${countrys.name.common}"></div>
//             ${countrys.latlng[0]},${countrys.latlng[1]}
//             <button onclick="createweather(${countrys.latlng[0]},${countrys.latlng[1]},${countrys.name.common})">weather</button>
//             </div>
//            </div>
//         </div>`       
//         });       
//      };
  
//       window.onload = async function createweather(lat,lan,id){
//         const weatherData =document.getElementById(id);
//         weatherData.innerHTML =`<h4>loading weather....</h4>`
//         try{
//           const res =await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=367261ea67167733e6e17d88b7110e22`
//           )
//           .then((data)=>data.json())
//           .then((weather)=>
//          document.weatherData.innerHTML=`<h1 class="display-4">${wdata.name}</h1>
//           `);
//         }catch(error){
//           console.log(error);
//         }
//       }

//     //  async function createweather(lat,lan){
     
//     //   try{
//     //     const res =await fetch(
//     //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lan}&appid=367261ea67167733e6e17d88b7110e22`
//     //     );
//     //     const wdata =await res.json();
//     //     console.log(wdata);
//     //     displayweather("hi");
//     //   }catch(error){
//     //     console.log(error);
//     //   }
//     //   function displayweather(id,data){

//     //     console.log(data);
       
//     //   }
//     // }
//   //   window.onload = function createweather(a,b,id){
//   //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=367261ea67167733e6e17d88b7110e22`)
//   //     .then((data)=>data.json())
//   //     // .then((weather)=>console.log(weather.main.temp))
//   //     .then((weather)=>    
//   //   document.getElementById(`${id}`).innerHTML = `<div>
//   //     <p class="lead">Weather:${weather.weather[0].description}</p>
//   // </div>`     
//   //   )}
//  fetch("https://restcountries.com/v3.1/all").then((data)=>data.json())

// .then((countries)=>createcountries(countries));











