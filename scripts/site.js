const showcases = document.querySelectorAll(".showcase[id]");
const waypoints = [];

showcases.forEach(showcase => {
    const waypoint = new Waypoint({
        element: showcase,
        handler: function() {
            updateCurrent(this.element.id);
        }
    });
    waypoints.push(waypoint);
});

function updateCurrent(id) {
    const oldEl = document.querySelector(".main-nav__link--current");
    const newEl = document.querySelector(`[href='#${id}']`);

    if (oldEl !== null) {
        oldEl.classList.remove("main-nav__link--current");
        oldEl.classList.add("main-nav__link");
    }

    if (newEl !== null) {
        newEl.classList.remove("main-nav__link");
        newEl.classList.add("main-nav__link--current");
    }
}