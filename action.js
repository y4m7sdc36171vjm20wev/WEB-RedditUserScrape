let accounts = [];

let dataHold = document.createElement("textarea");
dataHold.style.position = "fixed";
dataHold.style.width = "300px";
dataHold.style.height = "300px";
dataHold.style.bottom = "0px";
dataHold.style.right = "0px";
dataHold.style.zIndex = "9999";
dataHold.classList.add("dataHold");

document.body.appendChild(dataHold);

setInterval(()=>{

let AddNames = () =>{
    Array.from(document.querySelectorAll("a[href*='/user/']")).forEach((val)=>{
        if(val.innerText.includes("u/")){
            if(!accounts.includes(val.innerText)){
                accounts.push(val.innerText);
            }
        }
    });
}

AddNames();

document.getElementsByClassName("dataHold")[0].value = accounts.join("\n");
},1000);
