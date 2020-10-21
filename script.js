/*
const url = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json";

const info = document.getElementById('clock');

fetch(url)
.then(clockResp => clockResp.json())
.then(clockData =>
{
    info.innerHTML = `Klockan<br><br>${clockData.datetime.substring(11,16)}`;
})
.catch(error => console.error('Error with API call ', error));
*/


const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElement = document.getElementById('error');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messages.push('Name is required')
            //document.write("\n");
            
    }

    if(password.value === ''|| password.value == null){
        messages.push('Please fill in Password')
    }

    if(email.value === '' || email.value == null){
        messages.push('Please fill in Email')
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(',')
    }
        
})