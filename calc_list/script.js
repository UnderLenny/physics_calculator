//Расчет скорости
document.getElementsByClassName('btn_speed')[0].addEventListener('click', () => {  // делаем стрелочную функцию
    let distanceForSpeed = document.getElementsByClassName('distance_for_speed')[0].value; // создали переменную и занесли туда значение из поля расстояние
    let speedTime = document.getElementsByClassName('speed_time')[0].value; // создали переменную и занесли туда значение из поля время
    if (isNaN(distanceForSpeed)) {
        alert('Введите корректное значение в поле Расстояние');
    } else if (isNaN(speedTime)) {
        alert('Введите корректное значение в поле Время');
    } else {
        let speedMeasurementSelect = document.getElementById('speed_measurement'); // засунули в переменную данные о системе измерения
        let speedMeasurementSystem = speedMeasurementSelect.selectedIndex;
        let speedResult = distanceForSpeed / speedTime; // формула
        document.getElementsByClassName('speed_result')[0].innerHTML = 'Скорость: ' + speedResult + " " + speedMeasurementSelect.options[speedMeasurementSystem].text; // вывели резульат
    }
});