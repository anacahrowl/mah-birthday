const card = document.querySelector('.card_inner')

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped')
})

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}
