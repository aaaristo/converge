var _= require('./underscore-plus');

module.exports= exports= function ()
{
   return {};
};

exports.increment= function (counter,actor,val)
{
   if (val > 0)
     counter[actor]= (counter[actor] || 0) + val; 

   return counter;
};

exports.merge= function (a,b)
{
    var merged= {};

    _.allKeys(a, b).forEach(function(actor)
    {
       merged[actor]= Math.max(a[actor]||0, b[actor]||0);
    });
   
    return merged;
};

exports.value= function (counter)
{
   return _.sum(_.values(counter));
};

