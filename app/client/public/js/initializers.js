

let elem = document.querySelector('.sidenav');
let instance = new M.Sidenav(elem);
$(document).ready(function(){
$('.sidenav').sidenav();
});


document.addEventListener('DOMContentLoaded', function() {

	let elems = document.querySelectorAll('select');
	let instances = M.FormSelect.init(elems, {});
});