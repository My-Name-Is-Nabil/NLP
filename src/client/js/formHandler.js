import { displaySuccess } from './displaySuccess';
import { formChecker } from './formChecker';
function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('article').value;
    const success = formChecker(formText);
    if (success){
        fetch('http://localhost:8081/api')
        .then(res => {
            displaySuccess();
            return res.json();
        }, err => console.log(err))
        .then(function(res) {
            console.log(res);
            document.querySelector('.result__response').innerHTML = res.message;
        } , err => console.log(err));
    }
}

document.querySelector('.form').addEventListener('submit',handleSubmit);

export { handleSubmit };
