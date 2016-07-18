var acountButtn = $('#signup-button');
acountButtn.on('click',checkForm);

function checkForm(e){
	e.preventDefault();
	checkName();
	checkEmail();
	createPassword();
}

function checkName(){
	var nameField = $('#name');
	if(nameField.val().length < 2){
		addClass(nameField);
	}else{
		removeClass(nameField);
	}
}
function checkEmail(){
	var emailField = $('#email');
	var emailFieldValue = emailField.val();
	var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]/;
	var temp = regex.test(emailFieldValue);
	if (!temp){
		addClass(emailField);
	}else{
		removeClass(emailField);
	}
}
function createPassword(){
	var pass = $('#password');
	if (pass.val().length < 5){
		addClass(pass);
		return false;
	}else{
		removeClass(pass);
		return true;	
	}	
}
function addClass(element){
	$(element).addClass('error-input-border');
}

function removeClass(element){
	$(element).removeClass('error-input-border');
}

