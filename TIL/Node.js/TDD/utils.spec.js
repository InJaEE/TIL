// spec이 들어가있으면 테스트 코드

const utils = require('./utils');
const should = require('should');

// dscribe: 테스트의 범위(테스트 수트)
// it: 단위 테스트(테스트 케이스)
describe('utils.js 모듈은 capitialize() 함수는 ', () => {
    it('(1)문자열의 첫번째 문자를 대문자로 변환한다.',  () => {
        const result = utils.capitialize('Hello');
        result.should.be.equal('Hello');
    });
    
    it('(2)문자열의 첫번째 문자를 대문자로 변환한다.',  () => {
        const result = utils.capitialize('Hello');
        result.should.be.equal('hello');
    });
});