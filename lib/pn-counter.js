var gcounter= require('./g-counter');

var pncounter= module.exports= exports= function ()
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
   if (Array.isArray(a))
   {
      var merged= pncounter();

      a.forEach(function (counter)
      {
          merged= pncounter.merge(merged,counter);
      });

      return merged;
   }
   else
     return { p: gcounter.merge(a.p,b.p),
              n: gcounter.merge(a.n,b.n) };
};

exports.value= function (counter)
{
   return gcounter.value(counter.p)-gcounter.value(counter.n);
};

