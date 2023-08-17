function  easy(pais){
     return  new Promise((res,rej)=>
        setTimeout(()=>{
            if (pais === 'mexico'){
                res(`Has seleccionado  ${pais}`)
            } else { rej(`No has  seleccionado  Mexcio  .Si no  que haz  seleccionado a ${pais}`)}
        }, 1000);
        )
};  

easy('mexico')
.then(resultado =>{
    console.log(resultado)
})
.catch(error =>{
    console.log(error)
});