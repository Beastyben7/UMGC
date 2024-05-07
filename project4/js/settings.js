function navSwitch(argu) {
    const settings = document.getElementById('settingsOptions');
    const info = document.getElementById('myInfoOptions');

    if (argu == 'Settings') {
        settings.style.display = 'flex';
        info.style.display = 'none';
    }
    if (argu == 'Info') {
        info.style.display = 'flex';
        settings.style.display = 'none';
    }

}