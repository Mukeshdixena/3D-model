var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.29, 0.26, 0.26);

    // camera
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(30, 10, -30));
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 0.5, 0), scene);
    light.intensity = 0.7;

    var spot = new BABYLON.SpotLight("spot", new BABYLON.Vector3(25, 15, -10), new BABYLON.Vector3(-1, -0.8, 1), 15, 1, scene);
    spot.diffuse = new BABYLON.Color3(1, 1, 1);
    spot.specular = new BABYLON.Color3(0, 0, 0);
    spot.intensity = 0.8;

    var leafMaterial = new BABYLON.StandardMaterial("leafMaterial", scene);
    leafMaterial.diffuseColor = new BABYLON.Color3(0.5, 1, 0.5);

    var woodMaterial = new BABYLON.StandardMaterial(name, scene);
    var woodTexture = new BABYLON.WoodProceduralTexture(name + "text", 512, scene);
    woodTexture.ampScale = 50;
    woodMaterial.diffuseTexture = woodTexture;

    var simplePineGenerator = function (canopies, height, trunkMaterial, leafMaterial) {
        var curvePoints = function (l, t) {
            var path = [];
            var step = l / t;
            for (var i = 0; i < l; i += step) {
                path.push(new BABYLON.Vector3(0, i, 0));
                path.push(new BABYLON.Vector3(0, i, 0));
            }
            return path;
        };

        var nbL = canopies + 1;
        var nbS = height;
        var curve = curvePoints(nbS, nbL);

        var radiusFunction = function (i, distance) {
            var fact = 1;
            if (i % 2 == 0) { fact = .5; }
            var radius = (nbL * 2 - i - 1) * fact;
            return radius;
        };

        var leaves = BABYLON.Mesh.CreateTube("tube", curve, 0, 5, radiusFunction, 1, scene);
        var trunk = BABYLON.Mesh.CreateCylinder("trunk", nbS / nbL, nbL * 1.5 - nbL / 2 - 1, nbL * 1.5 - nbL / 2 - 1, 12, 1, scene);

        leaves.material = leafMaterial;
        trunk.material = woodMaterial;
        var tree = new BABYLON.Mesh.CreateBox('', 1, scene);
        tree.isVisible = false;
        leaves.parent = tree;
        trunk.parent = tree;
        return tree;
    }


    // tree
    var tree = simplePineGenerator(5, 20, woodMaterial, leafMaterial);
    tree.position.x = -20; 


    return scene;
};








window.initFunction = async function () {



    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};


initFunction().then(() => {
    sceneToRender = scene
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});