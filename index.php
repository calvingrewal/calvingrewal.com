
<?php
    $error = ""; $successMessage = "";

    if($_POST){
        
        if(!$_POST["email"]){
        
            $error .= "An email address is required<br>";
        
        } else if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
          $error .= "The email address is invalid";
        }
        if(!$_POST["subject"]){
        
            $error .= "A subject is required<br>";
        
        }
        if(!$_POST["body"]){
        
            $error .= "A body is required<br>";
        
        }
        
        
        if($error != ""){
        
            $error =  '<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>'.$error.'</div>';
        
        } else{
        
            $mailto = "awesomeduude@gmail.com";
            
            $subject = $_POST["subject"];
            
            $body = $_POST["body"];
            
            $headers = "From: ".$_POST['email'];
            
            if (mail($mailto,$subject,$body,$headers)){
            
                $successMessage = '<div class="alert alert-success" role="alert"><p>Your message was sent. We\'ll get back to you soon!</p></div>';
            
            } else{
            
                $error='<div class="alert alert-danger" role="alert"><p>Your message couldn\'t be sent. Please try again later</p>'.$error.'</div>';
            }
        
        }
    
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>     
	 <link rel="stylesheet" href="css/main.css">

	 <script src="https://use.fontawesome.com/fc51932626.js"></script>
</head>

<body>
		<nav>
			<ul>
				<li><a href="#hero"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
				<!--<li><i class="fa fa-paperclip" aria-hidden="true"></i>About</li>-->
				<li><a href="#skills"><i class="fa fa-wrench" aria-hidden="true"></i>Skills</a></li>
				<li><a href="#projects"><i class="fa fa-book" aria-hidden="true"></i>Projects</a></li>
				<li><a href="#contact"><i class="fa fa-envelope-o" aria-hidden="true"></i>Contact</a></li>
			</ul>
			<h1>Calvin Grewal</h1>
		</nav>

		<section id='hero'>
			<div>
				<h1>Calvin Grewal</h1>
				<h2>Front End Web Developer</h2>
			</div>

		</section>
		
		<section id="skills">

			<h1>Skills</h1>
			<div class="container">

				<div class="skill-group">
					<div><span>HTML</span></div>
					<div><span>CSS</span></div>
					<div><span>Javascript</span></div>
				</div>
				<div class="skill-group">
					<div><span>SASS</span></div>
					<div><span>Bootstrap</span></div>
					<div><span>Responsive Design</span></div>
				</div>
				<div class="skill-group">
					<div><span>React</span></div>
					<div><span>Redux</span></div>
					<div><span>Webpack</span></div>

				</div>

			</div>
		</section>
		
		<section id="projects">
			<h1>Projects</h1>
			<div class="container">
			
				<div class="project">
					<p>Portfolio Page</p>
					<div class='img-wrap'>	
						<a href="#"><img src="images/portfolio.png" alt="Portfolio Page"></a>
						<p class='caption'>
							This page is one of my biggest projects. It uses techniques such as responsive design and flexbox.
						</p>
					</div>
				</div>
				<div class="project">
					<p>Sports Weather</p>
					<div class='img-wrap'>	
						<img src="images/portfolio.png" alt="Portfolio Page">
						<p class='caption'>
							This web app lets users input a sporting event they are going to, and it will text them if it is raining.
						</p>
					</div>
				</div>
				<div class="project">
					<p>React Counter</p>
					<div class='img-wrap'>	
						<a href="https://codepen.io/calvingrewal/full/RRZgWE/" target="_blank"><img src="images/counter.png" alt="Portfolio Page"></a>
						<p class='caption'>
							This is a basic counter built with react.
						</p>
					</div>
				</div>
				
			</div>
		</section>
		
		<section id="contact">
			<h1>Contact Me</h1>
			<div class="container">
				<form class='col-50' method="post">
					<div class="error"></div>
					<fieldset>

							<label for="emailInput">Email Address</label>
							<input type="email" id="emailInput" name="email" placeholder="Enter Email">

					</fieldset>
					<fieldset>

							<label for="subjectInput">Subject</label>
							<input type="text" name="subject" id="subjectInput">

					</fieldset>
					<fieldset>

							<label for="bodyInput">Message</label>
							<textArea rows="3"name="body" id="bodyInput"></textArea>

					</fieldset>
					<button id="submit">Submit</button>

				</form>
				
				<div class="col-50">
					<div class="row-50">
					
						<a href='https://github.com/awesomeduude' class="icon" target="_blank">
							<i class="fa fa-github" aria-hidden="true"></i>
						</a>
						<a href='https://www.linkedin.com/in/calvingrewal' class="icon" target="_blank">
							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</a>
					</div>
					<div class="row-50">
						<a href='https://twitter.com/CalvinGrewal' class="icon" target='_blank'>
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
						<a href='http://codepen.io/calvingrewal/' class="icon" target='_blank'>
							<i class="fa fa-codepen" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
		
		<footer>
			Background images are from ____
		</footer>

		<script src="scripts.js"></script>
</body>
</html>
