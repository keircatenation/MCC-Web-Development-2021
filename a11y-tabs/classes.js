(function tabs(){
    class Tabs {
        constructor(tablist) {
            this.tablist = tablist;
            this.tabs = Array.from(tablist.querySelectorAll('[role=tab]'));
            this.firstTab = tabs[0];
            this.lastTab = tabs[tabs.length - 1];
            this.tabpanels = tablist.parentElement.querySelectorAll('[role=tabpanel]');
            for (let i = 0; i < this.tabs.length ; i++) {
                let tab = this.tabs[i];
                tab.addEventListener('keydown', this.onKeydown.bind(this));
                tab.addEventListener('click', this.onClick.bind(this));
            }
        }
        moveFocusToTab(tab) {
            tab.focus();
        }
        moveFocusToNextTab(tab) {
            if (tab === this.lastTab) {
                this.moveFocusToTab(this.firstTab);
            } else {
                let index = this.tabs.indexOf(tab);
                this.moveFocusToTab(this.tabs[index+1]);
            }
        }
        moveFocusToPrevTab(tab) {
            if (tab === this.firstTab) {
                this.moveFocusToTab(this.lastTab);
            } else {
                let index = this.tabs.indexOf(tab);
                this.moveFocusToTab(this.tabs[index-1]);
            }
        }
        onClick(e) {
            this.setCurrentTab(e.currentTarget);
        }
        onKeydown(e) {
            let target = e.currentTarget;
            let flag = false;
            switch (e.key) {
                case 'ArrowLeft':
                    this.moveFocusToPrevTab(target);
                    flag = true;
                    break;
                case 'ArrowRight':
                    this.moveFocusToNextTab(target);
                    flag = true;
                    break;
                case 'Home':
                    this.moveFocusToTab(this.firstTab);
                    flag = true;
                    break;
                case 'End':
                    this.moveFocusToTab(this.lastTab);
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
        setCurrentTab(tab) {
            let newtabpanel = this.tablist.parentElement.querySelector(`#${tab.getAttribute('aria-controls')}`);
    
            for (let i = 0; i < this.tabs.length; i++) {
                let tab = this.tabs[i];
                tab.setAttribute( 'aria-selected', 'false' );
                tab.tabIndex = -1;
            }
            for (let i = 0; i < this.tabpanels.length; i++) {
                let panel = this.tabpanels[i];
                if ( ! panel.classList.contains('is-hidden')) {
                    panel.classList.add('is-hidden');
                }
            }
            newtabpanel.classList.remove('is-hidden');
            tab.setAttribute( 'aria-selected', 'true' );
            tab.removeAttribute('tabindex');
        }
    }
    // Now we get all the tablists and make a Tabs for each of them
    let tablists = document.querySelectorAll('[role=tablist]');
    if (tablists.length == 0) {
        return;
    }
    for (let i = 0; i < tablists.length; i++) {
        let tablist = tablists[i];
        new Tabs(tablist);
    }
})();