
export function func() {
    fetch('globalSettings.json')
    .then(response => response.json())
    .then(data => {
        json = JSON.parse(data);
        data.currentNameDir = "Fuck You";
    })
    .catch(error => {
    console.error('Error parsing JSON file:', error);
    });
}

// Create a random string of given length
function randomString (length) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    return letters  
}

