gsap.from("#box1",{
    scale:0,
    rotation:360,
    delay:1,
    repeat:-1,
    yoyo:true,
    backgroundColor:"orange",
})

gsap.from("#box2",{
    scale:0,
    rotation:360,
   backgroundColor:"orange",
   scrollTrigger:{
    trigger:"#box2",
    scroll:"body",
    strat: "top 50%",
    end: "top 10%",
    scrub:5,
    markers:true,
   }
})
