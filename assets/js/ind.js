// Calcula a largura de um elemento.
function width (width) {return width.innerWidth || width.clientWidth || document.documentElement.clientWidth;}
// Calcula a altura de um elemento.
function height (height) {return height.innerHeight || height.clientHeight || document.documentElement.clientHeight;}
// Recupera a distância do topo ao fazer scroll.
function scrollTopPosition (scrollTopPosition) {return scrollTopPosition.scrollTop || document.documentElement.scrollTop;}
// Recupera a distância de um elemento para o topo.
function distTop (distTop) {return distTop.offsetTop;}
// Recupera uma contagem X
function length (length) {return length.length;}
// Recupera uma nova data
function newDate () {return new Date();}
// Recupera um seletor
function selectorTarget (target) {return document.querySelector(target);}
// Recupera vários seletores
function selectorsTarget (target) {return document.querySelectorAll(target);}
// Set Local Storage
function setLocalStorage (key, value){return localStorage.setItem(key, value);}
// Get Local Storage
function getLocalStorage (key){return localStorage.getItem(key);}
// Remove Local Storage
function removeLocalStorage (key){return localStorage.removeItem(key);}
// Set Session Storage
function setSessionStorage (key, value){return sessionStorage.setItem(key, value);}
// Get Session Storage
function getSessionStorage (key){return sessionStorage.getItem(key);}
// Remove Session Storage
function removeSessionStorage (key){return sessionStorage.removeItem(key);}
// Remove All Session Storage
function removeAllSessionStorage (){return sessionStorage.clear();}
// Notification
function notifyMe(title, icon, body, link) {
  if (Notification.permission !== "granted")
      Notification.requestPermission();
  else {
    let notification = new Notification(title, {icon: icon, body: body,});
    notification.addEventListener('click', () => {window.open(link);});
  }
};
// Fechar com a tecla ESQ
function esqClose (target, classTarget = "close-default"){
  window.addEventListener('keypress', (event) => {
    let key = event.keyCode || event.which;
    if(key === 27) {target.classList.add(classTarget)}
  });
};
/*
	Função para limitar o tamanho do container.
 	Para limitar basta adiciona no elemento data-limit="VALOR";
*/
(function limitContentCalc (){
	let selectors, dataLimit, widthBody, i;

	selectors 		= selectorsTarget("div, section, article, main, header, footer, aside, span, nav");
	widthBody 	= width(document.body || document.documentElement);
	i = 0;

	while( selectors[i] ) {
		dataLimit 	= selectors[i].getAttribute("data-limit");
		if (dataLimit)
			(widthBody <= dataLimit) ? (
				selectors[i].style.maxWidth = "100%",
				selectors[i].style.width = "100vw",
				selectors[i].style.padding = "0 1.5rem"
			) : (
				selectors[i].style.maxWidth = dataLimit + "px",
				selectors[i].style.padding = "0",
				selectors[i].style.width = "100vw",
				selectors[i].style.margin = "0 auto"
			)
			window.addEventListener('resize', () => {
				widthBody = width(document.body || document.documentElement);
				i = 0;
				while( selectors[i] ){
					dataLimit 	= selectors[i].getAttribute("data-limit");
					if (dataLimit)
						(widthBody <= dataLimit) ? (
							selectors[i].style.maxWidth = "100%",
							selectors[i].style.width = "100vw",
							selectors[i].style.padding = "0 1.5rem"
						) : (
							selectors[i].style.maxWidth = dataLimit + "px",
							selectors[i].style.padding = "0",
							selectors[i].style.width = "100vw",
							selectors[i].style.margin = "0 auto"
						)
					i++;
				}
			})//Fechamento do window
		i++;
	}
}());
/*
	Função que recupera o ano atual
	Para funcionar basta aplicar a classe _current-year onde quiser
*/
(function currentYear (){
	let _currentYear = selectorsTarget("._current-year");
	for(let i = 0; i < length(_currentYear); i++){_currentYear[i].innerText = newDate().getFullYear();}
}());
/*
	Galeria
 	Para funcionar deve adicionar essas duas classes abaixo
 	owl-carousel owl-theme
 	Página de exemplos https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
 	Exemplo de uso: Galeria pode ser usada para lista de clientes por ícones
*/
$('._gal-itens').owlCarousel({
	autoplay: true,
    loop:true,
    items: 5,
    lazyLoad:true,
    margin:10,
    dots: true,
    nav: false,
    // navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
	    0 : {
	    	items: 1,
	    	margin:10
	    },
	    480 : {items: 2},
	    768 : {itens: 4}
	}
});
