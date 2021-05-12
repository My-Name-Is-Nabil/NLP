document.body.innerHTML = `
<form class="form"> </form>
<input id="article" value="short article">
<div id="processors"></div>
<div class="form__error-message"></div>
`;
const { handleSubmit } = require('../src/client/js/formHandler');
console.log(handleSubmit);
test('Testing form handler', () => {
    expect(() => handleSubmit({ preventDefault: function(){}})).not.toThrow();
});