var app = angular.module('reparteeFrames');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'CLZywhNOb86LSo2t3DZXGyJk9zrrzblNvWg26hK1', 'X-Parse-REST-API-Key': 'EsmHvPWp16KkjTDLhMjV1QA6ToeVVMXkeSErx9yo'}
      //Parse.initialize("CLZywhNOb86LSo2t3DZXGyJk9zrrzblNvWg26hK1", "EsmHvPWp16KkjTDLhMjV1QA6ToeVVMXkeSErx9yo");
      return config;
    }
  };
});
