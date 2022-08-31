class Slider {
	constructor(
		container,
		pictures,
		{
			slideDistance,
			loopAfter,
			forwardButton,
			backButton,
			autoSlide,
			setup,
		} = {}
	) {
		this.forwardButton = forwardButton;
		this.backButton = backButton;
		this.container = container;
		this.pictures = pictures;
		this.offset = 0;
		this.slides = [];
		this.createPhotoContainer();

		if (this.pictures) {
			this.addPictures();
			this.addButtonListeners();
		} else {
			this.sliderizeElements();
			this.addButtonListeners();
		}

		if (!slideDistance) {
			console.log('SETTING SLIDE DISTANCE');
			this.slideDistance = this.container.getBoundingClientRect().width;
		} else if (slideDistance && loopAfter) {
			console.log('SETTING SLIDE DISTANCE');
			this.customSlideDistance = slideDistance;
			this.loopAfter = loopAfter + 1;
		}

		if (autoSlide) {
			setInterval(this.slideForward.bind(this), autoSlide);
		}

		if (setup) {
			if (typeof setup === 'function') {
				setup();
			}
			if (typeof setup === 'array') {
				setup.forEach((f) => f());
			}
		}

		window.onresize = () => {
			this.slideDistance = this.container.getBoundingClientRect().width;
			this.offset = 0;
			this.slides.forEach((s) => {
				s.style.transform = `translateX(-${this.offset}px)`;
			});
		};
	}

	createPhotoContainer() {
		this.container.style.display = 'flex';
		this.container.style.overflow = 'hidden';
	}

	addPictures() {
		this.pictures.forEach((p) => {
			let img = document.createElement('img');
			img.src = p;
			img.classList.add('slider_item');
			this.slides.push(img);
			this.container.appendChild(img);
		});
	}

	sliderizeElements() {
		let children = Array.from(this.container.children);

		children.forEach((c) => {
			if (!c.dataset.noSlide) {
				c.classList.add('slider_item');
				this.slides.push(c);
			}
		});
	}

	slideForward() {
		console.log(this.offset);
		function findSlideshowLength(s) {
			if (s.customSlideDistance) {
				return {
					slideDistance: s.customSlideDistance,
					maximumSlides: s.loopAfter,
				};
			} else
				return {
					slideDistance: s.slideDistance,
					maximumSlides: s.slides.length,
				};
		}

		if (
			this.offset <
			findSlideshowLength(this).slideDistance *
				findSlideshowLength(this).maximumSlides
		) {
			this.offset += findSlideshowLength(this).slideDistance;
		}

		if (
			this.offset ===
			findSlideshowLength(this).slideDistance *
				findSlideshowLength(this).maximumSlides
		) {
			this.offset = 0;
		}

		this.slides.forEach((s) => {
			s.style.transform = `translateX(-${this.offset}px)`;
		});
	}

	slideBackward() {
		console.log(this.offset);
		console.log('running slideBackward');
		if (this.offset > 0) {
			this.offset -= this.slideDistance || this.customSlideDistance;
			console.log(this.offset);

			this.slides.forEach((s) => {
				console.log('applying offset');
				s.style.transform = `translateX(-${this.offset}px)`;
			});
		}
		console.log(this.offset);
	}

	addButtonListeners() {
		console.log('running', this.forwardButton, this.backButton);
		if (this.forwardButton) {
			this.forwardButton.addEventListener('click', (e) => {
				this.slideForward();
			});
		}

		if (this.forwardButton) {
			this.backButton.addEventListener('click', (e) => {
				this.slideBackward();
			});
		}
	}
}
