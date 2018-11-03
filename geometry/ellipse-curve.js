function loadDemo(){
    var scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new THREE.OrbitControls(camera);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    var line_material = new THREE.LineBasicMaterial({color:0xFFFFFF, opacity:1});
    var ellipse = new THREE.EllipseCurve(0, 0, 1, 5, 0, 2.0 * Math.PI, false);
    var ellipsePoints = ellipse.getPoints(100);
    var ellipseGeometry = new THREE.BufferGeometry().setFromPoints(ellipsePoints);
    var line = new THREE.Line(ellipseGeometry, line_material);
    scene.add( line );
    camera.position.z = 20;
    var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
    animate();
}

loadDemo();