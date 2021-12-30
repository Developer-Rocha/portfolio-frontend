export const normalizeUrlAliases = (url) => {
    let reg1 = new RegExp(/\/pt-pt\//g);
    let reg2 = new RegExp(/\//g);

    if (reg1.test(url)) {
        return url.replace(/\/pt-pt\//g, '');
    }
    else if (reg2.test(url)) {
        return url.replace(/\//g, '');
    }
    else {
        return url
    }
}

export const handleScrollTo = (e, hash = false) => {
    e.preventDefault();

    // ScrollTo event
    if( !hash ) {
        var hash = e.currentTarget.children[0].hash;
    }

    let elementPos = document.querySelector(hash).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })


    // Toggle Menu on mobile event
    let body = document.getElementsByTagName('body')[0];

    if(body.classList.contains('mobile-nav-active')) {
        let navbarToggle = document.getElementsByClassName('mobile-nav-toggle');
        navbarToggle[0].classList.toggle('bi-list');
        navbarToggle[0].classList.toggle('bi-x');
        body.classList.remove('mobile-nav-active');
    }
}
