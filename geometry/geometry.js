function setupListener(id){
    return document.getElementById(id).addEventListener("click", displayDemo);
}

function addDemoListeners(){
    setupListener("cone");
    setupListener("cube");
    setupListener("cylinder");
    setupListener("ellipse-curve");
    setupListener("plane");
    setupListener("plane-wireframe");
    setupListener("ring");
    setupListener("sphere");
    setupListener("tetrahedron");
    setupListener("torus");
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