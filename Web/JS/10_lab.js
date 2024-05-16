const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name_10');
const emailInput = document.getElementById('email_10');
const passwordInput = document.getElementById('password');


nameInput.addEventListener('input', function()
{
    if (this.value.length > 0)
    {
        // Поля активные если длина имени больше 0
        emailInput.removeAttribute('disabled');
        passwordInput.removeAttribute('disabled');
    }
    else
    {
        emailInput.setAttribute('disabled', 'disabled');
        passwordInput.setAttribute('disabled', 'disabled');
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
        submitBtn.classList.add('disabled');
    }
});

emailInput.addEventListener('input', function()
{

    if (this.value.length > 0 && passwordInput.value.length > 0)
    {
        // Если длина текста в email и password больше 0, то кнопка sumbit активна
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('enabled');

    }
    else
    {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
        submitBtn.classList.add('disabled');

    }
});

passwordInput.addEventListener('input', function()
{
    if (this.value.length > 0 && emailInput.value.length > 0)
    {
        // Логика такаяже как в предыдущем обработчике
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
        submitBtn.classList.add('enabled');
    }
    else
    {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
        submitBtn.classList.add('disabled');
    }
});

form.addEventListener('submit', function(event)
{
    // отменяем событие при попытке отправить форму
    event.preventDefault();
    const formData =
    {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    // вместо этого выводим в консоль
    console.log(formData);
    // Очистка формы
    form.reset();
    // Сброс стилей кнопки
    submitBtn.disabled = true;
    submitBtn.classList.remove('enabled');
    submitBtn.classList.add('disabled');
});