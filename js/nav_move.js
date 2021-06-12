let link = 1;
let cJudge = 1;
let open_judge = -1, child_judge = false, child_open = false, open_name;

document.addEventListener('DOMContentLoaded', function(){
 	let start_pos = 0;
 	window.addEventListener('scroll', function(e){
	    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      	let current_pos =scrollTop;
      	const eleNav = document.querySelector(".nav");
      	const eleblur = document.querySelector('.blur');

 	   	eleNav.classList.remove('down', 'up'); // navを消去
    	if (current_pos > start_pos) eleNav.classList.add('down'); // 画面が下がっている
      	else　eleNav.classList.add('up');						   // 画面が上がっている
 		// link = 1;											   // link類はすべて隠れた
      	start_pos = current_pos;								   // 高さ情報を更新
  	});
});
