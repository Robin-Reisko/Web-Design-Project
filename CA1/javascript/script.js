console.log('hello');


//sends all form information to the console 
var form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault()  //prevents the form from auto submiting 

    var fName = document.getElementById('fName').value;

    console.log(fName);

    var lName = document.getElementById('lName').value;

    console.log(lName);

    var email = document.getElementById('Email').value;

console.log(email);

var checkbox = document.getElementById('subscribe').checked;

console.log(checkbox);

});

//on submition create account is hidden
function toggle() {
    var x = document.getElementById('form');

    var y = document.getElementById('accountCreated');


    if (x.style.display === 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
        document.getElementById('accountCreated').innerHTML = 'Account created';

    }
}
