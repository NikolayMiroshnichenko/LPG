const mapsMarker = document.querySelector('.activity-list__maps');
const marker = document.querySelector('.activity-chernigov');

mapsMarker.addEventListener('mouseover', (e) => {
    marker.classList.add('activity-chernigov-activ');
});
mapsMarker.addEventListener('mouseout', (e) => {
    marker.classList.remove('activity-chernigov-activ');
})
