
 var sliderImages=document.getElementById('#s1')
 var arrowright=document.getElementById('#arrow-right')
var	arrowleft=document.getElementById('.arrow-left')
	var current=0;
	
	function reset()
	{
		for(var i=0;i<sliderImages.length();i++)
		{
			sliderImages[i].style.display='none';
		}
	}
	function startslide()
	{
		reset();
		sliderImages[0].style.display='block';
		current--;
	}
	//show Prev
	function slideleft()
	{
		reset();
		sliderImages[current-1].style.display='block';
		current--;
	}
	function slideright()
	{
		reset();
		sliderImages[current+1].style.display='block';
		current++;
	}
	//left arrow click
	arrowleft.addEventListener('click',function(){
		if(current==0){
			current=sliderImages.length;
		}
		slideleft();
	});
	arrowright.addEventListener('click',function(){
		if(current==sliderImages.length-1){
			current=-1;
		}
		slideright();
	});
	
	startslide();