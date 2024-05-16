let tree = document.getElementById('tree');
let nodes = tree.querySelectorAll('li');

nodes.forEach(node => {
    node.addEventListener('click', function() {
        nodes.forEach(node => node.classList.remove('active'));
        this.classList.add('active');
        console.log(this.textContent, "is active");
    });
})

