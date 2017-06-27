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

document.getElementById('submit').onclick = function(e) {
  console.log('CLICKED');
  e.preventDefault()
  var error = "";

  var emailInput = document.getElementById('emailInput').value
  var subjectInput = document.getElementById('subjectInput').value
  var bodyInput = document.getElementById('bodyInput').value
  if (emailInput === ''){

      error+="The email field is required.<br>"

  }
	else if(!validateEmail(emailInput)){
		error += "Please enter a valid email. <br>"
	}
  if (subjectInput === ''){

      error+="The subject field is required.<br>"

  }
  if (bodyInput === ''){

      error+="The body field is required.<br>"

  }
  if(error !== ""){
			document.querySelector('.error').innerHTML = '<div><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>';

      return false;
  } else {
    console.log('NO ERRORS');
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInput,
        subject: subjectInput,
        body: bodyInput
      })
    })
      .then(res => res.json())
      .then(response => {
        if (response.success){
          alert('emeil sent')
        } else {
          alert('failed')
        }
      })
    return true;

  }
};
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
