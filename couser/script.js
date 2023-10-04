let tl=gsap.timeline()

tl.from("#nav-img, #nav-main, #nav-signin", {
   y:-100,
   delay:0.5,
   opacity:0,
   stagger:0.3,
})

tl.from("#left h1", {
    x:-500,
    opacity:0,
    stagger:0.3,
 })

 tl.from("#right img",{
    scale:0.5,
    opacity:0,
})

tl.from("#page2 .box ",{
 opacity:0,
 stagger:0.2,
 scale:1.2,
 scrollTrigger:{
    trigger:"#page2 .box",
    scroll:"body",
    scrub:5,
    start: "top 70%",
    end:"top 20%",
    markers:true,
 }


})