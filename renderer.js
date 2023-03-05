const minButton = document.getElementById('minimizeBtn')
const closeButton = document.getElementById('closeBtn')

minButton.addEventListener('click', () => {
    window.electronAPI.setMinimize();
    function name() {
        setTimeout(() => {
            
        })
    }
});

closeButton.addEventListener('click', () => {
    window.electronAPI.setClose();
});