const colorBack = document.getElementById('colorBackground');
const colorBlock = document.getElementById('colorBlock');
const Block = document.getElementById('block');

colorBack.addEventListener('input', function() {
  const selectedColor = colorBack.value;
  document.body.style.backgroundColor = selectedColor;
});

colorBlock.addEventListener('input', function() {
  const selectedColor = colorBlock.value;
  Block.style.backgroundColor = selectedColor;
});

//Ползунки ширины и высоты
const sliderW = document.getElementById('sliderwidth');
const block = document.getElementById('block');
const circleW = document.getElementById('circlewidth');
const sliderH = document.getElementById('sliderheight');
const circleH = document.getElementById('circleheight');

let isDraggingWidth = false;
let isDraggingHeight = false;

circleW.addEventListener('mousedown', function() {
  isDraggingWidth = true;
});

circleH.addEventListener('mousedown', function() {
  isDraggingHeight = true;
});

document.addEventListener('mousemove', function(event) {
  if (isDraggingWidth) {
    const sliderWidth = sliderW.offsetWidth;
    const mouseX = event.clientX - sliderW.offsetLeft;
    let newWidth = (mouseX / sliderWidth) * 100;

    if (newWidth < 0) {
        newWidth = 0;
    } else if (newWidth > 100) {
        newWidth = 100;
    }

    block.style.width = newWidth + '%';

    if (mouseX < 0) {
      circleW.style.left = '0px';
    } else if (mouseX > sliderWidth) {
      circleW.style.left = sliderWidth - 20 + 'px';
    } else {
      circleW.style.left = mouseX - 10 + 'px';
    }
  }

  if (isDraggingHeight) {
    const sliderHeight = sliderH.offsetWidth;
    const mouseX = event.clientX - sliderH.offsetLeft;
    let newHeight = (mouseX / sliderHeight) * 100;

    if (newHeight < 0) {
      newHeight = 0;
    } else if (newHeight > 100) {
      newHeight = 100;
    }

    block.style.height = newHeight + '%';

    if (mouseX < 0) {
      circleH.style.left = '0px';
    } else if (mouseX > sliderHeight) {
      circleH.style.left = sliderHeight - 20 + 'px';
    } else {
      circleH.style.left = mouseX - 10 + 'px';
    }
  }
});

document.addEventListener('mouseup', function() {
  isDraggingWidth = false;
  isDraggingHeight = false;
});
document.addEventListener('mousemove', function(event) {
  if (isDraggingWidth) {
    const sliderWidth = sliderW.offsetWidth;
    const mouseX = event.clientX - sliderW.offsetLeft;
    let newWidthPercent = (mouseX / sliderWidth) * 100;
    
    let newWidthPx = Math.round((newWidthPercent / 100) * window.innerWidth);
    
    block.style.width = newWidthPx + 'px';
    
    if (mouseX < 0) {
      circleW.style.left = '0px';
    } else if (mouseX > sliderWidth) {
      circleW.style.left = sliderWidth - 20 + 'px';
    } else {
      circleW.style.left = mouseX - 10 + 'px';
    }
  }

  if (isDraggingHeight) {
    const sliderHeight = sliderH.offsetWidth;
    const mouseX = event.clientX - sliderH.offsetLeft;
    let newHeightPercent = (mouseX / sliderHeight) * 100;
    
    let newHeightPx = Math.round((newHeightPercent / 100) * window.innerHeight);
    
    block.style.height = newHeightPx + 'px';
    
    if (mouseX < 0) {
      circleH.style.left = '0px';
    } else if (mouseX > sliderHeight) {
      circleH.style.left = sliderHeight - 20 + 'px';
    } else {
      circleH.style.left = mouseX - 10 + 'px';
    }
  }
});


//сброс
const body = document.getElementById('body');
const myBlock = document.getElementById('block');
const initialState = {
  backgroundColor: '#FFB979',
  borderRadius: '50px',
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
  width: '500px',
  height: '500px'
};

const initialStateBody = {
  backgroundColor: '#FFFFFF'
};

