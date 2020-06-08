(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll(`.scroll`);
	links.forEach(link => link.onclick = scrollAnchors;)
}
