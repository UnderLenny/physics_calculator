//Calculates Speed
document.getElementsByClassName('btn_speed')[0].addEventListener('click', () => {
    let distanceForSpeed = document.getElementsByClassName('distance_for_speed')[0].value;
    let speedTime = document.getElementsByClassName('speed_time')[0].value;
    if (isNaN(distanceForSpeed)) {
        alert('Введите корректное значение в поле Расстояние');
    } else if (isNaN(speedTime)) {
        alert('Введите корректное значение в поле Время');
    } else {
        let speedMeasurementSelect = document.getElementById('speed_measurement');
        let speedMeasurementSystem = speedMeasurementSelect.selectedIndex;
        let speedResult = distanceForSpeed / speedTime;
        document.getElementsByClassName('speed_result')[0].innerHTML = 'Скорость: ' + speedResult + " " + speedMeasurementSelect.options[speedMeasurementSystem].text;
    }
});