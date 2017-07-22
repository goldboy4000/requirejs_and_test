var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

describe('app', function () {

    before(function (done) {
        require(['app', '../test/mocks/mockRadio', '../test/mocks/mockFb'], function (app, radio, fb) {
            module = app;
            this.radio = radio;
            this.fb = fb;
            done();
        }.bind(this));
    });

    it('should be called init method', function () {
        module.init();
    });

    it('should be called fb.init method once', function () {
        var fbInitSpy = sinon.spy(this.fb, 'init');
        module.init();
        sinon.assert.calledOnce(fbInitSpy);
    });


});