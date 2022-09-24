(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')]
    const buttonNext = document.querySelector('#next')
    const buttonBefore = document.querySelector('#before')
    
    buttonNext.addEventListener('click',()=>{
        changePosition(1)
    })

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1)
    })

    let changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id

        console.log(currentTestimony)
        console.log(add)
    }
})()


