const result=document.querySelector('.result')
const btn =document.querySelectorAll(".button")


let expression="";



btn.forEach(e => {
    e.addEventListener("click",()=>{
       const value = e.innerText;
       
       if(value ==="Enter"){
        try{
        const final =eval(expression);
        result .innerText = final;
        expression = final.toString();
       } catch(e){
        result.innerText="Error";
        expression ="";
       }
    }
    else if(value==="C"){
        expression = "";
        result.innerText = "";
    }
    else{
        expression+=value;
        result.innerText=expression;
    }
    
    
        

    })
});


