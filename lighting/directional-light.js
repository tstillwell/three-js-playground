function loadDemo() {
    var scene = new THREE.Scene();
    var directionalLight = new THREE.DirectionalLight(0xFFFFFF,1);
    directionalLight.position.set(1, 0, 1).normalize();
    scene.add(directionalLight);
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshStandardMaterial();
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    animate();
}

loadDemo();