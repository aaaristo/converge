var should= require('chai').should(),
    assert= require('chai').assert;

var gcounter= require('..')('g-counter');

describe('g-counter',function ()
{
       it('can be only incremented',function ()
       {
          var g= gcounter();
          
          gcounter.increment(g,'andrea',2);
          gcounter.increment(g,'andrea',-1);

          gcounter.value(g).should.equal(2);
       });

});
