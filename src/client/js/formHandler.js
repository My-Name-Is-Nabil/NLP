import { displaySuccess } from './displaySuccess';
import { formChecker } from './formChecker';
import { handleResponse } from './handleResponse';
function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let article = document.getElementById('article').value;
    let processor = document.getElementById('processors').value;
    const success = formChecker(article);
    if (success){
        fetch('http://localhost:8081/api', {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'article': article,
                'processor': processor
            })
        })
        .then(res => res.json() , err => {
            console.log(err);
            document.querySelector('.result__response').innerHTML = 'Error retrieving response, try again later';
        })
        .then(function(res) {
            console.log(res);
            if (res.status.code == 0 ){
                displaySuccess();
                handleResponse(res);
            }
        } , err =>{
            console.log(err);
            document.querySelector('.result__response').innerHTML = 'Error retrieving response, try again later';
        });
    }
}

document.querySelector('.form').addEventListener('submit',handleSubmit);

export { handleSubmit };
