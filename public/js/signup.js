/* This is a sign up controller for 
 * the previous version of the sign up view
 */
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

  addClickEvents: function () {
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
          // register the user
          var user = {};
          user["password"] = base.signupInputPassword.val();
          user["username"] = base.signupInputUsername.val();
          user["email"] = base.signupInputEmail.val();

          console.log("user.password:"+user["password"]);

          //JSON.Stringify(user); // send this to the mongoDB
        }
      }
    });

    base.loginBtn.on("click", function(e) {

    });

    return base;
  },

  initialize: function () {
    var base = this;

    base.findElements().addClickEvents();
  }
};

$(document).ready(function () {
    SignupModalController.initialize();
});