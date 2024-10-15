const cardContainers = [...document.querySelectorAll('.slide-content')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.prev-btn')];
const picContainers = [...document.querySelectorAll('.pic-content')];
const forwardBtn = [...document.querySelectorAll(".forward-btn")];
const backBtn = [...document.querySelectorAll(".back-btn")];
const videoContainers = [...document.querySelectorAll('.video-content')];
const nexBtn = [...document.querySelectorAll(".nex-btn")];
const bckBtn = [...document.querySelectorAll(".bck-btn")];


cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
});

picContainers.forEach((item, i) => {
    let picContainerDimensions = item.getBoundingClientRect();
    let picConteinerWidth = picContainerDimensions.width;

    forwardBtn[i].addEventListener('click', () => {
        item.scrollLeft += picConteinerWidth;
    })
    backBtn[i].addEventListener('click', () => {
        item.scrollLeft -= picConteinerWidth;
    })
})
videoContainers.forEach((item, i) => {
    let videoContainerDimensions = item.getBoundingClientRect();
    let videoConteinerWidth = videoContainerDimensions.width;

    nexBtn[i].addEventListener('click', () => {
        item.scrollLeft += videoConteinerWidth;
    })
    bckBtn[i].addEventListener('click', () => {
        item.scrollLeft -= videoConteinerWidth;
    })
})