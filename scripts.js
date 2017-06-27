var sections = [
  document.getElementById('hero'),
	document.getElementById('skills'),
	document.getElementById('projects'),
	document.getElementById('contact')
]
var navHeight = document.querySelector('nav').scrollHeight
var distances = []
for (var i=0; i<sections.length; i++) {
  if (i > 0) {
      distances[i] = sections[i].scrollHeight + distances[i-1]
  } else {
    distances[i] = sections[i].scrollHeight - navHeight
  }
}

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
  for (var i=0; i < distances.length; i++) {
    if (top < distances[i]) {
        var selector = 'nav ul li:nth-of-type(' + (i+1) + ')'
        console.log(selector);
        document.querySelector(selector).className += ' active'
        break;
    }
  }
})
function removeActive() {
	for (section in icons){
		document.querySelector(icons[section]).parentElement.parentElement.className = 	document.querySelector(icons[section]).parentElement.className.replace('active','');
	}
}

document.querySelector('form').onsubmit = (e) => {
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
