let tl=gsap.timeline()

function loading(){
    let a=0
    setInterval(function (){
    a=a+Math.floor(Math.random()*25)
    
    if(a<100){
        document.querySelector("#loader h1").innerHTML=a+"%"
    }

    else{
        a=100
        document.querySelector("#loader h1").innerHTML=a+"%"
    }

    },150)
}


tl.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    onStart:loading()
})

tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1,
    opacity:0
})
tl.to("#page1 h2",{
     transform:"translateX(-100%)",
     fontWeight:100,
     scrollTrigger:{
       trigger:"#page1",
       scroll:"body",
       scrub:2,
       pin:true,
       markers:true,
       start: "top 0%",
       end:"top -150%",
     }

})
