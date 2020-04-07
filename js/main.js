// CHOOSING DOM ELEMENTS :-
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

//OPERATIONS FOR SHOWING TIME :-
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // OPERATIONS OF AM OR PM  :-

    const amPm = hour >=12 ? 'PM' :'AM';

    // 12 HOUR FORMAT OPERATIONS :-
    hour = hour % 12 || 12;
    
    //OUTPUT THE TIME

    time.innerHTML  = `${hour}<span>:</span>${addZero(min)}  ${amPm}`;
    setTimeout(showTime,1000);
}

function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '')+n;
}

// SET BACKGROUND AND GREETING
    function setBggreet(){
        let today = new Date(),
        hour = today.getHours();
        
        if(hour < 12){
            //MORNING
            document.body.style.backgroundImage = "url('img/morning.jpg')";
            greeting.textContent = 'Good Morning';
        }
        else if(hour <18) {
            //AFTERNOON
            document.body.style.backgroundImage = "url('img/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';
        }
        else{
            //EVENING
            document.body.style.backgroundImage = "url('img/evening.jpg')";
            greeting.textContent = 'Good Evening';
            document.body.style.color = 'white';
        }

    }

    // GET NAME
    function getName(){
        if(localStorage.getItem('name')=== null){
            name.textContent = 'Pratik';
        }
        else{
            name.textContent = localStorage.getItem('name'); 
        }
    }

    //SET NAME
    function setName(e){
        if(e.type === 'keypress'){
            // MAKE SURE ENTER IS PRESSED
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem('name',e.target.innerText);
                name.blur();
            }

        }else{
            localStorage.setItem('name',e.target.innerText);
        }
    }

      // GET FOCUS
      function getFocus(){
        if(localStorage.getItem('focus')=== null){
            focus.textContent ='Enter focus';
        }
        else{
            focus.textContent = localStorage.getItem('focus'); 
        }
    }

    //SET FOCUS
    function setFocus(e){
        if(e.type === 'keypress'){
            // MAKE SURE ENTER IS PRESSED
            if(e.which == 13 || e.keyCode == 13){
                localStorage.setItem('focus',e.target.innerText);
                focus.blur();
            }

        }else{
            localStorage.setItem('focus',e.target.innerText);
        }
    }

    name.addEventListener('keypress',setName);
    name.addEventListener('blur',setName);
    focus.addEventListener('keypress' , setFocus);
    focus.addEventListener('blur' , setFocus);
    


//RUN
showTime();
setBggreet();
getName();
getFocus();