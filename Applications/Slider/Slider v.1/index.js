var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var imgSlider = document.getElementById('imgSlider');

var arrayImg = [];
arrayImg.push('img/1.png');
arrayImg.push('img/2.jpg');
arrayImg.push('img/3.png');

prevButton.addEventListener('click', onClickPrevButton);
nextButton.addEventListener('click', onClickNextButton);

var currentIndexImg = 0;
imgSlider.src = arrayImg[currentIndexImg];
prevButton.disabled = true;

function onClickPrevButton (){
    currentIndexImg--;
    imgSlider.src = arrayImg[currentIndexImg];
    nextButton.disabled = false;
    if (currentIndexImg === 0){
        prevButton.disabled = true;
    }

}

function onClickNextButton (){
    currentIndexImg++;
    imgSlider.src = arrayImg[currentIndexImg];
    prevButton.disabled = false;
    if (currentIndexImg === (arrayImg.length - 1)){
        nextButton.disabled = true;
        console.log('work');
    }
}