module.exports = function(Car) {

  Car.myLicensePlate = function(numberPlate, callback){
    console.log(arguments);
    callback(null, 'This is my Number Plate ' + numberPlate);
  };

  Car.remoteMethod(
    'myLicensePlate',
    {
      description: 'License Plate Service',
      accepts: {arg: 'numberPlate', type: 'number', http: {source: 'query'}, description: 'License Plate'},
      returns: {arg: 'numberPlate', type: 'string'},
      http: {path: '/license', verb: 'get'}
    }
  )
};
