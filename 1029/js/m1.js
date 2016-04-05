(function($, window, document, undefined){

	var pic = $(".item");
	var big;
	var intime;
	pic.mouseenter(function(){
		var nowtime = new Date().getTime();
		
		if (!intime || nowtime - intime > 500){

			if ($(this).css("width") != "400px") {
				pic.each(function() {
						if ($(this).css("width") == "400px"){
							big = $(this);
						}
					});
					if (big.css("top") == "0px" && big.css("left") == "0px") {
						
						if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":200},500);
						}
						if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":200, "top":0},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
									$(this).animate({"left":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"top":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":0},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"width":200, "height": 200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400, "top":200},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									// $(this).animate({"top":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":0},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"top":200},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":200},500);
						}
					}


					if (big.css("top") == "0px" && big.css("left") == "200px"){
						if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "left":400},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400},500);
								}
							});
							$(this).animate({"width":400, "height":400},500);
						}
						if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "left":400, "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":0},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":0, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
									$(this).animate({"left":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"top":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":0, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400, "top":200},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									// $(this).animate({"top":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":0},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":0, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":0},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"top":200},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "200px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":200},500);
						}
					}


					if (big.css("top") == "200px" && big.css("left") == "0px"){
						if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":200},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "top":400},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"left":0},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":200},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":0},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
									$(this).animate({"left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"top":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":0},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400, "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									// $(this).animate({"top":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":0},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":0},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({"left":0, "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
									$(this).animate({"left":0},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "400px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "400px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":200},500);
						}
					}


					if (big.css("top") == "200px" && big.css("left") == "200px"){
						if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "left":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400},500);
								}
							});
							$(this).animate({"width":400, "height":400},500);
						}
						if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px") {
									$(this).animate({"width":200, "height": 200, "top":400, "left":400},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"left":400},500);
								}
							});
							$(this).animate({"width":400, "height":400, "top":200, "left":0},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
									$(this).animate({"left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"top":200},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									// $(this).animate({"left":400, "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
									$(this).animate({"top":200, "left":0},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400},500);
						}
						if ($(this).css("top") == "0px" && $(this).css("left") == "400px") {
							pic.each(function() {
								if ($(this).css("width") == "400px" ) {
									$(this).animate({"width":200, "height": 200, "top":400, "left":400},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "0px") {
									$(this).animate({ "top":200},500);
								}
								if ($(this).css("top") == "0px" && $(this).css("left") == "200px") {
									$(this).animate({ "left":0},500);
								}
								if ($(this).css("top") == "200px" && $(this).css("left") == "0px") {
									$(this).animate({"top":400},500);
								}
								if ($(this).css("top") == "400px" && $(this).css("left") == "0px") {
									$(this).animate({"left":200},500);
								}
							});
							$(this).animate({"width":400, "height":400, "left":200},500);
						}
					}
			
			}
			intime = nowtime;
		}
		else {
			intime = nowtime;
		}

	});

})(jQuery, window, document);