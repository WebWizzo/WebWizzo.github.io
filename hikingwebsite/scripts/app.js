const locations = document.querySelectorAll('.location');

locations.forEach((location, i) => {
    setTimeout(() => {
        location.classList.add('addSlideIn');
    }, i * 1000)
})


const caroselItems = [...document.querySelectorAll('.popularWalk')];
caroselItems.forEach(item => {
    item.addEventListener('click', function() {
        caroselItems.forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
})