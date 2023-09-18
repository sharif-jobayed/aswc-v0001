

//Global Variables
const slides = document.querySelectorAll (".slide");
const dots = document.querySelectorAll (".dot");
const button_prev = document.querySelector ("#button_previous");
const button_next = document.querySelector ("#button_next");
let snd = 3;
var index = 0;

//Reset
function reset () {
	for (var v = 0; v < snd; v++) {
		slides[v].style.display = "none";
		dots[v].classList.remove ("active_dot");
		slides[v].classList.remove ("fade");
	};
};

//Post Actions
function post_actions () {
	slides[index].style.display = "block";
	dots[index].classList.add ("active_dot");
	slides[index].classList.add ("fade");
};

//Slide Previoius
function slide_prev () {
	reset ();
	index--;
	if (index < 0) {
		index = snd - 1;
		post_actions ();
	} else {
		post_actions ();
	};
};

//Slide Next
function slide_next () {
	reset ();
	index++;
	if (index >= snd) {
		index = 0;
		post_actions ();
	} else {
		post_actions ();
	};
};

//Button Events
button_prev.addEventListener ("click", slide_prev);
button_next.addEventListener ("click", slide_next);

//Auto Slide
function auto_slide () {
	reset ();
	slide_next ();

	setTimeout (auto_slide, 2500);
};
auto_slide ();