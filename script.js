const locomotive = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
const curser=()=>{
    console.log('jkhnkjh')
    document.querySelector('.page1').addEventListener('mousemove', (e) => {
        gsap.to('#curser', {
            opacity: 1,
            x: e.x,
            y: e.y,
            duration: 0.5,
            ease: "power1.out",
        })
    })
    document.querySelector('.page1').addEventListener('mouseenter', (e) => {
        gsap.to('#curser', {
            opacity: 1,
            scale: 1
    
        })
    })
    document.querySelector('.page1').addEventListener('mouseleave', (e) => {
        gsap.to('#curser', {
            opacity: 0,
            scale: 0
    
        })
    })
    gsap.from('#menu',{
        x:100,
        opacity:0,
        ease: "power1.out",
        duration:1,
        delay:0.2,
    })
    gsap.from('#rijoy span',{
        y:200,
        stagger:0.1,
        opacity:0
    })
    gsap.from('.headingTile span',{
        x:50,
        duration:1,
        delay:0.2,
        stagger:0.1,
        opacity:0
    })
    gsap.from('.page1 video',{
        opacity:0,
        duration:4,
        
    })
}

const navberDesign = () => {
    document.querySelector('#menu').addEventListener('click', () => {

        gsap.to('#navber', {
            y: '70vw',
            ease: CustomEase.create('custom', '0.87, 0, 0.13, 1'),
            duration: 0.8
        })

        gsap.to('#nav2nd h1', {
            opacity: 1,
            delay: 0.4,
            stagger: 0.1,
            y: -50,

        })


        gsap.from('#navber video', {
            scale: 0,
            duration: 0.8,
            delay: 0.4
        })
        gsap.from('#menuBttom', {
            y: 100,
            delay: 0.6,
            opacity: 0
        })
        gsap.from('#close', {
            scale: 0,
            y: 100,

            delay: 0.5
        })
        gsap.from('#heading', {
            scale: 0,
            delay: 0.5,
            x: -300
        })

    })
    document.querySelector('#close').addEventListener('click', () => {

        gsap.to('#navber', {
            y: '35vw',
            ease: CustomEase.create('custom', '0.87, 0, 0.13, 1'),
            duration: 0.8,
            delay: 0.3
        })
        gsap.to('#nav2nd h1', {
            y: 20,
            opacity: 0,

            stagger: -0.04
        })
        gsap.to('#navber video', {

        })



    })
}
const page2=()=>{
    gsap.to('.page2 hr',{
        width:'100%',
        duration:2,
        scrollTrigger:{
            trigger:'#text-black',
            scrub:1,
            start:'top 80%',
        }
    })
    gsap.from('#TomorrowBrand h1',{
        y:20,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#text-black',
            
            start:'top 80%',
        }
    })
    gsap.to('#text-black',{
        width:'100%',
        
        scrollTrigger:{
            trigger:'#text-black',
            
            scrub:1,
            start:'top 60%',
            end:'top 0%'
        }
    })
}
navberDesign()
// locomotive()
curser()
page2()