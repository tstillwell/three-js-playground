function loadDemo(){
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.TetrahedronGeometry();
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFF00, side: THREE.DoubleSide } );
    var tetrahedron = new THREE.Mesh( geometry, material );
    scene.add( tetrahedron );
    camera.position.z = 10;
    var animate = function () {
        requestAnimationFrame( animate );
        tetrahedron.rotation.y += 0.01;
        tetrahedron.rotation.x += 0.01;
        renderer.render( scene, camera );
    };
    animate();
}

loadDemo();