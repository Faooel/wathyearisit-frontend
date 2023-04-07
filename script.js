
fetch('http://localhost:3000/date')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.now;
        console.log(data)
    });