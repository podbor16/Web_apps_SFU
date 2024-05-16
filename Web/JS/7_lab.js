// информация о ссылках, якорях и изображениях
window.onload = function() {
    var links = document.getElementsByTagName('a');
    var anchors = document.getElementsByTagName('a');
    var images = document.getElementsByTagName('img');

    console.log('Links:');
    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);
    }

    console.log('Anchors:');
    for (var j = 0; j < anchors.length; j++) {
        console.log(anchors[j]);
    }

    console.log('Images:');
    for (var k = 0; k < images.length; k++) {
        console.log(images[k]);
    }
}
// обработчики событий
document.addEventListener('click', function(event) {
    console.log('Click event:', event);
});

/*document.addEventListener('mouseover', function(event) {
    console.log('Mouseover event:', event);
});*/

document.addEventListener('keydown', function(event) {
    console.log('Keydown event:', event);
});
