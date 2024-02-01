//Nav Bar js
function show(){
    document.getElementById('sidebar').classList.toggle('active');
}
//new

var rowData = document.getElementById('rowData');
var xhr = new XMLHttpRequest ();


xhr.open('GET', 'https://themealdb.com/api/json/v1/1/filter.php?c=beef');
xhr.send();


xhr.addEventListener('readystatechange' , function(){
    if(xhr.readyState=== 4 && xhr.status== 200){
        var res= JSON.parse(xhr.response);
        displayData(res.meals)
        console.log(res);
    }
})

function displayData(data){

    var divs="";
    for(var i=0; i<data.length ; i++){

        divs+=`    <div class="col-md-3">
        <div class="item imgs">
                    <img class="w-100 rounded-3 categoryimages " src="${data[i].strMealThumb}">
                        <h2 class="h6 text text-black ">${data[i].strMeal}</h2>


        
        </div>
    </div>`
    }


  rowData.innerHTML= divs;
}




























//contactus js

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const ageValue = age.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Special characters and numbers not allowed');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if(phoneValue === '') {
        setError(phone, 'Enter Valid phone number');
    } else {
        setSuccess(phone);
    }
    if(ageValue === '') {
        setError(age, 'Enter valid age');
    } else {
        setSuccess(age);
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};














