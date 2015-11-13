document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    alert('device ready');
    var ref = window.open('https://ulione.force.com/ULIOne/one/one.app', '_self', '');
}