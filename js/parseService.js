var app = angular.module('reparteeFrames');

app.service('parseService', function($http, $q){
  
  //postData method here
  this.postData = function(obj){
      $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/Moulding.json',
      data: obj
    }).then(function(){
      return obj});
  };
  
  //getData method here

this.getParseData = function() {
    var defer = $q.defer();
    Parse.initialize("CLZywhNOb86LSo2t3DZXGyJk9zrrzblNvWg26hK1", "EsmHvPWp16KkjTDLhMjV1QA6ToeVVMXkeSErx9yo");    
    var reparteeFramesArray = Parse.Object.extend("reparteeFramesArray")
    var queryObject = new Parse.Query(reparteeFramesArray)
    queryObject.limit(1000)
    queryObject.find({
      success: function (results) {
        var myFrames = results
          console.log(myFrames);
        defer.resolve(myFrames);
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }  });  
    return defer.promise;  
  }
  
  this.doParse = function(){
    //   debugger;
    //    Parse.initialize("CLZywhNOb86LSo2t3DZXGyJk9zrrzblNvWg26hK1", "EsmHvPWp16KkjTDLhMjV1QA6ToeVVMXkeSErx9yo");    
    //    var TestObject = Parse.Object.extend("mouldingArray");
    //    var testObject = new TestObject();
    //    testObject.save({frame: "REP181000"}, {
    //    success: function(object) {
    //    // $(".success").show();
    //    }
    // }).then(function(){
    //   return(testObject)
    // });
  };
})
