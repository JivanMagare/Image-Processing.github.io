

let getImage = document.getElementById('ImageFile');
let setNewImage = document.getElementById('setImage');

getImage.addEventListener('change', function() {
  
   let file = this.files[0];

   if(file){
       let reader = new FileReader();
      
       reader.readAsDataURL(file);

       reader.addEventListener('load', function(){
           setNewImage.setAttribute('src',this.result);
       });
   }
});

let getRange = document.querySelectorAll('.range');

for(let i=0;i<getRange.length;i++){
    getRange[i].addEventListener('input',AddEffect);
}


function AddEffect(){

    let grayscale = document.getElementById('grayscale');
        let blur = document.getElementById('blur');
        let huerotate = document.getElementById('hue-rotate');
        let sepia = document.getElementById('sepia');

        let grayscale_value = grayscale.value;
        let blur_value = blur.value;
        let huerotate_value = huerotate.value;
        let sepia_value = sepia.value;

        setNewImage.style.filter = 'grayscale('+grayscale_value+'%) blur('+blur_value+'px) hue-rotate('+huerotate_value+'deg) sepia('+sepia_value+'%)';

        let zoom = document.getElementById('zoom');
        let zoom_value = zoom.value;

        let rotate = document.getElementById('rotate');
        let rotate_value = rotate.value;

        let skewY = document.getElementById('skewY');
        let skewY_value = skewY.value;

        let skewX = document.getElementById('skewX');
        let skewX_value = skewX.value;


        if( zoom_value == 30 ){
            document.getElementById('zoomValue').value=`${parseInt(zoom_value * 3.3 + 1)}%`;
        }else{
            document.getElementById('zoomValue').value=`${parseInt(zoom_value * 3.3 )}%`;
        }

        
        setNewImage.style.transform='scale('+parseFloat(zoom_value)/10 +') rotate('+rotate_value+'deg) skewY('+skewY_value+'deg) skewX('+skewX_value+'deg)';

        document.getAnimations(skewYValue).value=`${skewX_value}deg`;
        document.getElementById('skewYValue').value=`${skewY_value}deg`;
        document.getElementById('rotateValue').value=`${rotate_value}deg`;
        document.getElementById('gsValue').value=`${grayscale_value}%`;
        document.getElementById('blurValue').value=`${blur_value * 10}px`;
        document.getElementById('huerotateValue').value=`${huerotate_value}deg`;
        document.getElementById('sepiaValue').value=`${sepia_value}%`;

}

function hover(){
    let getbtn = document.getElementById('btn');

    getbtn.style='transition: all 1s ease;';
}

let getSlider = document.getElementById('SliderRange');

getSlider.addEventListener('reset', () => {
    getSlider.reset();

    setTimeout(() => {
        AddEffect();
    },0);
});


let getBorderRadius = document.getElementById('borderRadius');
let borderValue = document.getElementById('borderR');

getBorderRadius.addEventListener('click', (e) => {
    setNewImage.style='border-radius:'+parseInt(borderValue.value)+'px';
    e.preventDefault();
});

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');

one.addEventListener('click', ()=>{
    setNewImage.setAttribute('src','image/alien.jpg');
});

two.addEventListener('click', ()=>{
    setNewImage.setAttribute('src','image/TheHobbit.jpg');
});

three.addEventListener('click', ()=>{
    setNewImage.setAttribute('src','image/venom.jpg');
});

four.addEventListener('click', ()=>{
    setNewImage.setAttribute('src','image/worldwarz.jpg');
});


let getCheckBox = document.getElementById('CheckBox');

getCheckBox.addEventListener('click', () => {
    
    if(getCheckBox.checked){
        setNewImage.style =`image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;`;

        document.getElementById("sharper").style="color: cyan;";
    }else{
        setNewImage.style =`image-rendering: none;
        image-rendering: none;
        image-rendering: none;`;

        document.getElementById("sharper").style="color: gray;";
    }
})


