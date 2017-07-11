	(function(win,doc){
		function change(){
			doc.documentElement.style.fontSize = 100/320 * doc.documentElement.clientWidth + 'px';
		}
		change();
		win.addEventListener('resize',change,false);
	})(window,document);