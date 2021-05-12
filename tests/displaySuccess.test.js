const { displaySuccess } = require('../src/client/js/displaySuccess');
test('Testing success displayer', () => {
    document.body.innerHTML = `
        <div id="article"></div>
    `;
    expect(() => displaySuccess()).not.toThrow();
});