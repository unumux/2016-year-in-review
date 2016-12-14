require('waypoints/lib/noframework.waypoints.js'); 

const showcases = document.querySelectorAll(".showcase[id]");
const waypoints = [];
const links = document.querySelectorAll(".main-nav__link");

showcases.forEach(showcase => {
    const waypoint = new Waypoint({
        element: showcase,
        handler: function(direction) {
            identifyCurrent(this.element.id, direction);
        },

    });
    waypoints.push(waypoint);
});

function identifyCurrent(id, direction) {
    
    links.forEach((link, index) => {
        link.classList.remove("main-nav__link--current");
    });

    links.forEach((link, index) => {
        if(link.attributes.href.value === `#${id}`) {
            if(direction === "up") {
                const newLink = links[index - 1 >= 0 ? index - 1 : 0];
                setActiveLink(newLink);
            } else {
                console.log(link);
                setActiveLink(link);
            }
        }
    });
}


function setActiveLink(link) {
    link.classList.add("main-nav__link--current");
}