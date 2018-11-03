function loadDemo(){
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
    var cylinder = new THREE.Mesh( geometry, material );
    scene.add( cylinder );
    camera.position.z = 50;
    var animate = function () {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        };
    animate();
}

loadDemo();