
            var howFindButton = document.querySelector(".how-find-button");
            var modalMap = document.querySelector(".modal-map");
            var mapCloseButton = modalMap.querySelector(".modal-close");

            howFindButton.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalMap.classList.add("modal-map-show");
            });

            mapCloseButton.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalMap.classList.remove("modal-map-show");
            });

            window.addEventListener("keydown", function (evt) {
                if (evt.keyCode == 27) {
                    if (modalMap.classList.contains("modal-map-show")) {
                        modalMap.classList.remove("modal-map-show");
                    }
                }
            });
