let lastScrollPosition = 0;
let ticking = false;

function update(scrollPosition) {
    
}

window.addEventListener('scroll', (e) => {
    lastScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            update(lastScrollPosition);
            ticking = false;
        });
    }

    ticking = true;
});

var statsLink = document.querySelector('#stats');
var projectsLink = document.querySelector('#projects');
var agileProjectsLink = document.querySelector('#agile-projects-link');
var emailMarketingLink = document.querySelector('#email-marketing-link');
var videosLink = document.querySelector('#videos-link');
var coming2017 = document.querySelector('#coming-2017-link');

statsLink.addEventListener('click', function() {
    window.location.hash('#stats');
});

projectsLink.addEventListener('click', function() {
    window.location.hash('#projects');
});

agileProjectsLink.addEventListener('click', function() {
    window.location.hash('#agile-projects');
});

emailMarketingLink.addEventListener('click', function() {
    window.location.hash('#email-marketing');
});

videosLink.addEventListener('click', function() {
    window.location.hash('#videos');
});

coming2017.addEventListener('click', function() {
    window.location.hash('#coming-2017');
});