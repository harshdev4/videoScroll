const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.currentTime = 0;
            entry.target.play();
        }
        else entry.target.pause();
    })
}, {
    threshold: 0.8
});


const sound = () => {
    sections.forEach(video => {
        video.muted = !(video.muted);
        video.nextElementSibling.children[0].setAttribute('class', `fa-solid ${video.muted ? 'fa-volume-xmark' : 'fa-volume-high'}`);
    });
}

const container = document.querySelector('.videoContainer');

for (let index = 0; index < 4; index++) {
    const videoWrapper = document.createElement('div');
    videoWrapper.classList.add('videoWrapper');

    const video = document.createElement('video');
    video.src = `./assets/video${index+1}.mp4`;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    const playDiv = document.createElement('div');
    playDiv.classList.add('play');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-volume-xmark');
    icon.onclick = sound;

    container.appendChild(videoWrapper);

    videoWrapper.appendChild(video);
    videoWrapper.appendChild(playDiv);

    playDiv.appendChild(icon);

}

const sections = document.querySelectorAll('.videoWrapper > video');

sections.forEach(video => {
    observer.observe(video);
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    })
});