// My Custom js
console.log('a');

	var btn = document.getElementById('subBtn');
	
	btn.addEventListener('click', removeDefault, false);
	

	function removeDefault(event){
		event.preventDefault();
	}

	