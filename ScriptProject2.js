const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke")
const apiKey="XWDN8y9X+4AVJRje9EigKg==1uwuuV6Ta8vHPiA2";
const options={
    method: "GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke()
{   
    try{

    jokeEl.innerText="Updating...";
    btnEl.disabled=true;
    btnEl.innerText="Loading";
    const response= await fetch(apiURL,options);
    const data=await response.json();
    btnEl.disabled=false;
    btnEl.innerText="TELL ME A JOKE";
    jokeEl.innerText=data[0].joke
    } catch(error){
        jokeEl.innerText="AN ERROR HAPPENED,CHECK INTERNET CONNECTIVITY"
        btnEl.innerText="TRY AGAIN"
    }
}


btnEl.addEventListener("click",getJoke);