//1. 請先安裝 npm install -g mocha
//2. mocha app.js (不是node app.js)

var assert = require('assert');
describe('階層A', function() {
    describe('階層B', function() {

        it('檢查點A', function() {
            assert.equal("1", "1");
        });

        it('檢查點B', function() {
            assert.equal("1", "2");
        });

        it('檢查點C 兩項檢查', function() {
            assert.equal("2", "2");
            assert.equal("2", "2");
        });

        it('非同步件檢查', function(down) {
            setTimeout(function() {
                down();
            }, 1000);
        });

    });
});
