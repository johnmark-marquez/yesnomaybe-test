(function() {

	var body = document.querySelector('body');

	document.addEventListener('keypress', function(e) {
		if (e.keyCode == 13) {
			document.querySelector('textarea').value = '';
			body.classList.toggle('active');
		}
	});
	
})();