
fetch('https://wathyearisit-backend.vercel.app/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
        console.log(data)
    });