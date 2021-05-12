document.body.innerHTML = `
<input id="article">
<div class="form__error-message"></div>
`;
const { formChecker } = require("../src/client/js/formChecker");
test('Testing form checker', () => {

    expect(formChecker('This is an example of an article that exceeds 15 characters')).toBe(true);
    expect(formChecker('short article')).toBe(false);
});