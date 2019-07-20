
            var loginLink = document.querySelector(".login-link");
            var modalLogin = document.querySelector(".modal-login");
            var loginCloseButton = modalLogin.querySelector(".modal-close"); //можно искать в modalLogin
            var loginField = modalLogin.querySelector("[name=login]");
            var passwordField = modalLogin.querySelector("[name=password]");
            var loginForm = modalLogin.querySelector("form");
            var loginValue = localStorage.getItem("login");

            loginLink.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalLogin.classList.add("modal-login-show");
                if (loginValue) {
                    loginField.value = loginValue;
                    passwordField.focus();
                } else {
                    loginField.focus();
                }
            });

            loginCloseButton.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalLogin.classList.remove("modal-login-show");
            });

            loginForm.addEventListener("submit", function (evt) {
                evt.preventDefault();
                if (!loginField.value || !passwordField.value) {
                    alert("заполните логин и пароль");
                } else {
                    localStorage.setItem("login", loginField.value);
                    //var lenght = localStorage.length;
                    //var message = "";
                    //for (i = 0; i < lenght; i++) {
                    //   message = message + " i = " + i + ", key = " + localStorage.key(i) + " value = " + localStorage.getItem(localStorage.key(i)) + "\n";
                    //}
                    //alert(message);
                    // localStorage.clear();
                }
            });

            window.addEventListener("keydown", function (evt) {
                if (evt.keyCode == 27) {
                    if (modalLogin.classList.contains("modal-login-show")) {
                        modalLogin.classList.remove("modal-login-show");
                    }
                }
            });
