var slider_button = Array.from(document.querySelectorAll(".slider_controls i"));
var slider = Array.from(document.querySelectorAll(".slider_item"));

// ------------ Вариант 2 -------------------
var indButtonPush = 0;
var indButtonActive = 0;
slider_button.forEach(function(el) {
    el.addEventListener("click", function(evt) {
        evt.preventDefault();
        indButtonPush = slider_button.indexOf(el);
        // console.log(indButtonPush);

        slider_button.forEach(function(el) {
            if (el.classList.contains("active")) {
                indButtonActive = slider_button.indexOf(el);
                // console.log(indButtonActive);
            }

            slider_button[indButtonActive].classList.remove("active");
            slider[indButtonActive].style.display = "none";

            slider_button[indButtonPush].classList.add("active");
            slider[indButtonPush].style.display = "block";
        });
    });
});

// ------------ Вариант 1 -------------------
// slider_button[0].addEventListener("click", function (evt) {
//     evt.preventDefault();

//     if (slider_button[1].classList.contains("active")) {
//         slider_button[1].classList.remove("active");
//         slider[1].style.display = "none";

//         slider_button[0].classList.add("active");
//         slider[0].style.display = "block";
//     } else if (slider_button[2].classList.contains("active")) {
//         slider_button[2].classList.remove("active");
//         slider[2].style.display = "none";

//         slider_button[0].classList.add("active");
//         slider[0].style.display = "block";
//     }
// });

// slider_button[1].addEventListener("click", function (evt) {
//     evt.preventDefault();

//     if (slider_button[0].classList.contains("active")) {
//         slider_button[0].classList.remove("active");
//         slider[0].style.display = "none";

//         slider_button[1].classList.add("active");
//         slider[1].style.display = "block";
//     } else if (slider_button[2].classList.contains("active")) {
//         slider_button[2].classList.remove("active");
//         slider[2].style.display = "none";

//         slider_button[1].classList.add("active");
//         slider[1].style.display = "block";
//     }
// });

// slider_button[2].addEventListener("click", function (evt) {
//     evt.preventDefault();

//     if (slider_button[0].classList.contains("active")) {
//         slider_button[0].classList.remove("active");
//         slider[0].style.display = "none";

//         slider_button[2].classList.add("active");
//         slider[2].style.display = "block";
//     } else if (slider_button[1].classList.contains("active")) {
//         slider_button[1].classList.remove("active");
//         slider[1].style.display = "none";

//         slider_button[2].classList.add("active");
//         slider[2].style.display = "block";
//     }
// });

