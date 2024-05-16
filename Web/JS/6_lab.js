document.getElementById("arrayForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    var arrayLength = parseInt(document.getElementById("arrayLength").value);

    if (arrayLength <= 0)
    {
        document.getElementById("result").innerHTML = "Размер массива должен быть больше 0!";
        return;
    }
    else if (arrayLength > 16 )
    {
        document.getElementById("result").innerHTML = "Размер массива должен быть не больше 16!";
        return;
    }

    var array = [];
    var sum = 0;
    var sr_ar;
    var even_sum = 0;

    for (var i = 0; i < arrayLength; i++)
    {
        // заполнение массива числами от -100 до 100
        array[i] = Math.floor(Math.random() * 201) - 100;
        sum += array[i];
        if(array[i] % 2 === 0)
        {
            even_sum += array[i]
        }
    }

    // находим минимальный элемент в массиве
    var min = Math.min.apply(null, array);

    // находим среднее арифметическое
    sr_ar = sum / arrayLength;

    document.getElementById("result").innerHTML =
        "Массив: " + array.join() + "<br>" + "Минимальный элемент: " + min +
        "<br>Среднее арифметическое: " + sr_ar +
        "<br>Сумма четных элементов: " + even_sum;

});