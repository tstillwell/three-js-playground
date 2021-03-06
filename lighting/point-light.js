function loadDemo() {
    var scene = new THREE.Scene();
    var pointLight = new THREE.PointLight(0xFFFFFF);
    scene.add( pointLight );
    pointLight.position.set( 0, 0, 5);
    var ambientLight = new THREE.AmbientLight( 0x333333, 0.5 );
    scene.add( ambientLight );
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial( {color: 0xFEFEFE} );
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