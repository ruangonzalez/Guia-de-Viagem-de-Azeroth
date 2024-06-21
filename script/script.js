document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');
    const threshold = 0.1;

    function elementInView(el, threshold) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * threshold
        );
    }

    function handleScroll() {
        elements.forEach((el, index) => {
            if (elementInView(el, threshold)) {
                setTimeout(() => {
                    el.classList.add('visible');
                    el.classList.remove('hidden');
                }, index * 100); 
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("botao-noticias").addEventListener("click", function() {
        document.getElementById("news").scrollIntoView({ behavior: 'smooth' });
    });   
});
document.addEventListener('DOMContentLoaded', function() {
    var botao_home = document.getElementById("botao-home");
    function checkScrollPosition() {
        var topo = window.scrollY === 0 || document.documentElement.scrollTop === 0;
        botao_home.addEventListener("click", function() {
            if (topo) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = '/';
            }
        });
    }
    checkScrollPosition();
});
function getParameters() {

    var params = new Array();
    var paramsRet = new Array();
    var url = window.location.href;
    var paramsStart = url.indexOf("?");

    if(paramsStart != 1) {
        var paramString = url.substring(paramsStart + 1);
        paramString = decodeURIComponent(paramString);
        var params = paramString.split("&");
        for(var i = 0; i < params.length; i++) {
            var pairArray = params[i].split("=");
            if(pairArray.length == 2) {
                paramsRet[pairArray[0]] = pairArray[1];
            }
        }
        return paramsRet;
    }
    return null;
}