import {func} from './changeNameDir.js';

//let name = window.path;
func();

fetch('globalSettings.json')
    .then(response => response.json())
    .then(data => {
        let p = document.createElement('p');
        p.innerHTML = data.currentNameDir;
        document.body.append(p);
    })
    .catch(error => {
      console.error('Error parsing JSON file:', error);
    });

// create function to add to numbers