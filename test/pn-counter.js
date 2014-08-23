var should= require('chai').should(),
    assert= require('chai').assert;

var pncounter= require('..')('pn-counter');

describe('pn-counter',function ()
{
       it('can be incremented and decremented',function ()
       {
          var pn= pncounter();
          
          pncounter.increment(pn,'andrea',2);
          pncounter.increment(pn,'andrea',-1);

          pncounter.value(pn).should.equal(1);
       });

});
