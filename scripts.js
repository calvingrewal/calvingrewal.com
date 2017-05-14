//$(document).scroll( function() {
//	var top = $(document).scrollTop();
//	
//	$('#hero h1').css('bottom',top/6);
//	$('#hero h1').css('right',top/4);
//	
//	$('#hero h2').css('bottom',top/4);
//	$('#hero h2').css('left',top/4);
//
//});
//

	var distances = {
		hero: document.getElementById('hero'),
		skills: document.getElementById('skills'),
		projects: document.getElementById('projects'),
		contact: document.getElementById('contact')
	};
	var icons = {
		hero: '.fa-home',
		skills: '.fa-wrench',
		projects: '.fa-book',
		contact: '.fa-envelope-o',
	};
//Scroll Spy
window.addEventListener('scroll', function() {
	var top = document.body.scrollTop;

	removeActive();
	if (top<420){
		document.querySelector('.fa-home').parentElement.parentElement.className += ' active';
	} else if(top<1200){
		document.querySelector('.fa-wrench').parentElement.parentElement.className += ' active';
	} else if (top<1700){
		document.querySelector('.fa-book').parentElement.parentElement.className += ' active';
	} else {
		document.querySelector('.fa-envelope-o').parentElement.parentElement.className += ' active';
	}
})
function removeActive() {
	for (section in icons){
		document.querySelector(icons[section]).parentElement.parentElement.className = 	document.querySelector(icons[section]).parentElement.className.replace('active','');
	}
}

document.querySelector('form').onsubmit = function(e){
        var error = "";
        if (document.getElementById('emailInput').value === ''){
        
            error+="The email field is required.<br>"

        } 
				else if(!validateEmail(document.getElementById('emailInput').value)){
					error += "Please enter a valid email. <br>"
				}
        if (document.getElementById('subjectInput').value === ''){
        
            error+="The subject field is required.<br>"

        }
        if (document.getElementById('bodyInput').value === ''){
        
            error+="The body field is required.<br>"

        }
        if(error!=""){
						document.querySelector('.error').innerHTML = '<div><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>';
            
            return false;
        } else{
        
          return true;
        
        }
};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}