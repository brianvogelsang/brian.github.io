function getIndex() {
    var indexButton = document.getElementById('indexButton');
    indexButton.style.display ='none';
    
    var fizzButton = document.getElementById('fizzButton');
    fizzButton.style.display ='block';
    
    var p = document.getElementById('printOut');
    
    var i;
    
    for (i=1;i<101;i++){
    p.innerHTML = p.innerHTML + '<p>Index: ' +i+ '</p>' ;
    }
}


function getFizz() {
    var buzzButton = document.getElementById('buzzButton');
    buzzButton.style.display='block';
    
     var fizzButton = document.getElementById('fizzButton');
    fizzButton.style.display='none';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++){
    c = i;   
        
    if (c % 3 === 0){c = 'Fizz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
        
    }
}


function getBuzz() {
    var buzzButton = document.getElementById('buzzButton');
    buzzButton.style.display='none';
    
     var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    fizzBuzzButton.style.display='block';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++){
    c = i;   
    
    //if (c % 3 === 0){c = 'Fizz'};    
    if (c % 5 === 0){c = 'Buzz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
        
    }
}


 function getFizzBuzz() {
 var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    fizzBuzzButton.style.display='none';
 var resetButton = document.getElementById('resetButton');
    resetButton.style.display='block';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++){
        
    c = i;   
    
       
    if (c % 3 === 0  &&  c % 5 === 0 ) {c = 'FizzBuzz'};    
    if (c % 3 === 0){c = 'Fizz'};    
    if (c % 5 === 0){c = 'Buzz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
     
    }
 }

function reset() {
    location.reload();
}


