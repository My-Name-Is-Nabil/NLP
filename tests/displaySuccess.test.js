document.body.innerHTML = `
    <input id="article">
`;
const { displaySuccess } = require('../src/client/js/displaySuccess');
test('Testing success displayer', () => {

    expect(() => displaySuccess()).not.toThrow();
});