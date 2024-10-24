function navAnimation() {
    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "21vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            // display:"block" ,
            y: 0,
            stagger: {
                amount: 0.4
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            // display:"block" ,
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bottom", {
            height: "0",
            duration: 0.1
        })
    })
}
navAnimation();

function mouseAnimation() {
    let rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {

        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1

            })
        })
        elem.addEventListener("mouseleave", function () {

            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0

            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 33,
                y: dets.y - elem.getBoundingClientRect().y - 125

            })

        })
    })

}
mouseAnimation();


//////////videoAnimation

let page3Center = document.querySelector(".page3-center")
let video = document.querySelector("#page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:" scaleX(0.9) scaleY(0.9)",
        opacity:1,
        borderRadius:0

    })

})
video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform:" scaleX(0) scaleY(0)",
        opacity:0,
        // borderRadius:0

    })

})

