let tl= gsap.timeline()

tl.from("#nav-img,#nav-button,#nav-main",{
 
    y:-100,
    delay:0.1,
    optacity:0,
    stagger:0.3
})

tl.from(".left",{
 
    x:-1000,
    delay:0.1,
    optacity:0,
    scrub:3
  })

  tl.from(".right",{
 
    x:1000,
    delay:0.1,
    optacity:0,
    
  })

  
  tl.from("#img2,#img3,#img4,#img5",{
    optacity:1,
    scale:1,
})

