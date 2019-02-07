function setupDisplayListener(id) {
    return document.getElementById(id).addEventListener("click", displayDemo);
}

(function addDemoListeners(){
    // Add displayDemo listener to each list item
    setupDisplayListener("cone");
    setupDisplayListener("cube");
    setupDisplayListener("cylinder");
    setupDisplayListener("ellipse-curve");
    setupDisplayListener("plane");
    setupDisplayListener("plane-wireframe");
    setupDisplayListener("ring");
    setupDisplayListener("sphere");
    setupDisplayListener("tetrahedron");
    setupDisplayListener("torus");
    setupDisplayListener("basic-material");
    setupDisplayListener("lambert-material");
    setupDisplayListener("normal-material");
    setupDisplayListener("phong-material");
    setupDisplayListener("wireframe-material");
    setupDisplayListener("normal-wireframe-material");
    setupDisplayListener("ambient-light");
    setupDisplayListener("directional-light");
    setupDisplayListener("hemisphere-light");
    setupDisplayListener("point-light");
    setupDisplayListener("shadow-light");
    setupDisplayListener("multiple-shadow-light");
})();

function displayDemo(){
    // Update src link for demo-pane
    let demo_pane = document.getElementById("demo-pane");
    const demo_files = [ // iframe src mappings for each id
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
        { id: 'ambient-light', src: "lighting/ambient-light.html"},
        { id: 'directional-light', src: "lighting/directional-light.html"},
        { id: 'hemisphere-light', src: "lighting/hemisphere-light.html"},
        { id: 'point-light', src: "lighting/point-light.html"},
        { id: 'shadow-light', src: "lighting/shadow-example.html"},
        { id: 'multiple-shadow-light', src: "lighting/multiple-shadow-example.html"},
    ];
    for (file in demo_files) {
        if (demo_files[file].id == this.id) {
            demo_pane.src = demo_files[file].src;
        }
    }
}

(function iframeLoaded() {
    // Resize iframe height to use viewport height
    const iFrameID = document.getElementById('demo-pane');
    if (iFrameID) {
      iFrameID.height = "";
      iFrameID.height = document.body.scrollHeight + "px";
    }
})();
