function loadDemo(){
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.RingGeometry( 1, 5, 32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xFFFF00, side: THREE.DoubleSide } );
    var ring = new THREE.Mesh( geometry, material );
    scene.add( ring );
    camera.position.z = 50;
    var animate = function () {
        requestAnimationFrame( animate );
        ring.rotation.y += 0.05;
        ring.rotation.x += 0.05;
        renderer.render( scene, camera );
    };
    animate();
}

loadDemo();