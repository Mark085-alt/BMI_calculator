const main = document.querySelector('#main');
const button = document.querySelector('#button');

button.addEventListener('click',function(e){
    // e.preventDefault();
    
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#result');
    const note = document.querySelector('#note');

    if(h === '' || h === 0 || isNaN(h)){
        res.innerHTML = 'Enter a valid height';
    }

    if(w === '' || w === 0 || isNaN(w)){
        res.innerHTML = 'Enter a valid weight';
    }

    const total = ((w/(h*h))*10000).toFixed(2);

    res.innerHTML = `${total}`;

    if(total<18.6){
        note.innerHTML = `You are Under-Weight`;
    }

    else if(total>18.6 && total<24.9){
        note.innerHTML = `You are Normal Weighted`;
    }

    else{
        note.innerHTML = `You are Over-Weight`;
    }

    

})