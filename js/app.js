// JS for the site
// Event binder for main youtube video

$(".play-icon").click(function(){

	$("#hero-img-block").html('<div class="video-container"><iframe src="https://player.vimeo.com/video/119029890?title=0&byline=0&portrait=0" width="568" height="320" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');


});

$('#videoModal').on('hidden.bs.modal', function (e) {
  	
  	console.log("model hide event called");
	$("#modal-video").attr("src","");

})




// Starting Angular App 
var rgaApp = angular.module("rgaApp",['ngSanitize']);


rgaApp.controller("videoController", function($scope, $sce){


	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  	}


	$scope.currentVideo = "";
	$scope.videos = [

		{
			id:1,
			name:"Season 0: KTMA", 
			image:"images/bottom-imga2x.jpg",
			youtubeId:"Oo6iAxf4si0"
		},
		{
			id:2,	
			name:"Comedy Central - The Golden Years", 
			image:"images/bottom-imgb2x.jpg",
			youtubeId:"MtCMtC50gwY"
		},
		{
			id:3,
			name:"Sci-Fi, Crow's Voice, and Ram Chips", 
			image:"images/bottom-imgc2x.jpg",
			youtubeId:"58iT2L4VQj4"
		}
	];


	$scope.updateVideo = function(videoId){

		$scope.currentVideo = "https://www.youtube.com/embed/" + videoId;
		console.log(videoId);

	}

	$scope.removeVideo = function(){
		$scope.currentVideo = "";
	}


});