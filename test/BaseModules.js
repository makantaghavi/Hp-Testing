var assert = require('assert');
var calc = require("hp/nodes/BaseModules");


describe ('test add', function(){
    
    
    it ('should add 2+3=5', function(done){
        var I1 = calc.Add.procfn({i1:2, i2: 3});
        var I2 = calc.Add.procfn.ports.sum (4);
        assert.equal(I1,);
        done();
    });
    

});




