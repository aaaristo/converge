var gcounter= require('./g-counter');

module.exports= exports= function ()
{
   return { p: gcounter(),
            n: gcounter() };
};

exports.increment= function (counter,actor,val)
{
   if (val>0)
     gcounter.increment(counter.p,actor,val);
   else
   if (val<0)
     gcounter.increment(counter.n,actor,-val);

   return counter;
};

exports.merge= function (a,b)
{
   return { p: gcounter.merge(a.p,b.p),
            n: gcounter.merge(a.n,b.n) };
};

exports.value= function (counter)
{
   return gcounter.value(counter.p)-gcounter.value(counter.n);
};

