var SignupModalController = {
  signupInputUsernameElementName: "#signup-username",
  singupInputPasswordElementName: "#signup-password",
  signupInputConfirmPasswordElementName: "#signup-confirm-password",
  signupInputEmailElementName: "#signup-email",

  loginInputUsernameElementName: "#login-username",
  loginInputPasswordElementName: "#login-password",

  signupBtnElementName: "#btn-signup",
  loginBtnElementName: "#btn-login",

  signupInputUsername: null,
  signupInputPassword: null,
  signupInputConfirmPassword: null,
  signupInputEmail: null,
  signupBtn: null,

  loginInputUsername: null,
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

    base.loginInputUsername = $(base.loginInputUsernameElementName);
    base.loginInputPassword = $(base.loginInputPasswordElementName);
    base.loginBtn = $(base.loginBtnElementName);

    return base;
  },
/*
  setState: function (state) {
    var base = this,
        elem = null;

    if (!state) {
        state = 0;
    }

    if (base.tabsElement) {
        elem = $(base.tabsElement[state]);
        elem.addClass("current");
        $("." + elem.attr("data-tabtar")).addClass("show");
    }

    return base;
  },

  getActiveTab: function () {
    var base = this;

    base.tabsElement.each(function (i, el) {
        if ($(el).hasClass("current")) {
            base.activeTab = $(el);
        }
    });

    return base;
  },
*/

  addClickEvents: function (getGlobal) {
    var base = this;
/*
    base.hidePassword.on("click", function (e) {
        var $this = $(this),
            $pwInput = $this.prev("input");

        if ($pwInput.attr("type") == "password") {
            $pwInput.attr("type", "text");
            $this.text("Hide");
        } else {
            $pwInput.attr("type", "password");
            $this.text("Show");
        }
    });

    base.tabsElement.on("click", function (e) {
        var targetTab = $(this).attr("data-tabtar");

        e.preventDefault();
        base.activeTab.removeClass("current");
        base.activeTab = $(this);
        base.activeTab.addClass("current");

        base.tabElement.each(function (i, el) {
            el = $(el);
            el.removeClass("show");
            if (el.hasClass(targetTab)) {
                el.addClass("show");
            }
        });
    });

    base.inputElements.find("label").on("click", function (e) {
        var $this = $(this),
            $input = $this.next("input");

        $input.focus();
    });
    */
    base.signupBtn.on("click", function(e) {
      e.preventDefault();

      if (base.signupInputUsername.val().length == 0 || 
          base.signupInputPassword.val().length == 0 ||
          base.signupInputConfirmPassword.val().length == 0 ||
          base.signupInputEmail.val().length == 0) {
        alert("Please fill in all the fields");
      } else {
        if (base.signupInputPassword.val() != base.signupInputConfirmPassword.val()) {
          alert("Password does not match the confirm password");
        } else if (base.signupInputPassword.val().length < 8) {
          alert("Password should be at least 8 characters long");
        } else if (base.signupInputEmail.val().indexOf('@') < 0) {
          alert("Please input a valid email address");
        } else {
          // register the user --- currently simply overwriting if there are conflicts
          var password = base.signupInputPassword.val();
          var username = base.signupInputUsername.val();
          var email = base.signupInputEmail.val();
          getGlobal[username] = password;
          alert("Signed up successfully. Welcome "+username+"!");
          document.location.href = "/search?username="+username;
        }
      }
    });

    base.loginBtn.on("click", function(e) {
      // This version only works for prolonged sessions
      e.preventDefault();
      var username = base.loginInputUsername.val();
      var password = base.loginInputPassword.val();
      if (username.length == 0 ||
          password.length == 0) {
        alert("Please type in correct username and password");
      } else {
        if (!getGlobal[username]) {
          alert("Username or email address does not exist");
        } else if (password != getGlobal[username]) {
          alert("Please type in the correct password");
        } else {
          // query the database for the correct username
          document.location.href = "/search?username="+username;
        }
      }
    });

    return base;
  },

  initialize: function (getGlobal) {
    var base = this;
    base.findElements().addClickEvents(getGlobal);
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

function getGlobal(){
  return (function(){
    return this;
    }).call(null);
}

$(document).ready(function () {
  if (!is_loaded(SignupModalController, "signup-login.js")) {
    return ;
  }
  SignupModalController.initialize(getGlobal());
});