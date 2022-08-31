let btn = document.getElementById('consultation-btn');
let sect = document.getElementById('sect-2');
let btmsect = document.getElementById('btm-sect');
let backbtn = document.getElementById('back-btn');
let cards = Array.from(document.getElementsByClassName('card'));
let starterSVG = document.getElementById('starter-svg');
let hustlerSVG = document.getElementById('hustler-svg');
let mvpSVG = document.getElementById('mvp-svg');
let starterTitle = document.getElementById('starter-title');
let hustlerTitle = document.getElementById('hustler-title');
let MVPTitle = document.getElementById('mvp-title');
let instruct = document.getElementById('instruct');
let hustlerDetails = document.getElementById('hustler-details');
let starterDetails = document.getElementById('starter-details');
let mvpDetails = document.getElementById('mvp-details');
let showInstructions = true;

btn.addEventListener('click', (e) => {
	document.body.style.overflowY = 'hidden';
	sect.classList.toggle('float-down');
	btmsect.classList.toggle('float-up');
});

backbtn.addEventListener('click', (e) => {
	sect.classList.toggle('float-down');
	btmsect.classList.toggle('float-up');
});

cards.forEach((c) => {
	c.addEventListener('click', (e) => {
		if (e.target.dataset.pkg === 'starter') {
			Array.from(document.getElementsByClassName('pull-left')).forEach((e) => {
				e.classList.toggle('pull-left');
			});

			Array.from(document.getElementsByClassName('pull-right')).forEach((e) => {
				e.classList.toggle('pull-right');
			});

			Array.from(document.getElementsByClassName('pull-up')).forEach((e) => {
				e.classList.toggle('pull-up');
			});

			starterSVG.classList.toggle('pull-right');
			starterTitle.classList.toggle('pull-left');
			instruct.classList.add('instruct-fade');
			setTimeout(() => starterDetails.classList.toggle('pull-up'), 900);
		}

		if (e.target.dataset.pkg === 'hustler') {
			Array.from(document.getElementsByClassName('pull-left')).forEach((e) => {
				e.classList.toggle('pull-left');
			});

			Array.from(document.getElementsByClassName('pull-right')).forEach((e) => {
				e.classList.toggle('pull-right');
			});

			Array.from(document.getElementsByClassName('pull-up')).forEach((e) => {
				e.classList.toggle('pull-up');
			});

			hustlerSVG.classList.toggle('pull-right');
			hustlerTitle.classList.toggle('pull-left');
			instruct.classList.add('instruct-fade');
			setTimeout(() => hustlerDetails.classList.toggle('pull-up'), 900);
		}

		if (e.target.dataset.pkg === 'mvp') {
			Array.from(document.getElementsByClassName('pull-left')).forEach((e) => {
				e.classList.toggle('pull-left');
			});

			Array.from(document.getElementsByClassName('pull-right')).forEach((e) => {
				e.classList.toggle('pull-right');
			});

			Array.from(document.getElementsByClassName('pull-up')).forEach((e) => {
				e.classList.toggle('pull-up');
			});

			mvpSVG.classList.toggle('pull-right');
			MVPTitle.classList.toggle('pull-left');
			instruct.classList.add('instruct-fade');
			setTimeout(() => mvpDetails.classList.toggle('pull-up'), 900);
		}
	});
});

let slider = new Slider(document.getElementsByClassName('sliderize')[0], null, {
	slideDistance: parseInt(
		document.getElementsByClassName('card')[0].getBoundingClientRect().width
	),
	loopAfter: 3,
	backButton: document.getElementById('backward'),
	forwardButton: document.getElementById('forward'),
});

// c.addEventListener('mouseleave', e=>{

//     if(e.target.dataset.pkg === 'starter'){
//         starterSVG.classList.toggle('pull-right')
//         starterTitle.classList.toggle('pull-left')
//         instruct.classList.toggle('instruct-fade')
//         starterDetails.classList.toggle('pull-up')
//     }

//     if(e.target.dataset.pkg === 'hustler'){
//         hustlerSVG.classList.toggle('pull-right')
//         hustlerTitle.classList.toggle('pull-left')
//         instruct.classList.toggle('instruct-fade')
//         hustlerDetails.classList.toggle('pull-up')
//     }

//     if(e.target.dataset.pkg === 'mvp'){
//         mvpSVG.classList.toggle('pull-right')
//         MVPTitle.classList.toggle('pull-left')
//         instruct.classList.toggle('instruct-fade')
//         mvpDetails.classList.toggle('pull-up')
//     }

// })
