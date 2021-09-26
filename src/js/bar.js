const BAR_VALUES = [50, 25, 50];

const bars = document.querySelectorAll(".bar");

const handleBarSize = (bar, value) => {
	const barFiller = bar.querySelector(".bar__filler");

	if (barFiller) {
		barFiller.style.width = `${value}%`;
	}
};

bars.forEach((bar, idx) => {
	handleBarSize(bar, BAR_VALUES[idx]);
});
