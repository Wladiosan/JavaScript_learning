var slider1 = {
    arrayImg: [],
    currentIndexImg: 0,
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    imgSlider: document.getElementById('imgSlider'),

    start: function (){
        this.arrayImg.push('img/1.png');
        this.arrayImg.push('img/2.jpg');
        this.arrayImg.push('img/3.png');

        //this.prevButton.addEventListener('click', this.onClickPrevButton);
        //this.nextButton.addEventListener('click', this.onClickNextButton);

        var that = this;
        this.prevButton.addEventListener('click', function (e){that.onClickPrevButton(e)});
        this.nextButton.addEventListener('click', function (e){that.onClickNextButton(e)});

        this.imgSlider.src = this.arrayImg[this.currentIndexImg];
        this.prevButton.disabled = true;
    },

    onClickPrevButton: function (e){
        this.currentIndexImg--;
        this.imgSlider.src = this.arrayImg[this.currentIndexImg];
        this.nextButton.disabled = false;
        if (this.currentIndexImg === 0){
            this.prevButton.disabled = true;
        }
    },

    onClickNextButton: function (e){
        this.currentIndexImg++;
        this.imgSlider.src = this.arrayImg[this.currentIndexImg];
        this.prevButton.disabled = false;
        if (this.currentIndexImg === (this.arrayImg.length - 1)){
            this.nextButton.disabled = true;
        }
    }
}