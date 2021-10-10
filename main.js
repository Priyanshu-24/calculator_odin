let digit0 = document.getElementById('zero')
let digit1 = document.getElementById('one')
let digit2 = document.getElementById('two')
let digit3 = document.getElementById('three')
let digit4 = document.getElementById('four')
let digit5 = document.getElementById('five')
let digit6 = document.getElementById('six')
let digit7 = document.getElementById('seven')
let digit8 = document.getElementById('eight')
let digit9 = document.getElementById('nine')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let times = document.getElementById('multiply')
let division = document.getElementById('divide')
let dot = document.getElementById('dot')
let equal = document.getElementById('equal')
let del = document.getElementById('del')
let clear = document.getElementById('clear')
let currentOperation = document.getElementById('currentOperation')
let lastOperation = document.getElementById('lastOperation')
let  lastResult = ''
let currentResult = ''
let rgex = /\./

digit0.addEventListener('mouseup', ()=> {
    currentResult += 0; 
    currentOperation.innerHTML = currentResult })
digit1.addEventListener('mouseup', ()=> {
    currentResult += 1; 
    currentOperation.innerHTML = currentResult})
digit2.addEventListener('mouseup', ()=> {
    currentResult += 2; 
    currentOperation.innerHTML = currentResult})
digit3.addEventListener('mouseup', ()=> {
    currentResult += 3;
    currentOperation.innerHTML = currentResult })
digit4.addEventListener('mouseup', ()=> {
    currentResult += 4;
    currentOperation.innerHTML = currentResult })
digit5.addEventListener('mouseup', ()=> {
    currentResult += 5; 
    currentOperation.innerHTML = currentResult})
digit6.addEventListener('mouseup', ()=> {
    currentResult += 6;
    currentOperation.innerHTML = currentResult })
digit7.addEventListener('mouseup', ()=> {
    currentResult += 7;
    currentOperation.innerHTML = currentResult })
digit8.addEventListener('mouseup', ()=> {
    currentResult += 8;
    currentOperation.innerHTML = currentResult })
digit9.addEventListener('mouseup', ()=> {
    currentResult += 9;
    currentOperation.innerHTML = currentResult })
dot.addEventListener('mouseup', ()=> {
    if(!rgex.test(currentResult)){
        currentResult += '.';
        currentOperation.innerHTML = currentResult 
    }})
del.addEventListener('mouseup', ()=> {
    remove()
    currentOperation.innerHTML = currentResult
} )
plus.addEventListener('mouseup', ()=> {
        add()
    
} )
minus.addEventListener('mouseup', () =>{
    subtract()
})
division.addEventListener('mouseup', () =>{
    divide()
})
times.addEventListener('mouseup', () =>{
    multiply()
})
clear.addEventListener('mouseup', ()=> {
    currentResult = ''
    lastResult = ''
    currentOperation.innerHTML = '0'
    lastOperation.innerHTML = ''
} )
equal.addEventListener('mouseup', ()=>{
    if(lastOperation.innerHTML.slice(-1) == '+' && currentResult !=''){ 
        lastOperation.innerHTML = `${lastResult} + ${currentOperation.innerHTML} =`
        if(lastResult!= '' && currentResult!= ''){
            currentResult = parseFloat(lastResult) + parseFloat(currentResult)
            currentOperation.innerHTML = currentResult
        }
        lastResult = currentResult
        currentResult = ''
    }else if(lastOperation.innerHTML.slice(-1) == '-' && currentResult !=''){ 
        lastOperation.innerHTML = `${lastResult} - ${currentOperation.innerHTML} =`
        if(lastResult!= '' && currentResult!= ''){
            currentResult = parseFloat(lastResult) - parseFloat(currentResult)
            currentOperation.innerHTML = currentResult
        }
        lastResult = currentResult
        currentResult = ''
    }else if(lastOperation.innerHTML.slice(-1) == 'x' && currentResult !=''){ 
        lastOperation.innerHTML = `${lastResult} x ${currentOperation.innerHTML} =`
        if(lastResult!= '' && currentResult!= ''){
            currentResult = parseFloat(lastResult) * parseFloat(currentResult)
            currentOperation.innerHTML = currentResult
        }
        lastResult = currentResult
        currentResult = ''
    }else if(lastOperation.innerHTML.slice(-1) == '÷' && currentResult !='' &&currentResult != '0'){ 
        lastOperation.innerHTML = `${lastResult} ÷ ${currentOperation.innerHTML} =`
        if(lastResult!= '' && currentResult!= ''){
            currentResult = parseFloat(lastResult)/parseFloat(currentResult)
            currentOperation.innerHTML = currentResult
        }
        lastResult = currentResult
        currentResult = ''
    }
})

function add(){
    if(lastResult == ''||  lastOperation.innerHTML.slice(-1) == '+'){
        lastOperation.innerHTML = currentResult + ' +'
    }else if(lastResult!= '' && lastOperation.innerHTML.slice(-1) == '=' ){
        lastOperation.innerHTML = lastResult + ' +'
    }
    if(lastResult!= '' && currentResult!= ''){
        currentResult = parseFloat(lastResult) + parseFloat(currentResult)
        lastOperation.innerHTML = `${currentResult} +`
        currentOperation.innerHTML = currentResult
    }
    if(currentResult != ''){lastResult = currentResult}
    currentResult = ''
}
//      // Subtract function //         //          
function subtract(){
    if(lastResult == ''||  lastOperation.innerHTML.slice(-1) == '-'){
        lastOperation.innerHTML = currentResult + ' -'
    }else if(lastResult!= '' && lastOperation.innerHTML.slice(-1) == '=' ){
        lastOperation.innerHTML = lastResult + ' -'
    }
    if(lastResult!= '' && currentResult!= ''){
        currentResult = parseFloat(lastResult) - parseFloat(currentResult)
        lastOperation.innerHTML = `${currentResult} -`
        currentOperation.innerHTML = currentResult
    }
    if(currentResult != ''){lastResult = currentResult}
    currentResult = ''
}
function multiply(){
    if(lastResult == ''||  lastOperation.innerHTML.slice(-1) == 'x'){
        lastOperation.innerHTML = currentResult + ' x'
    }else if(lastResult!= '' && lastOperation.innerHTML.slice(-1) == '=' ){
        lastOperation.innerHTML = lastResult + ' x'
    }
    if(lastResult!= '' && currentResult!= ''){
        currentResult = parseFloat(lastResult) * parseFloat(currentResult)
        lastOperation.innerHTML = `${currentResult} x`
        currentOperation.innerHTML = currentResult
    }
    if(currentResult != ''){lastResult = currentResult}
    currentResult = ''
}
function divide(){
    if(lastResult == ''||  lastOperation.innerHTML.slice(-1) == '÷'){
        lastOperation.innerHTML = currentResult + ' ÷'
    }else if(lastResult!= '' && lastOperation.innerHTML.slice(-1) == '=' ){
        lastOperation.innerHTML = lastResult + ' ÷'
    }
    if(lastResult!= '' && currentResult!= '' && currentResult !='0'){
        currentResult = parseFloat(lastResult)/parseFloat(currentResult)
        lastOperation.innerHTML = `${currentResult} `
        currentOperation.innerHTML = currentResult
    }
    if(currentResult != ''){lastResult = currentResult}
    currentResult = ''
}
function remove(){
    if(currentResult.slice(-1)=='.'){
        currentResult = currentResult.slice(0,-2) 
    }else {
        currentResult = currentResult.slice(0,-1) 
    }
}