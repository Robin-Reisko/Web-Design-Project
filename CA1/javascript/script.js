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

var checkbox = document.getElementById('subscribe').value;

console.log(checkbox);

});

function toggle() {
    var x = document.getElementById('form');

    if (x.style.display === 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}
