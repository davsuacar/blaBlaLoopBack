module.exports = function(Car) {

  Car.myLicensePlate = function(numberPlate, callback){
    console.log(arguments);
    callback(null, 'This is my Number Plate ' + numberPlate);
  };

  Car.remoteMethod(
    'myLicensePlate',
    {
      accept: {arg: 'numberPlate', type: 'string'},
      returns: {arg: 'numberPlate', type: 'string'},
      http: {path: '/license', verb: 'get'}
    }
  )
};
