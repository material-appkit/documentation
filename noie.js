let isIE = /*@cc_on!@*/true || !!document.documentMode;

if (window.location.pathname !== '/noie' && isIE) {
    window.location = '/noie'; //URL to redirect to
}