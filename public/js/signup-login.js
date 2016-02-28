
var SignupModalController = {
  signupInputUsernameElementName: "#signup-username",
  singupInputPasswordElementName: "#signup-password",
  signupInputConfirmPasswordElementName: "#signup-confirm-password",
  signupInputEmailElementName: "#signup-email",

  loginInputEmailElementName: "#login-email",
  loginInputPasswordElementName: "#login-password",

  signupBtnElementName: "#btn-signup",
  loginBtnElementName: "#btn-login",

  signupInputUsername: null,
  signupInputPassword: null,
  signupInputConfirmPassword: null,
  signupInputEmail: null,
  signupBtn: null,

  loginInputEmail: null,
  loginInputPassword: null,
  loginBtn: null,

  activeTab: null,
  tabSelection: 0, // 0 - signup, 1 - login

  findElements: function () {
    var base = this;

    base.signupInputUsername = $(base.signupInputUsernameElementName);
    base.signupInputPassword = $(base.singupInputPasswordElementName);
    base.signupInputConfirmPassword = $(base.signupInputConfirmPasswordElementName);
    base.signupInputEmail = $(base.signupInputEmailElementName);
    base.signupBtn = $(base.signupBtnElementName);

    base.loginInputEmail = $(base.loginInputEmailElementName);
    base.loginInputPassword = $(base.loginInputPasswordElementName);
    base.loginBtn = $(base.loginBtnElementName);

    return base;
  },

  addClickEvents: function (db) {
    var base = this;

    base.signupBtn.on("click", function(e) {
      e.preventDefault();

      if (base.signupInputUsername.val().length == 0) {
      	$('#signup-username-status').html('Please choose a username');
      	$('#signup-username-status').css('color: #ff8d00;'); 
      }
      if (base.signupInputPassword.val().length == 0) {
      	$('#signup-password-status').html('Please write a valid password');
      	$('#signup-password-status').css('color: #ff8d00;'); 
      }
      if (base.signupInputConfirmPassword.val().length == 0) {
      	$('#signup-confirm-password-status').html('Please write a valid password');
      	$('#signup-confirm-password-status').css('color: #ff8d00;'); 
      }
      if (base.signupInputEmail.val().length == 0) {
      	$('#signup-email-status').html('Please tell us a valid email address');
      	$('#signup-email-status').css('color: #ff8d00;'); 
      }      

      if (base.signupInputPassword.val() != base.signupInputConfirmPassword.val()) {
      	$('#signup-password-status').html('Passwords do not match');
      	$('#signup-password-status').css('color: #ff8d00;'); 
      	$('#signup-confirm-password-status').html('Passwords do not match');
      	$('#signup-confirm-password-status').css('color: #ff8d00;'); 
      } else if (base.signupInputPassword.val().length < 8) {
      	$('#signup-password-status').html('Passwords should be at least 8 characters long');
      	$('#signup-password-status').css('color: #ff8d00;'); 
      	$('#signup-confirm-password-status').html('Passwords should be at least 8 characters long');
      	$('#signup-confirm-password-status').css('color: #ff8d00;'); 
      } 

      if (base.signupInputEmail.val().indexOf('@') < 0) {
      	$('#signup-email-status').html('Please tell us a valid email address');
      	$('#signup-email-status').css('color: #ff8d00;'); 
      } 

      if (base.signupInputUsername.val().length != 0 
      	&& base.signupInputPassword.val().length != 0
      	&& base.signupInputConfirmPassword.val().length != 0
      	&& base.signupInputEmail.val().length != 0
      	&& base.signupInputPassword.val() == base.signupInputConfirmPassword.val()
      	&& base.signupInputPassword.val().length >= 8
      	&& base.signupInputEmail.val().indexOf('@') >= 0) {

        var password = base.signupInputPassword.val();
        var username = base.signupInputUsername.val();
        var email = base.signupInputEmail.val();
        var signupURL = "/signup-login/signup?email="+email+"&password="+password+"&username="+username;

        $.getJSON(signupURL, function(data) {
          if (data.status == "success") {
            document.location.href="/search";
          } else if (data.status == "duplicate") {
          	$('#signup-email-status').html('* The email address is already registered. To sign in, click the sign in button below');
          	$('#signup-email-status').css('color: #ff8d00;');
        	} else {
          	$('#signup-email-status').html('* Failed to sign up. Please try again in a few moment');
          	$('#signup-email-status').css('color: #ff8d00;');          		
          }
        });
      }	
    });

    base.loginBtn.on("click", function(e) {
      e.preventDefault();

      var email = base.loginInputEmail.val();
      var password = base.loginInputPassword.val();
      if (email.length == 0) {
      	$('#login-email-status').html('Please tell us a valid email address');
      	$('#login-email-status').css('color: #ff8d00;'); 
      }
      if (password.length == 0) {
      	$('#login-password-status').html('Please write a valid password');
      	$('#login-password-status').css('color: #ff8d00;'); 
      }
      if (email.length != 0	&& password.length != 0) {
        var loginURL = "/signup-login/login?email="+email+"&password="+password;

        $.getJSON(loginURL, function(data) {
          if (data.status == "success") {
            document.location.href="/search?login=true&username="+data.username+"&email="+data.email;
          } else if (data.status == "user not found") {
          	$('#login-email-status').html('* The email address does not exist');
          	$('#login-email-status').css('color: #ff8d00;');
        	} else if (data.status == "incorrect password") {
          	$('#login-email-status').html('* The password is incorrect');
          	$('#login-email-status').css('color: #ff8d00;');          		
        	} else {
        	}
        });
      }
    });

    return base;
  },

  initialize: function () {
    var base = this;
    base.findElements().addClickEvents();
  }
};

var SignupModalController = SignupModalController || {};

var is_loaded = function(namespace, jsfile) {
  var is_first = namespace.first_loaded === undefined;
  namespace.first_loaded = false;

  if (!is_first) {
    console.log("Warning: Javascript file is included twice:" + jsfile);
  }

  return is_first;
};

$(document).ready(function () {
  if (!is_loaded(SignupModalController, "signup-login.js")) {
    return ;
  }
  SignupModalController.initialize();
});