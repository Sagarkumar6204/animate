gsap.to("#page1 #box",{
    scale: 0,
    rotate: 360,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#page1 #box",
       scroller:'body',
       start: "top 50%",
       end:"top 30%",
       scrub:5

    }
})
gsap.to("#page2 #box",{
    scale: 0,
    rotate: -360,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2",
          scroller:'body',
       start: "top 50%",
       end:"top 30%",
       scrub:1
        
    }
})
gsap.to("#page3 #box",{
    scale: 0,
    rotate: -360,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "top center",
    }
})