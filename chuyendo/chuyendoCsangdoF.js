function Chuyendoinhietdo() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
        document.getElementById('result').innerText = 'Vui lòng nhập nhiệt độ.';
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').innerHTML = 
        `<strong>${celsius} °C</strong> tương đương với <strong>${fahrenheit.toFixed(2)} °F</strong>.`;
}

