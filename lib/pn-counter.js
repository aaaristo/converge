var gcounter= require('./g-counter');

module.exports= exports= function ()
{
   return { i: gcounter(),
            d: gcounter() };
};

exports.increment= function (counter,actor,val)
{
   if (val>0)
     gcounter.increment(counter.i,actor,val);
   else
   if (val<0)
     gcounter.increment(counter.d,actor,-val);

   return counter;
};

exports.merge= function (a,b)
{
   return { i: gcounter.merge(a.i,b.i),
            d: gcounter.merge(a.d,b.d) };
};

exports.value= function (counter)
{
   return gcounter.value(counter.i)-gcounter.value(counter.d);
};

