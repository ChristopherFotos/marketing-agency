// buttons that will slide to specific position

class Slider {
    constructor(container, pictures, {slideDistance, loopAfter, forwardButton, backButton, autoSlide, setup,} = {}){

        this.forwardButton  = forwardButton
        this.backButton     = backButton
        this.container      = container
        this.pictures       = pictures
        this.offset         = 0
        this.slides         = []
        this.createPhotoContainer()
        
        if(this.pictures){
            this.addPictures()
            this.addButtonListeners()
        } else {
            this.sliderizeElements()
            this.addButtonListeners()
        }

        if(!slideDistance){ 
            this.slideDistance = this.container.getBoundingClientRect().width 
        } else if (slideDistance && loopAfter){
            this.customSlideDistance = slideDistance
            this.loopAfter = loopAfter + 1
        }

        if(autoSlide){ 
            setInterval(this.slideForward.bind(this), autoSlide) 
        }


        if(setup){ 
            if(typeof setup === 'function'){
                setup()
            }; 
            if(typeof setup === 'array'){
                setup.forEach(f => f())
        }}
 
        window.onresize = () => {
            this.slideDistance = this.container.getBoundingClientRect().width
            this.offset = 0
            this.slides.forEach(s=>{
                s.style.transform = `translateX(-${this.offset}px)`
            })
        }
    }

    createPhotoContainer(){
        this.container.style.display = 'flex'
        this.container.style.overflow = 'hidden'
    }

    addPictures(){
        this.pictures.forEach(p => {
            let img = document.createElement('img')
            img.src = p
            img.classList.add('slider_item')
            this.slides.push(img)
            this.container.appendChild(img)
        })
    }

    sliderizeElements(){
        let children = Array.from(this.container.children)

        children.forEach(c => {
            if(!c.dataset.noSlide){
                c.classList.add('slider_item')
                this.slides.push(c)
                console.log(c, this.slides)
            }
        })
    }

    slideForward(){
        
        function f(s){
            if(s.customSlideDistance){
                return {a: s.customSlideDistance, b: s.loopAfter}
            } else return {a: s.slideDistance, b: s.slides.length}
        } 


        if(this.offset < (f(this).a * f(this).b)) {
            this.offset += f(this).a
        }

        if(this.offset === f(this).a * f(this).b) {
            console.log('gfdsbgdffhghtrfse45wrgtsd')
            this.offset = 0
        }

        this.slides.forEach(s=>{
            s.style.transform = `translateX(-${this.offset}px)`
        })
    }

    slideBackward(){
        console.log('running slideBackward')
        if(this.offset > 0) {
        this.offset -= this.slideDistance
    
        this.slides.forEach(s=>{
            console.log('applying offset')
            s.style.transform = `translateX(-${this.offset}px)`
        })}
    }

    addButtonListeners(){
        console.log('running', this.forwardButton, this.backButton)
        if(this.forwardButton){
            
            this.forwardButton.addEventListener('click', e => {
            this.slideForward()
        })}

        if(this.forwardButton){
            this.backButton.addEventListener('click', e => {
            this.slideBackward()
        })}
    }
}
