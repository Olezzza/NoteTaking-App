const minButton = document.getElementById('minimizeBtn')
const closeButton = document.getElementById('closeBtn')



minButton.addEventListener('click', () => {
    window.electronAPI.setMinimize();
});

closeButton.addEventListener('click', () => {
    window.electronAPI.setClose();
});



