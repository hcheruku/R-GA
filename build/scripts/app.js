$(".play-icon").click(function(){$("#hero-img-block").html('<div class="video-container"><iframe src="https://player.vimeo.com/video/119029890?title=0&byline=0&portrait=0" width="568" height="320" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>')}),$("#videoModal").on("hidden.bs.modal",function(e){$("#modal-video").attr("src","")});var rgaApp=angular.module("rgaApp",["ngSanitize"]);rgaApp.controller("videoController",function(e,o){e.trustSrc=function(e){return o.trustAsResourceUrl(e)},e.currentVideo="",e.videos=[{id:1,name:"Season 0 KTMA",image:"images/bottom-imga2x.jpg",youtubeId:"Oo6iAxf4si0"},{id:2,name:"Comedy Central The Golden Years",image:"images/bottom-imgb2x.jpg",youtubeId:"MtCMtC50gwY"},{id:3,name:"Sci-Fi, Crow's Voice, and Ram Chips",image:"images/bottom-imgc2x.jpg",youtubeId:"58iT2L4VQj4"}],e.updateVideo=function(o){e.currentVideo="https://www.youtube.com/embed/"+o},e.removeVideo=function(){e.currentVideo=""}});