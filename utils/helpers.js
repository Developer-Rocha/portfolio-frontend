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
