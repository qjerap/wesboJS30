const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
panels.forEach(panel => panel.addEventListener('mouseout', toggleClose));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen(){
    this.classList.add('open');
}
function toggleClose(){
    this.classList.remove('open');
}

function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}