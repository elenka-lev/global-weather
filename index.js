import{i as c,a as l}from"./assets/vendor-DlDx-2bX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const h="https://api.openweathermap.org/geo/1.0/direct",d="25564df1c8dad9938ea89a52e68a0135",m="https://api.openweathermap.org/data/2.5/weather",g=document.querySelector(".weather-grid"),n=document.querySelector(".form");n.addEventListener("submit",async a=>{a.preventDefault();const e=n.elements.query.value.trim();if(e===""){c.error({title:"",message:"Please add city name!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}g.innerHTML="";try{await v(e)}catch(o){console.log(o),c.error({title:"",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}finally{n.reset()}});async function w(a){try{const e={appid:d,q:a,limit:1},o=await l.get(h,{params:e}),{lat:s,lon:t}=o.data[0];return{lat:s,lon:t}}catch(e){throw console.error("Ошибка получения координат:",e),e}}async function y({lat:a,lon:e}){try{return(await l.get(m,{params:{lat:a,lon:e,units:"metric",appid:d}})).data}catch(o){throw console.log(o),o}}async function v(a){try{const e=await w(a),o=await y(e);L(o)}catch(e){console.error("Ошибка при получении погоды для города:",e)}}function L(a){const{name:e,main:{temp:o},wind:{speed:s,deg:t},weather:[{description:r,icon:i}]}=a,p=document.querySelector(".weather-grid"),u=new Date().toLocaleDateString(),f=`<div class="wrapper">
            <section class="city">
                <div class="container">
                    <div class="city-info">
                        <ul class="today-main">
                            <li class="today-city">${e}</li>
                            <li class="today-date">${u}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="weather-info">
                <div class="container container-weather-info">
                    <div class="weather-wrap">
                        <ul class="weather-descr">
                            <li class="weather-degrees">${Math.round(o)} <span class="degrees">°C</span></li>
                            <li class="wind-speed">${s}<span class="speed"> km/h</span></li>
                            <li class="wind-direction">${t}°</li>
                        </ul>
                        <ul class="weather-forecast">
                            <li class="weather-icon">
                                <img src="http://openweathermap.org/img/wn/${i}@2x.png" alt="${r}" class="icon" width="240" height="240">
                            </li>
                            <li class="weather-condition">${r}</li>
                        </ul>
                    </div>
                </div>
             </section>
        </div>`;p.insertAdjacentHTML("beforeend",f)}
//# sourceMappingURL=index.js.map
