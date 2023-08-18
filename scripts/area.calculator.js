function calculateTriangleArea(){
    // get triangle base value
    const baseField =document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base =parseFloat(baseValueText)
    console.log(base);

    // get triangle height value
    const heightField =document.getElementById('triangle-height');
    const heightValueText =heightField.value;
    const height=parseFloat(heightValueText);
    console.log(height)

    // validate input
    if(isNaN(base)|| isNaN(height)){
        alert('please insert number');
        return;
    }

    const area=0.5*base*height;
    console.log(area)

    // show triangle area
    const areaSpan =document.getElementById('triangle-area');
    areaSpan.innerText=area;
}

function calculateRectangleArea(){
    // get rectangle width
   const widthField =document.getElementById('rectangle-width');
   const widthValueText =widthField.value;
   const width=parseFloat(widthValueText)
   console.log(width)
    // get rectangle length value
    const lengthField =document.getElementById('rectangle-length');
    const lengthValueText =lengthField.value;
    const length=parseFloat(lengthValueText);
    console.log(length)

     // validate input
     if(isNaN(width)|| isNaN(length)){
        alert('please insert number');
        return;
    }

    const area=width*length;
    console.log(area)

    // show rectangle area
    const areaSpan =document.getElementById('rectangle-area');
    areaSpan.innerText=area;
}





// reusable function --> reduce duplicate code

function calculateParallelogramArea(){
    const base=getInputValue('parallelogram-base');
    // console.log(base)

    const height =getInputValue('parallelogram-Height');
    // console.log(height);

     // validate input
     if(isNaN(base)|| isNaN(height)){
        alert('please insert number');
        return;
    }

    const Parea=base*height;
    setElementInnerText('parallelogram-area',Parea);

    

}

// ellipse
function calculateEllipseArea(){
    const majorRadius=getInputValue('Ellipse-major-radius');
    const minorRadius =getInputValue('Ellipse-minor-radius');

    const areaEllipse=3.14*majorRadius*minorRadius;
    const areaToDecimal= areaEllipse.toFixed(2);
    setElementInnerText('Ellipse-area', areaToDecimal );
}



// reusable get input value field in number
function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText =inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}

// reusable set span,p,div,etc text
function setElementInnerText(elementId, area){
    const Element=document.getElementById(elementId)
    Element.innerText=area;
}