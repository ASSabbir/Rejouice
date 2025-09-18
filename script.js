
const curser=()=>{
   
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
    const tl=gsap.timeline()
    tl.from('.loader h1',{
        x:50,
        opacity:0,
        stagger:0.1,
        duration:0.8
    })
    tl.to('.loader h1',{
        x:-20,
        opacity:0,
        stagger:0.1,
        delay:0.2
    })
    tl.to('.loader',{
        opacity:0,
        duration:0.5
    })
    tl.to('.loader',{
        display:'none',
        duration:0.1
    })
    tl.from('#menu',{
        x:100,
        opacity:0,
        ease: "power1.out",
        duration:0.5,
        
    })
    tl.from('#rijoy span',{
        y:200,
        stagger:0.1,
        opacity:0
    },"-=0.5")
    tl.from('.headingTile span',{
        x:50,
        duration:1,
        delay:0.2,
        stagger:0.1,
        opacity:0
    },"-=1.4")
    gsap.from('.page1 video',{
        opacity:0,
        duration:4,
        
    })
    gsap.from('#rijoyFooter span',{
        y:100,
        stagger:0.1,
        opacity:0,
        scrollTrigger:{
            trigger:'#footerTrigger',
            start:'top 10%'
        }
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
const page2=(page,textBlack,TomorrowBrand)=>{
    gsap.to(`${page} hr`,{
        width:'100%',
        duration:2,
        scrollTrigger:{
            trigger:textBlack,
            scrub:1,
            start:'top 80%',
        }
    })
    gsap.from(`${TomorrowBrand} h1`,{
        y:20,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:textBlack,
            
            start:'top 80%',
        }
    })
    gsap.to(textBlack,{
        width:'100%',
        
        scrollTrigger:{
            trigger:textBlack,
            
            scrub:1,
            start:'top 60%',
            end:'top 0%'
        }
    })
}
const events=()=>{
    const divs=document.querySelectorAll('#cardContainer div')
    divs.forEach(div=>{
        // console.log(div.children[1])
        div.addEventListener('mouseenter',()=>{

            div.children[1].load()
            div.children[1].play()
        })
        
    })
}

navberDesign()
// locomotive()
curser()
page2('.page2','#text-black','#TomorrowBrand')
page2('.page5','#text-black2','#partner')
page2('.page7','#text-black3','#Strategy')
events()