const initialStateSlider = {
  circleHLeft: 45,
  circleWLeft: 45,
  circleRoundingLeft: 45,
};

const initialStyles = getComputedStyle(myBlock);

function resetActions() {
  myBlock.style.backgroundColor = initialState.backgroundColor;
  myBlock.style.borderRadius = initialState.borderRadius;
  myBlock.style.boxShadow = initialState.boxShadow;
  myBlock.style.width = initialState.width;
  myBlock.style.height = initialState.height;

  body.style.backgroundColor = initialStateBody.backgroundColor;
  circleH.style.left = initialStateSlider.circleHLeft + '%';
  circleW.style.left = initialStateSlider.circleWLeft + '%';
  circleRounding.style.left = initialStateSlider.circleRoundingLeft + '%';

  colorBack.value = '#FF9142';
  colorBlock.value = '#FF9142';
  colorShadow.value = '#FF9142';
  horizontalInput.value = '5';
  verticalInput.value = '5';
  shadowInput.value = '10';
}

//скругление
const sliderRounding = document.getElementById('sliderRounding');
const circleRounding = document.getElementById('circleRounding');

let isDragging = false;
let sliderLeft = sliderRounding.getBoundingClientRect().left;
let sliderRight = sliderLeft + sliderRounding.offsetWidth;

circleRounding.addEventListener('mousedown', function() {
  isDragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    const sliderWidth = sliderRounding.offsetWidth;
    const circleWidth = circleRounding.offsetWidth;

    let mouseX = event.clientX - sliderRounding.getBoundingClientRect().left;
    let newLeft = mouseX - circleWidth / 2;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > sliderWidth - circleWidth) {
      newLeft = sliderWidth - circleWidth;
    }

    let newBorderRadius = (newLeft / (sliderWidth - circleWidth)) * 50;

    block.style.borderRadius = `${newBorderRadius}%`;
    circleRounding.style.left = newLeft + 'px';
  }
  
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

document.addEventListener('mouseleave', function() {
  isDragging = false;
});

//тень
let colorInput = document.getElementById('colorShadow'); 
let blurInput = document.getElementById('shadowInput'); 
let verticalInput = document.getElementById('verticalInput'); 
let horizontalInput = document.getElementById('horizontalInput'); 
 
 
const updateShadow = () => { 
  const color = colorInput.value; 
  const blur = blurInput.value + 'px'; 
  const vertical = verticalInput.value + 'px'; 
  const horizontal = horizontalInput.value + 'px'; 
 
  block.style.boxShadow = `${horizontal} ${vertical} ${blur} rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)})`; 
}; 
 
colorInput.addEventListener('input', updateShadow); 
blurInput.addEventListener('input', updateShadow); 
verticalInput.addEventListener('input', updateShadow); 
horizontalInput.addEventListener('input', updateShadow);


//тут настройка блока для кода
const codeBlock = document.getElementById('codeBlock');

function updateCodeBlock() { 
  const blockStyles = window.getComputedStyle(block);

  const width = Math.round(parseFloat(blockStyles.getPropertyValue('width')));
  const height = Math.round(parseFloat(blockStyles.getPropertyValue('height')));

  const code = ` 
.block {
  width: ${width}px; 
  height: ${height}px; 
  border-radius: ${blockStyles.getPropertyValue('border-radius')}; 
  background-color: ${blockStyles.getPropertyValue('background-color')}; 
  box-shadow: ${blockStyles.getPropertyValue('box-shadow')}; 
} 
  `;

  codeBlock.innerText = code; 
} 
const observer = new MutationObserver(updateCodeBlock);
const config = { attributes: true };
observer.observe(block, config);
updateCodeBlock();

//копировать
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
  const textToCopy = codeBlock.innerText;

  navigator.clipboard.writeText(textToCopy)
      .then(() => {
          copyButton.innerText = 'Скопировано!';
          copyButton.style.borderColor = '#FF9142';
          setTimeout(() => {
              copyButton.innerText = 'Копировать';
              copyButton.style.borderColor = '';
          }, 2000);
      })
      .catch(err => {
          console.error('Не удалось скопировать текст: ', err);
      });
});


