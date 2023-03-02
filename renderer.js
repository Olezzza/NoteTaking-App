const minButton = document.getElementById('minimizeBtn')
const closeButton = document.getElementById('closeBtn')

minButton.addEventListener('click', () => {
    window.electronAPI.setTitle();
});

closeButton.addEventListener('click', () => {
    window.electronAPI.setClose();
});