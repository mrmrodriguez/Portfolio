let nameFill = document.querySelector('input[type=text]');
let emailFill = document.querySelector('input[type=email]');
let textArea = document.querySelector('textarea');

document.addEventListener("click", function(event){
	if(event.target.closest("input[type=text")){
		nameFill.style.borderBottom = "2px solid #6894ca";
        nameFill.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
	}else{
		nameFill.style.borderBottom = "1px solid #ddd";
		nameFill.style.boxShadow = "none";
	}
});

document.addEventListener('click', function(event){
    if(event.target.closest('input[type=email]')){
        emailFill.style.borderBottom = "2px solid #6894ca";
        emailFill.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
    } else {
        emailFill.style.borderBottom = "1px solid #ddd";
        emailFill.style.boxShadow = "none";
    }
});

document.addEventListener("click", function(event){
	if(event.target.closest("textarea")){
		textArea.style.borderBottom = "2px solid #6894ca";
        textArea.style.boxShadow = "0 6px 6px -6px rgba(34, 34, 34, 0.8)";
    } else {
        textArea.style.borderBottom = "1px solid #ddd";
        textArea.style.boxShadow = "none";
    }
});

function clearContents(e) {
    e.value = '';
}

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800
});
