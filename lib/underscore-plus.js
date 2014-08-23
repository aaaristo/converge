var _= require('underscore');

module.exports= exports= _;

exports.sum= function (arr)
{
   return _.reduce(arr, function(memo, num){ return memo + num; }, 0);
};

exports.allKeys= function (a,b)
{
   return _.union(_.keys(a),_.keys(b));
};
