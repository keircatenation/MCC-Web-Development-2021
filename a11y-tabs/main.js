(function tabs(){
    let tablists = document.querySelectorAll('[role=tablist]');
    if (tablists.length == 0) {
        return;
    }
    for (let i = 0; i < tablists.length; i++) {
        let tablist = tablists[i];
        // Note: difference between Array and a NodeList
        let tabs = Array.from(tablist.querySelectorAll('[role=tab]'));
        let tabpanels = tablist.parentElement.querySelectorAll('[role=tabpanel]');

        // Array.forEach vs for loop
        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            tab.addEventListener('click', e => {
                setCurrentTab(e.target, tablist, tabs, tabpanels);
            })
            tab.addEventListener( 'keydown', e => {
                onKeydown(e, tabs);
            } )
        }
    }
    function setCurrentTab(tab, tablist, tabs, tabpanels) {
        let newtabpanel = tablist.parentElement.querySelector(`#${tab.getAttribute('aria-controls')}`);

        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            tab.setAttribute( 'aria-selected', 'false' );
            tab.tabIndex = -1;
        }
        for (let i = 0; i < tabpanels.length; i++) {
            let panel = tabpanels[i];
            if ( ! panel.classList.contains('is-hidden')) {
                panel.classList.add('is-hidden');
            }
        }
        newtabpanel.classList.remove('is-hidden');
        tab.setAttribute( 'aria-selected', 'true' );
        tab.removeAttribute('tabindex');
    }
    function onKeydown(e, tabs) {
        let target = e.currentTarget;
        let flag = false;
        switch (e.key) {
            case 'ArrowLeft':
                moveFocusToPrevTab(target, tabs);
                flag = true;
                break;
            case 'ArrowRight':
                moveFocusToNextTab(target, tabs);
                flag = true;
                break;
            case 'Home':
                moveFocusToTab(tabs[0]);
                flag = true;
                break;
            case 'End':
                moveFocusToTab(tabs[tabs.length-1]);
                flag = true;
                break;
            default:
                break;
        }
        if (flag) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    function moveFocusToTab(tab) {
        tab.focus();
    }
    function moveFocusToNextTab(tab, tabs) {
        if (tab === tabs[tabs.length-1]) {
            moveFocusToTab(tabs[0]);
        } else {
            let index = tabs.indexOf(tab);
            moveFocusToTab(tabs[index+1]);
        }
    }
    function moveFocusToPrevTab(tab, tabs) {
        if (tab === tabs[0]) {
            moveFocusToTab(tabs[tabs.length - 1]);
        } else {
            let index = tabs.indexOf(tab);
            moveFocusToTab(tabs[index-1]);
        }
    }
})();