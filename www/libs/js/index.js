$(document).ready(function(){	
    //方法一
	// $(".title").addClass("style3");
	// $(".title").mouseover(function(){
	// 	$(this).toggleClass("style4");
	// });
	// $(".title").mouseout(function(){
	// 	$(this).toggleClass("style4");
	// 	$(this).addClass("style3");
	// });
	$(".title").addClass("style3");
	$(".title").hover(function(){
		$(this).addClass("style4");
	},function(){
		$(this).removeClass('style4')
		// $(this).addClass("style3");
	});
	//轮播图begin
	var oDiv = document.getElementById("key-center");
		var aBtn = oDiv.getElementsByTagName("input");
		var aDiv = oDiv.getElementsByTagName('div');
		var oL = document.getElementById("left");
		var oR = document.getElementById("right");
		let n = 0;
		var timer2;
		for(var i =0;i < aBtn.length; i++){
			(function(index){
				aBtn[index].onmouseenter = function(){
					timer2 = setTimeout(function(){
						clickBtn(index);
						n = index;
					},600);
				};
				aBtn[index].onmouseleave = function(){
					clearTimeout(timer2);
				}
			})(i);
		}
		oL.onclick = function(){
			if(n == 0){n = aBtn.length}
			n--;
		    clickBtn(n);
		};
		oR.onclick = function(){
			n++;
			if(n == aBtn.length){n = 0}
		    clickBtn(n);
		};
		function clickBtn(index){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				aDiv[i].className='';
			}
			aBtn[index].className="active";
			aDiv[index].className="active";
		}
		var timer;
		move();
		function move(){
			timer = setInterval(function(){
				n++;
				if(n==aBtn.length){n=0}
				clickBtn(n);
			},1000);
		}

		oDiv.onmouseenter = function(){
			clearInterval(timer);
		}
		oDiv.onmouseleave = function(){
			move();
		};
		//轮播图end
		$(".co li").hover(function(){
		   $(this).addClass("style1");
	    },function(){
		   $(this).removeClass('style1')
		// $(this).addClass("style3");
	    });
	    /*右边app 设计*/
	    $(".app li").hover(function(){
	    	$(this).addClass("style2");
	    },function(){
	    	$(this).removeClass("style2");
	    })
        /*热卖单品*/
        $(".list1>div").hover(function(){
	    	$(this).addClass("style7");
	    },function(){
	    	$(this).removeClass("style7");
	    })
        $(".list1>div .two").hover(function(){
	    	$(this).addClass("style7");
	    },function(){
	    	$(this).removeClass("style7");
	    })
});