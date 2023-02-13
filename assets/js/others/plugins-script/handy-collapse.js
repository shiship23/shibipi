const myAccrodion = new HandyCollapse({
	nameSpace: "hc",
	activeClass: "accordion-active",
	animationSpeed: 200,
	onSlideStart: (isOpen, contentID) => {
		document.querySelectorAll(`[data-hc-control='${contentID}']`);
	},
});

myAccrodion.open("content01");
