var button_link = document.querySelector(".contacts_button");
var popup_write = document.querySelector(".modal_write_us");
var overlay = document.querySelector(".overlay");

var close_popup = popup_write.querySelector(".modal_close");
var form_write_us = popup_write.querySelector(".form_write_us");

var user_name = form_write_us.querySelector(".form_user_name");
var user_mail = form_write_us.querySelector(".form_user_e-mail");
var user_comment = form_write_us.querySelector(".form_user_comment");

var regName = /^([а-яёА-ЯЁ]{2,}[\s]?)*$/;

button_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_write.classList.add("modal_show");
    overlay.classList.add("overlay_show");
    user_name.focus();
});

close_popup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_write.classList.remove("modal_show");
    overlay.classList.remove("overlay_show");
    popup_write.classList.remove("modal_error");
    user_name.classList.remove("input_error");
    user_mail.classList.remove("input_error");
    user_comment.classList.remove("input_error");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_write.classList.remove("modal_show");
    overlay.classList.remove("overlay_show");
    popup_write.classList.remove("modal_error");
    user_name.classList.remove("input_error");
    user_mail.classList.remove("input_error");
    user_comment.classList.remove("input_error");
});

//------------- Закрытие модалки клавишей Esc ---------------
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

        if (popup_write.classList.contains("modal_show")) {
            evt.preventDefault();
            popup_write.classList.remove("modal_show");
            overlay.classList.remove("overlay_show");
            popup_write.classList.remove("modal_error");
            user_name.classList.remove("input_error");
            user_mail.classList.remove("input_error");
            user_comment.classList.remove("input_error");
        }
    }
});

form_write_us.addEventListener("submit", function(evt) {
    if (!user_name.value && !user_mail.value && !user_comment.value) {
        evt.preventDefault();
        popup_write.classList.remove("modal_error");
        popup_write.offsetWidth = popup_write.offsetWidth;
        popup_write.classList.add("modal_error");
    }
    
    if (!user_name.value || !regName.test(user_name.value)) {
        evt.preventDefault();
        user_name.classList.remove("input_error");
        user_name.offsetWidth = user_name.offsetWidth;
        user_name.classList.add("input_error");
    }else if (user_name.classList.contains("input_error")) {
        user_name.classList.remove("input_error");
    }
    
    if (!user_mail.value) {
        evt.preventDefault();
        user_mail.classList.remove("input_error");
        user_mail.offsetWidth = user_mail.offsetWidth;
        user_mail.classList.add("input_error");
    } else if (user_mail.classList.contains("input_error")) {
        user_mail.classList.remove("input_error");
    }
    
    if (!user_comment.value) {
        evt.preventDefault();
        user_comment.classList.remove("input_error");
        user_comment.offsetWidth = user_comment.offsetWidth;
        user_comment.classList.add("input_error");
    } else if (user_comment.classList.contains("input_error")) {
        user_comment.classList.remove("input_error");
    }
});

user_name.addEventListener("focusout", function(evt) {
    if (user_name.value && !regName.test(user_name.value)) {
        user_name.classList.remove("input_error");
        user_name.offsetWidth = user_name.offsetWidth;
        user_name.classList.add("input_error");
    } else {
        user_name.classList.remove("input_error");
    }
});

user_comment.addEventListener("focusout", function(evt) {
    if (user_comment.value && user_comment.classList.contains("input_error")) {
        user_comment.classList.remove("input_error");
    }
});