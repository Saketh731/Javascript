// import _ from 'lodash';


function component() {
    const element = document.createElement('div');

    return import ('lodash')
        .then(({ default: _ }) => {
            const element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
            return element;
        })
        .catch((error) => 'An error occured while loading the component');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // return element;
}

// document.body.appendChild(component());

component().then((component) => {
    document.body.appendChild(component);
})