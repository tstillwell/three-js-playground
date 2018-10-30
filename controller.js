function setupListener(id){
    return document.getElementById(id).addEventListener("click", displayDemo);
}

function addDemoListeners(){ // Add displayDemo listener to each list item
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
    setupListener("basic-material");
    setupListener("lambert-material");
    setupListener("normal-material");
    setupListener("phong-material");
    setupListener("wireframe-material");
    setupListener("normal-wireframe-material");
}

function displayDemo(){
    // Update src link for demo-pane
    let demo_pane = document.getElementById("demo-pane");
    const demo_files = [
        { id: 'cone', src: "geometry/cone-demo.html"},
        { id: 'cube', src: "geometry/cube-demo.html"},
        { id: 'cylinder', src: "geometry/cylinder-demo.html"},
        { id: 'ellipse-curve', src: "geometry/ellipse-curve.html"},
        { id: 'plane', src: "geometry/plane-demo.html"},
        { id: 'plane-wireframe', src: "geometry/plane-wireframe-demo.html"},
        { id: 'ring', src: "geometry/ring-demo.html"},
        { id: 'sphere', src: "geometry/sphere-demo.html"},
        { id: 'tetrahedron', src: "geometry/tetrahedron-demo.html"},
        { id: 'torus', src: "geometry/torus-demo.html"},
        { id: 'basic-material', src: "materials/material-basic.html"},
        { id: 'lambert-material', src: "materials/material-lambert.html"},
        { id: 'normal-material', src: "materials/material-normal.html"},
        { id: 'phong-material', src: "materials/material-phong.html"},
        { id: 'wireframe-material', src: "materials/wireframe.html"},
        { id: 'normal-wireframe-material', src: "materials/normal-wireframe.html"},
    ];
    for (file in demo_files) {
        if (demo_files[file].id == this.id) {
            demo_pane.src = demo_files[file].src;
        }
    }
}

function iframeLoaded() {
    const iFrameID = document.getElementById('demo-pane');
    if (iFrameID) {
      iFrameID.height = "";
      iFrameID.height = document.body.scrollHeight + "px";
    }
}

iframeLoaded();
addDemoListeners();