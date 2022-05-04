
const init =() => {
const validateEmail = (Event) =>{
    const input = Event.currentTarget;
    const regex =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    const emailTest = regex.test(input.value);

    if(!emailTest) {
        submitButton.setAttribute('disabled','disabled');
        input.nextElementSibling.classList.add('error');
    }else {
        submitButton.setAttribute('disablad');
        input.nextElementSibling.classList.remove('error');
    }
}

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    inputEmail.addEventListener('input, validateEmail');

    if(submitButton){
        submitButton.addEventListener('click', (Event) => {
            Event.preventDefault();

            fetch('https://reqres.in/api/login',{
                method:"POST",
                headers:{
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:inputEmail.Value,
                    password:inputPassword.Value,
                })
            }).then((Response) =>{
                return Response.json();

            }).then((data) =>{
                console.log(data)
            })
            
        })
    }
}

window.onload = int;