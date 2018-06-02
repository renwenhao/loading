$(function(){
	var per = 0;
	var timer = setInterval(function(){
		$('.progressBar').css('width',per+'%');
		if(per > 100){
			$('.pageLoading').addClass('complete');
			clearInterval(timer);
		}else{
			per+=1;
		}
	},30);
})