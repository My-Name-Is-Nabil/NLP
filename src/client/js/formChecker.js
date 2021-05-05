function formChecker(inputText) {
    if (inputText.length < 15){
        document.querySelector('#article').classList.remove('success');
        document.querySelector('#article').classList.add('error');
        document.querySelector('.form__error-message').classList.add('show');
        return false;
    }
    else{
        document.querySelector('#article').classList.remove('error');
        document.querySelector('.form__error-message').classList.remove('show');
        return true;
    }
}

export { formChecker };
