const form = $('#myForm');
const submitBtn = $('#submitBtn');
const nameInput = $('#name_10');
const emailInput = $('#email_10');
const passwordInput = $('#password');

nameInput.on('input', function()
{
    if (this.value.length > 0)
    {
        emailInput.prop('disabled', false);
        passwordInput.prop('disabled', false);
    }
    else
    {
        emailInput.prop('disabled', true);
        passwordInput.prop('disabled', true);
        submitBtn.prop('disabled', true);
        submitBtn.removeClass('enabled');
        submitBtn.addClass('disabled');
    }
});

emailInput.on('input', function()
{
    if (this.value.length > 0)
    {
        passwordInput.prop('disabled', false);
    }
    else
    {
        passwordInput.prop('disabled', true);
        submitBtn.prop('disabled', true);
        submitBtn.removeClass('enabled');
        submitBtn.addClass('disabled');
    }
});

passwordInput.on('input', function()
{
    if (this.value.length > 0 && nameInput.val().length > 0 && emailInput.val().length > 0)
    {
        submitBtn.prop('disabled', false);
        submitBtn.removeClass('disabled');
        submitBtn.addClass('enabled');

    }
    else
    {
        submitBtn.prop('disabled', true);
        submitBtn.removeClass('enabled');
        submitBtn.addClass('disabled');

    }
});

form.on('submit', function(event)
{
    event.preventDefault();
    const formData =
    {
        name: nameInput.val(),
        email: emailInput.val(),
        password: passwordInput.val()
    };
    console.log(formData);
    // Очистка формы
    form[0].reset();
    // Сброс стилей кнопки
    submitBtn.prop('disabled', true);
    submitBtn.removeClass('enabled');
    submitBtn.addClass('disabled');
});