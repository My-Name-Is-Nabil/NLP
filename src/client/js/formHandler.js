import { displaySuccess } from './displaySuccess';
import { formChecker } from './formChecker';
function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let article = document.getElementById('article').value;
    let processor = document.getElementById('processers').value;
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
        .then(res => res.json() , err => console.log(err))
        .then(function(res) {
            console.log(res);
            if (res.status.code == 0 ){
                displaySuccess();
            }
            document.querySelector('.result__response').innerHTML = res.message;
        } , err => console.log(err));
    }
}

document.querySelector('.form').addEventListener('submit',handleSubmit);

export { handleSubmit };
