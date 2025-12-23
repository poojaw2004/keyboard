document.body.addEventListener('keydown', function(event) {
    
    let key = document.querySelector('.' + event.key.toUpperCase());
    

    if(key) {
        key.style.backgroundColor = 'pink';
        key.style.color = 'white';
    }

    if(event.key === "Space") document.querySelector('.SPACE').style.backgroundColor = 'black';
    if(event.key === "Enter") document.querySelector('.ENTER').style.backgroundColor = 'black';
    if(event.key === "Backspace") document.querySelector('.BACKSPACE').style.backgroundColor = 'black';
    if(event.key === "Shift") document.querySelector('.SHIFT').style.backgroundColor = 'black';
    if(event.key === "Tab") document.querySelector('.TAB').style.backgroundColor = 'black';
    if(event.key === "Ctrl") document.querySelector('.CTRL').style.backgroundColor = 'black';
    if(event.key === "Alt") document.querySelector('.ALT').style.backgroundColor = 'black';

});



document.body.addEventListener('keyup', function(event){

    let key = document.querySelector('.' + event.key.toUpperCase());

if(key){
        key.style.backgroundColor = 'white';
        key.style.color = 'black';
    };

    if(event.key == "Space") document.querySelector('.SPACE').style.backgroundColor = 'black';
    if(event.key == "Enter") document.querySelector('.ENTER').style.backgroundColor = 'black';
    if(event.key == "Backspace") document.querySelector('.BACKSPACE').style.backgroundColor = 'black';
    if(event.key == "Shift") document.querySelector('.SHIFT').style.backgroundColor = 'black';
    if(event.key == "Tab") document.querySelector('.TAB').style.backgroundColor = 'black';
    if(event.key === "Ctrl") document.querySelector('.CTRL').style.backgroundColor = 'black';
    if(event.key === "Alt") document.querySelector('.ALT').style.backgroundColor = 'black';


});

    let s = document.getElementById("texts");

    document.body.addEventListener('click', function(event){


        if(event.target.tagName === "BUTTON"){

            let value = event.target.innerText;

            if(value == "SPACE") value = " ";

            if(value == "ENTER") value = "\n";

            if(value === "BACKSPACE") {
                screen.value = screen.value.slice(0, -1);
                return;
            }
                s.value += value;
        }
    });