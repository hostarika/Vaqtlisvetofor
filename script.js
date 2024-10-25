const Muhammaddavron = document.querySelector('.red');
const Amirxon = document.querySelector('.yellow');
const Ahmadbek = document.querySelector('.green');
const Yusuf = document.getElementById('redCountdown');
const Abdulloh = document.getElementById('greenCountdown');

function startTrafficLight() {
    let redTime = 15;
    let greenTime = 15;
    let yellowTime = 5;  


    Muhammaddavron.classList.add('active');
    Yusuf.style.display = 'block';
    Yusuf.textContent = redTime;

    let redInterval = setInterval(() => {
        redTime--;
        redCountdown.textContent = redTime;
        if (redTime === 0) {
            clearInterval(redInterval);
            Muhammaddavron.classList.remove('active');
            Yusuf.style.display = 'none';

            Amirxon.classList.add('active');

            let yellowInterval = setTimeout(() => {
                Amirxon.classList.remove('active');

                
                Ahmadbek.classList.add('active');
                Abdulloh.style.display = 'block';
                Abdulloh.textContent = greenTime;

                let greenInterval = setInterval(() => {
                    greenTime--;
                    Abdulloh.textContent = greenTime;
                    if (greenTime === 0) {
                        clearInterval(greenInterval);
                        Ahmadbek.classList.remove('active');
                        greenCountdown.style.display = 'none';
                        setTimeout(startTrafficLight, 1000); 
                    }
                }, 1000);
            }, yellowTime * 1000); 
        }
    }, 1000);
}

window.onload = startTrafficLight;
