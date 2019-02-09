function loadDemo() {
    var scene = new THREE.Scene();
    var directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.castShadow = true;
    scene.add( directionalLight );
    directionalLight.position.set( 10, 10, 10);
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMapEnabled = true;
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial( {color: 0x00FF00} );
    var plane_material = new THREE.MeshPhongMaterial( { color: 0xCCCCCC } );
    var cube = new THREE.Mesh( geometry, material );
    var plane_geometry = new THREE.PlaneGeometry(100, 100);
    var plane = new THREE.Mesh( plane_geometry, plane_material);
    plane.position.y = -4;
    scene.add( plane );
    scene.add( cube );
    cube.castShadow = true;
    cube.receiveShadow = false;
    plane.castShadow = false;
    plane.receiveShadow = true;
    camera.position.z = 5;
    plane.rotation.x = -1;
    var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    animate();
}

loadDemo();