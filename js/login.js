// JavaScript to toggle password visibility and change icon
$(document).ready(function() {
    $('#togglePassword').click(function() {
        var passwordInput = $('#password');
        var icon = $('#togglePassword i');
        var type = passwordInput.attr('type');

        if (type === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });


    $('#toggleConfirmPassword').click(function() {
        var passwordInput = $('#confirmpassword');
        var icon = $('#toggleConfirmPassword i');
        var type = passwordInput.attr('type');

        if (type === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});