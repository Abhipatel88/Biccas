
// the below code animation :
function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  
  locomotiveScroll();


gsap.from(".page1 nav",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out"
},"a") 
gsap.from(".main-content .l h1,.main-content .l p,.main-content .l img,.main-content .l .but",{
    x:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out"
},"a")
gsap.from(".main-content .r ",{
    x:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out"
})
gsap.from(".main-content .r .box .mini-box,.main-content .r .box .mini-box2,.main-content .r .box .mini-box3,.main-content .r .box .mini-box4,.main-content .r .box .mini-box5,.main-content .r .box .mini-box6",{
    y:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out"
})
gsap.from(".second-content h1,.second-content .brands ",{
    y:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".second-content h1,.second-content .brands",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page2>.l ",{
    x:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page2 .l h1,.page2 .l p",
        start:"top 80%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page2>.page2-r .box ",{
    x:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page2 .l h1,.page2 .l p",
        start:"top 80%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page3>.top",{
    y:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page3>.top",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page3 .bot",{
    y:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page3 .bot",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})

gsap.from(".page4 .page4-l",{
    x:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page4 .page4-l",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page4 .page4-r",{
    x:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page4 .page4-r",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page5 .t",{
    y:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page5 .t",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page5 .b",{
    scale:0,
    y:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page5 .b",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page6 .top .top-l",{
    x:-150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page6 .top .top-l",
        start:"top 50%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page6 .top .top-r",{
    x:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page6 .top .top-r",
        start:"top 50%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})
gsap.from(".page6 .fot .fot-top,.page6 .fot .fot-bot",{
    y:150,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    ease:"power2.out",
    scrollTrigger: {
        trigger:".page6 .fot .fot-top,.page6 .fot .fot-bot",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 80%",
        // scrub:1,
        // markers:true,
        // markers: true,
    }
})