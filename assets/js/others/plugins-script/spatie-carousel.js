(() => {
	// Spatie carousel pagination styling
	const splites = document.querySelectorAll(".splide");
	if (splites) {
		splites.forEach((element) => {
			console.log(element);
			const paginationSpace = parseInt(
				element.dataset.paginationTopSpace
			);
			if (paginationSpace) {
				setTimeout(() => {
					const pagination = element.querySelector(
						".splide__pagination"
					);
					pagination.style.bottom = `-${paginationSpace}px`;
				}, 100);
			}
		});
	}
})();
