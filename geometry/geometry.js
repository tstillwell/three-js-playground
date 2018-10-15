function addDemoListeners(){
    document.getElementById("cone").addEventListener("click", displayDemo); 
    document.getElementById("cube").addEventListener("click", displayDemo); 
    document.getElementById("cylinder").addEventListener("click", displayDemo); 
    document.getElementById("ellipse-curve").addEventListener("click", displayDemo); 
    document.getElementById("plane").addEventListener("click", displayDemo); 
    document.getElementById("plane-wireframe").addEventListener("click", displayDemo); 
    document.getElementById("ring").addEventListener("click", displayDemo); 
    document.getElementById("sphere").addEventListener("click", displayDemo); 
    document.getElementById("tetrahedron").addEventListener("click", displayDemo);
    document.getElementById("torus").addEventListener("click", displayDemo);
    }

function displayDemo(){
    let demo_pane = document.getElementById("demo-pane");
    const demo_files = [
        { id: 'cone', src: "cone-demo.html"},
        { id: 'cube', src: "cube-demo.html"},
        { id: 'cylinder', src: "cylinder-demo.html"},
        { id: 'ellipse-curve', src: "ellipse-curve.html"},
        { id: 'plane', src: "plane-demo.html"},
        { id: 'plane-wireframe', src: "plane-wireframe-demo.html"},
        { id: 'ring', src: "ring-demo.html"},
        { id: 'sphere', src: "sphere-demo.html"},
        { id: 'tetrahedron', src: "tetrahedron-demo.html"},
        { id: 'torus', src: "torus-demo.html"},
    ];
    for (file in demo_files) {
        if (demo_files[file].id == this.id) {
            demo_pane.src = demo_files[file].src;
        }
    }
}

addDemoListeners();