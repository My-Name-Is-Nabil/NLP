document.body.innerHTML = `
<div class="result__response"></div>
`;
const { handleResponse } = require('../src/client/js/handleResponse');
const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
const data =  {
    "status": {
      "code": "0",
      "msg": "OK",
      "credits": "24"
    },
    "summary": `Star Trek is an American science fiction entertainment franchise based on the television series created by Gene Roddenberry.
      The first television series, simply called Star Trek and now referred to as The Original Series, debuted in 1966 and aired for three seasons on the television network NBC.
      ...`
}

test('Testing response handler', () => {
    expect(handleResponse(data)).toMatch(/^Summary: /);
    expect(handleResponse(data)).toBe(document.querySelector('.result__response').innerHTML);
    expect(() => handleResponse(data)).not.toThrow();
})