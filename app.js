let count = 0;

let value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach((sing)=>{
  sing.addEventListener('click',(e)=>{
    let elem = e.currentTarget.classList
    if(elem.contains('increase')){
              count++
            
            }
            else if(elem.contains('decrease')){
                count--
               
            }
            else if(elem.contains('reset')){
                count=0;
               
            }
            if(count>0){
              value.style.color = 'green'   
            }
            else if(count<0){
                value.style.color = 'red'   
              }
             else if(count==0){
                value.style.color = 'black'   
              }
            value.textContent=count
          })
  })


// OR PLAIN JAVASCRIPT METHOD WORKS TOO


// let counterVal = document.getElementById('value')
// let btnDecrease = document.getElementById('decrease')
// let btnReset = document.getElementById('reset')
// let btnIncrease = document.getElementById('increase')


// btnIncrease.addEventListener('click',()=>{
   
//    counterVal.innerHTML++
   
// })
// btnDecrease.addEventListener('click',()=>{
//     if(counterVal.innerHTML == count){
//         return
//     }
//     counterVal.innerHTML--
    
//  })
//  btnReset.addEventListener('click',()=>{
//     counterVal.innerHTML = '0'
    
//  })