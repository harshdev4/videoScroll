const sections = document.querySelectorAll('.videoWrapper > video');

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
        video.nextElementSibling.children[0].setAttribute('class', `fa-solid ${video.muted ? 'fa-volume-xmark': 'fa-volume-high'}`);
    } );
}

sections.forEach(video => {
    observer.observe(video);
    video.addEventListener('click', ()=> {
       if (video.paused) {
        video.play();
       }
       else{
        video.pause();
       }
    })
});