function openNav(){
    document.querySelector('.leftbox').classList.add('opened');
}

function closeNav(){
    if(document.querySelector('.leftbox').classList.contains('opened')){
        document.querySelector('.leftbox').classList.remove('opened');
    }
}

function getData(){
    return '<div class="card focusable"></div>' + '<div class="card focusable"></div>' + '<div class="card focusable"></div>';
}