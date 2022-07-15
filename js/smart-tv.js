window.addEventListener('load', function() {
    const SN = SpatialNavigation;
    let leftbox = document.querySelector('.leftbox'),
        rightbox = document.querySelector('.rightbox');

    SN.init();

    SN.add({
        id: 'menu',
        selector: '.leftbox .focusable',
        enterTo: 'last-focused'
    });

    SN.add({
        id: 'content',
        selector: '.rightbox .focusable'
    });

    document.querySelectorAll(".leftbox .focusable").forEach(function(leftitem, i, arr) {
        
        leftitem.addEventListener('sn:willfocus', function() {

            SN.pause();       
            SN.focus(this);
            SN.resume();       
    
            return false;
        });

        leftitem.addEventListener('sn:focused', function() {

            document.querySelector('.leftbox .focusable.checked').classList.remove('checked');

            openNav();

            this.classList.add('checked');

            document.getElementById("main").innerHTML = getData(this.dataset.id, 8);

            SN.makeFocusable();
        });

        leftitem.addEventListener('sn:unfocused', function() {
            closeNav();
        });
        
    });
    
    SN.makeFocusable();
    SN.focus();

    leftbox.addEventListener('mouseover', function() {
        openNav();
    });

    rightbox.addEventListener('mouseover', function() {
        closeNav();
    });

})