const body = document.getElementById('body');
const button = document.getElementById('button');
const modal = document.getElementById('modal');
const contents = document.getElementById('contents');
const checkbox_star = document.getElementById('checkbox_star');
const checkbox_cloud = document.getElementById('checkbox_cloud');
const checkbox_moon = document.getElementById('checkbox_moon');
const checkbox_balloon = document.getElementById('checkbox_balloon');
const checkbox_window_1 = document.getElementById('checkbox_window_1');
const checkbox_window_2 = document.getElementById('checkbox_window_2');
const sky_1 = document.getElementById('sky_1');
// const sky_2 = document.getElementById('sky_2');
const sky_3 = document.getElementById('sky_3');
const sky_4 = document.getElementById('sky_4');

const star = document.getElementById('star');
const cloud = document.getElementById('cloud');
const moon = document.getElementById('moon');
const balloon = document.getElementById('balloon');
const window_1 = document.getElementById('window_1');
const window_2 = document.getElementById('window_2');

button.addEventListener('click', () => {
    modal.style.display = 'none';

    if (checkbox_star.checked) {
        star.style.display = 'block';
    } else {
        star.style.display = 'none';
    }

    if (checkbox_cloud.checked) {
        cloud.style.display = 'block';
    } else {
        cloud.style.display = 'none';
    }

    if (checkbox_moon.checked) {
        moon.style.display = 'block';
    } else {
        moon.style.display = 'none';
    }

    if (checkbox_balloon.checked) {
        balloon.style.display = 'block';
    } else {
        balloon.style.display = 'none';
    }

    if (checkbox_window_1.checked) {
        window_1.style.display = 'block';
    } else {
        window_1.style.display = 'none';
    }

    if (checkbox_window_2.checked) {
        window_2.style.display = 'block';
    } else {
        window_2.style.display = 'none';
    }

    displaySky();
});

contents.addEventListener('click', () => {
    modal.style.display = 'block';
    star.style.display = 'none';
    cloud.style.display = 'none';
    moon.style.display = 'none';
    balloon.style.display = 'none';
    window_1.style.display = 'none';
    window_2.style.display = 'none';
});

function displaySky() {
    if (sky_1.checked) {
        body.style.background = 'linear-gradient(#485B9C, #475C9C, #5169AD, #526CB5, #5F80C9, #7395D4, #5F80C9, #5169AD, #475C9C, #485B9C)';
        body.style.backgroundSize = '300% 300%';
    } else if (sky_3.checked) {
        body.style.background = 'linear-gradient(#A3B9E8, #B5BDE8, #BBC3EE, #BBC9F3, #BED3F0, #BED3F0,#BDCFF3, #C2D6F1, #D6E5FC, #DAE9FD, #E4E7FD, #DAE9FD, #D6E5FC, #C2D6F1, #BDCFF3, #BED3F0, #BBC9F3, #BBC3EE, #B5BDE8, #A3B9E8)';
        body.style.backgroundSize = '300% 300%';
    } else {
        body.style.background = 'linear-gradient(#485B9C, #475C9C, #5169AD, #526CB5, #5F80C9, #7395D4, #96B4E5, #A3B9E8, #B5BDE8, #BBC3EE, #BBC9F3, #BED3F0,#BDCFF3, #C2D6F1, #D6E5FC, #DAE9FD, #E4E7FD, #E0E9FE, #DEEBFE, #E0E9FE,  #E4E7FD, #DAE9FD, #D6E5FC, #C2D6F1, #BDCFF3, #BED3F0, #BBC9F3, #BBC3EE, #B5BDE8, #A3B9E8, #96B4E5, #7395D4, #5F80C9, #5169AD, #475C9C, #485B9C)';
        body.style.backgroundSize = '1000% 1000%';
    }
}
