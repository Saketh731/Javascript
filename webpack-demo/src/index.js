import _ from 'lodash';
// import './style.css';
// import myImage from './bgWood.jpg'; //Here myImage variable contains the url for that image in the Output (i.e in the bundle.js)
import printMe from './print.js';

function createElm() {

    const element = document.createElement("div");

    const btn = document.createElement("button");


    //At this Line Lodash will be imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');

    btn.innerHTML = "Click me and check the Console";
    btn.onclick = printMe;
    element.appendChild(btn);

    //At this Line CSS will be imported
    element.classList.add('hello');
    element.classList.add('size');

    //At this line the image will be processed and stored in the ouput with url myImage
    // const img = new Image();
    // img.src = myImage;
    // console.log(myImage);
    // element.appendChild(img);

    return element;
}

document.body.appendChild(createElm());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log("Accepting the updated printMe module");
        printMe();
    });
}