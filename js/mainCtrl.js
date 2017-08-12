var app = angular.module('reparteeFrames');

app.controller('mainCtrl', function($scope, frameService, parseService){
	$scope.largeImg = "http://www.reparteegallery.com/ReparteeMoulding/rep100001.jpg"
	$scope.mouldingID = "REP100001"
	$scope.mouldingDescription = "1 1/4 X 4 1/4 Jefferson"
	$scope.mouldingFinish = "Heritage"
	$scope.retailPrice = "$4.54"
	// $scope.frames = frameService.getData();
	// $scope.frames = parseService.getAllData();
	// $scope.frames = parseService.getParseData();
	 $scope.frames = frameService.getData();
	//var myFrames = frames;
	//console.log($scope.frames)
	//console.log('1');
	//function getFrameData(){
		//parseService.getParseData().then(function(results){
		//$scope.frames = results.map(function(myframe){
		//return{
          //id: myframe.attributes.frameID,
          //width: myframe.attributes.width,
          //description: myframe.attributes.description,
          //finish: myframe.attributes.finish,
          //retail: myframe.attributes.retail,
          //img: myframe.attributes.img
        //}
       //})
      //})
    //};
	//console.log('2');
	//$scope.frames = myFrames;
	// $scope.frames = $scope.getFrameData();
	
	// $scope.parseData = parseService.doParse();
	$scope.showLargeImg = true;
	$scope.showThisImg = function(img, id, desc, finish, price){
		$scope.showLargeImg = true;
		$scope.largeImg = img;
		$scope.mouldingID = id
		$scope.mouldingDescription = desc
		$scope.mouldingFinish = finish
		$scope.retailPrice = price
	};
  	$scope.postData = function(){
		parseService.postData($scope.frames)
  	}
	  console.log('3');
});
