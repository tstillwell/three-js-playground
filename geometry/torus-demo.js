function loadDemo(){
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } );
    var torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    camera.position.z = 50;
    var animate = function () {
        requestAnimationFrame( animate );
        torus.rotation.y += 0.01;
        torus.rotation.x += 0.01;
        renderer.render( scene, camera );
    };
    animate();
}

loadDemo();