(function menuBinding() {
    let submenus = document.querySelectorAll( '.main-menu .nav-menu ul > li' );
    submenus.forEach( submenu => {
        let trigger = submenu.querySelector( 'button' );
        let content = submenu.querySelector( 'ul' );
        trigger?.addEventListener( 'click', () => {
            if ( ! content.classList.contains( 'shown' ) ) {
                window.addEventListener('click', windowMenuHandle)
                closeAllMenus(submenus);
                openMenu(trigger, content);
                trigger?.setAttribute( 'aria-expanded', 'true' )
            } else {
                window.removeEventListener('click', windowMenuHandle)
                closeMenu(trigger, content);
                trigger?.setAttribute( 'aria-expanded', 'false' )

            }
        } )
    } )
    function openMenu(trigger, content) {
        content?.classList.add( 'shown' );
        trigger?.classList.add( 'selected' );
        
    }
    function closeMenu(trigger, content) {
        content?.classList.remove( 'shown' );
        trigger?.classList.remove( 'selected' );
    }
    function closeAllMenus(submenus) {
        submenus.forEach(menu => {
            let trigger = menu.querySelector( 'button' );
            let content = menu.querySelector( 'ul' );
            trigger?.setAttribute( 'aria-expanded', 'false' )
            closeMenu(trigger, content);
        })
    }
    function windowMenuHandle(e) {
        if ( !document.querySelector( '.main-menu .nav-menu > ul' ).contains(e.target) ) {
            closeAllMenus(submenus)
        }
    }
})();