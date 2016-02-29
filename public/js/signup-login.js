
var SignupModalController = {
  signupInputFirstnameElementName: "#signup-firstname",
  signupInputLastnameElementName: "#signup-lastname",
  singupInputPasswordElementName: "#signup-password",
  signupInputConfirmPasswordElementName: "#signup-confirm-password",
  signupInputEmailElementName: "#signup-email",

  signupInputEmailStatusElementName: "#signup-email-status",
  signupInputFirstnameStatusElementName: "#signup-firstname-status",
  signupInputLastnameStatusElementName: "#signup-lastname-status",
  signupInputPasswordStatusElementName: "#signup-password-status",
  signupInputConfirmPasswordStatusElementName: "#signup-confirm-password-status",

  loginInputEmailElementName: "#login-email",
  loginInputPasswordElementName: "#login-password",

  loginInputEmailStatusElementName: "#login-email-status",
  loginInputPasswordStatusElementName: "#login-password-status",

  signupBtnElementName: "#btn-signup",
  loginBtnElementName: "#btn-login",

  signupInputFirstname: null,
  signupInputLastname: null,
  signupInputPassword: null,
  signupInputConfirmPassword: null,
  signupInputEmail: null,

  signupInputFirstnameStatus: null,
  signupInputLastnameStatus: null,
  signupInputPasswordStatus: null,
  signupInputConfirmPasswordStatus: null,
  signupInputEmailStatus: null,

  signupBtn: null,

  loginInputEmail: null,
  loginInputPassword: null,

  loginInputEmailStatus: null,
  loginInputPasswordStatus: null,

  loginBtn: null,

  activeTab: null,
  tabSelection: 0, // 0 - signup, 1 - login

  findElements: function () {
    var base = this;

    base.signupInputFirstname = $(base.signupInputFirstnameElementName);
    base.signupInputLastname = $(base.signupInputLastnameElementName);
    base.signupInputPassword = $(base.singupInputPasswordElementName);
    base.signupInputConfirmPassword = $(base.signupInputConfirmPasswordElementName);
    base.signupInputEmail = $(base.signupInputEmailElementName);

    base.signupInputFirstnameStatus = $(base.signupInputFirstnameStatusElementName);
    base.signupInputLastnameStatus = $(base.signupInputLastnameStatusElementName);
    base.signupInputPasswordStatus = $(base.signupInputPasswordStatusElementName);
    base.signupInputConfirmPasswordStatus = $(base.signupInputConfirmPasswordStatusElementName);
    base.signupInputEmailStatus = $(base.signupInputEmailStatusElementName);

    base.signupBtn = $(base.signupBtnElementName);

    base.loginInputEmail = $(base.loginInputEmailElementName);
    base.loginInputPassword = $(base.loginInputPasswordElementName);

    base.loginInputEmailStatus = $(base.loginInputEmailStatusElementName);
    base.loginInputPasswordStatus = $(base.loginInputPasswordStatusElementName);

    base.loginBtn = $(base.loginBtnElementName);

    base.signupInputFirstnameStatus.css('color', '#ff8d00'); 
    base.signupInputLastnameStatus.css('color', '#ff8d00'); 
    base.signupInputPasswordStatus.css('color', '#ff8d00');  
    base.signupInputConfirmPasswordStatus.css('color', '#ff8d00'); 
    base.signupInputEmailStatus.css('color', '#ff8d00');

    base.signupInputFirstnameStatus.css('display', 'none');
    base.signupInputLastnameStatus.css('display', 'none');
    base.signupInputPasswordStatus.css('display', 'none');
    base.signupInputConfirmPasswordStatus.css('display', 'none');
    base.signupInputEmailStatus.css('display', 'none');

    base.loginInputEmailStatus.css('color', '#ff8d00');
    base.loginInputPasswordStatus.css('color', '#ff8d00');

    base.loginInputEmailStatus.css('display', 'none');
    base.loginInputPasswordStatus.css('display', 'none');

    return base;
  },

  signupClear: function() {
    var base = this;

    base.signupInputFirstnameStatus.html('');
    base.signupInputLastnameStatus.html('');
    base.signupInputPasswordStatus.html('');
    base.signupInputConfirmPasswordStatus.html('');
    base.signupInputEmailStatus.html('');
  },

  loginClear: function() {
    var base = this;

    base.loginInputEmailStatus.html('');
    base.loginInputPasswordStatus.html('');
  },

  addClickEvents: function (db) {
    var base = this;

    base.signupBtn.on("click", function(e) {
      e.preventDefault();

      base.signupClear();

      if (base.signupInputFirstname.val().length == 0) {
        base.signupInputFirstnameStatus.css('display', 'visible');
        base.signupInputFirstnameStatus.html('* Please choose a username');
      }
      if (base.signupInputLastname.val().length == 0) {
        base.signupInputLastnameStatus.css('display', 'visible');
        base.signupInputLastnameStatus.html('* Please choose a username');
      }
      if (base.signupInputPassword.val().length == 0) {
        base.signupInputPasswordStatus.css('display', 'visible');
        base.signupInputPasswordStatus.html('* Please write a valid password');
      }
      if (base.signupInputConfirmPassword.val().length == 0) {
        base.signupInputConfirmPasswordStatus.css('display', 'visible');
        base.signupInputConfirmPasswordStatus.html('* Please write a valid password');
      }
      if (base.signupInputEmail.val().length == 0) {
        base.signupInputEmailStatus.css('display', 'visible');
        base.signupInputEmailStatus.html('* Please tell us a valid email address');
      }
      if (base.signupInputPassword.val() != base.signupInputConfirmPassword.val()) {
        base.signupInputPasswordStatus.css('display', 'visible');
        base.signupInputConfirmPasswordStatus.css('display', 'visible');

        base.signupInputPasswordStatus.html('* Passwords do not match');
        base.signupInputConfirmPasswordStatus.html('* Passwords do not match');
      } else if (base.signupInputPassword.val().length < 8) {
        base.signupInputPasswordStatus.css('display', 'visible');
        base.signupInputConfirmPasswordStatus.css('display', 'visible');

        base.signupInputPasswordStatus.html('* Passwords should be at least 8 characters long');
        base.signupInputConfirmPasswordStatus.html('* Passwords should be at least 8 characters long');
      } 

      if (base.signupInputEmail.val().indexOf('@') < 0) {
        base.signupInputEmailStatus.css('display', 'visible');
        base.signupInputEmailStatus.html('* Please tell us a valid email address');
      } 

      if (base.signupInputFirstname.val().length != 0 
        && base.signupInputLastname.val().length != 0
        && base.signupInputPassword.val().length != 0
        && base.signupInputConfirmPassword.val().length != 0
        && base.signupInputEmail.val().length != 0
        && base.signupInputPassword.val().length >= 8
        && base.signupInputPassword.val() == base.signupInputConfirmPassword.val()
        && base.signupInputEmail.val().indexOf('@') >= 0) {

        var password = base.signupInputPassword.val();
        var firstname = base.signupInputFirstname.val();
        var lastname = base.signupInputLastname.val();
        var email = base.signupInputEmail.val();
        var signupURL = "/signup-login/signup?email="+email+"&password="+password+"&firstname="+firstname+"&lastname="+lastname;

        $.getJSON(signupURL, function(data) {
          if (data.status == "success") {
            document.location.href="/search";
          } else if (data.status == "duplicate") {
            base.signupInputEmailStatus.css('display', 'visible');
            base.signupInputEmailStatus.html('* The email address is already registered. To sign in, click the sign in button below');
          } else {
            base.signupInputEmailStatus.css('display', 'visible');
            base.signupInputEmailStatus.html('* Failed to sign up. Please try again in a few moment');
          }
        });
      } 
    });

    base.loginBtn.on("click", function(e) {
      e.preventDefault();

      base.loginClear();

      var email = base.loginInputEmail.val();
      var password = base.loginInputPassword.val();
      if (email.length == 0) {
        base.loginInputEmailStatus.css('display', 'visible');
        base.loginInputEmailStatus.html('* Please tell us a valid email address');
      }
      if (password.length < 8) {
        base.loginInputPasswordStatus.css('display', 'visible');
        base.loginInputPasswordStatus.html('* Please write a valid password');
      }
      if (email.length != 0 && password.length >= 0) {
        var loginURL = "/signup-login/login?email="+email+"&password="+password;

        $.getJSON(loginURL, function(data) {
          if (data.status == "success") {
            document.location.href="/search";
          } else if (data.status == "user not found") {
            base.loginInputEmailStatus.css('display', 'visible');
            base.loginInputEmailStatus.html('* The email address does not exist');
          } else if (data.status == "incorrect password") {
            base.loginInputEmailStatus.css('display', 'visible');
            base.loginInputEmailStatus.html('* The password is incorrect');
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