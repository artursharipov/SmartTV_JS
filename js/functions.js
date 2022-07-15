function openNav(){
    document.querySelector('.leftbox').classList.add('opened');
    document.querySelector('.rightbox').classList.add('shift');
}

function closeNav(){
    if(document.querySelector('.leftbox').classList.contains('opened')){
        document.querySelector('.leftbox').classList.remove('opened');
    }
    if(document.querySelector('.rightbox').classList.contains('shift')){
        document.querySelector('.rightbox').classList.remove('shift');
    }
}

function getData(id, count){
    let data = '';
    let src = id % 2 == 0 ? "2.jpg" : "1.jpg";

    for(let i=0; i < count; i++){
        data +='<div class="card focusable"><img src="img/'+src+'"></div>';
    }

    return data;
}