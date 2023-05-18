var canvas = document.querySelector("canvas");

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

    var camera = new BABYLON.ArcRotateCamera("camera1", -4, 1, -10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(-4, 1, -10));
    camera.attachControl(canvas, true);

    camera.keysUp.push(87); //w
    camera.keysDown.push(83); //s
    camera.keysLeft.push(65); //a
    camera.keysRight.push(68); //d


    // var camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 1, -10), scene);
    // camera.attachControl(canvas, true);

    // camera.keysUp.push(87);
    // camera.keysDown.push(83);
    // camera.keysLeft.push(65);
    // camera.keysRight.push(68);
    // camera.zoomSpeed = 0.5;


    var leafMaterial = new BABYLON.StandardMaterial("leafMaterial", scene);
    leafMaterial.diffuseColor = new BABYLON.Color3(0.5, 1, 0.5);

    var woodMaterial = new BABYLON.StandardMaterial(name, scene);
    var woodTexture = new BABYLON.WoodProceduralTexture(name + "text", 512, scene);
    woodTexture.ampscale = 50;
    woodMaterial.diffuseTexture = woodTexture;

    var simplePineGenerator = function (canopies, height, trunkMaterial, leafMaterial) {
        var carvePoingts = function (l, t) {
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
        var curve = carvePoingts(nbS, nbL);
        var radiusFunction = function (i, distance) {
            var fact = 1;
            if (i % 2 == 0) { fact = 0.5 }
            var radius = (nbL * 2 - i - 1) * fact;
            return radius / 4;
        };

        var leaves = BABYLON.Mesh.CreateTube("tube", curve, 0, 5, radiusFunction, 1, scene);
        var trunk = BABYLON.Mesh.CreateCylinder("trunk", (nbS / nbL) + 2, (nbL * 1.5 - nbL / 2 - 1) - 4, (nbL * 1.5 - nbL / 2 - 1) - 4, 12, 1, scene);

        leaves.material = leafMaterial;
        trunk.material = woodMaterial;

        var tree = new BABYLON.Mesh.CreateBox('', 1, scene);
        tree.isVisible = false;
        leaves.parent = tree;
        trunk.parent = tree;
        return tree;
    }

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = 11;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = 11;

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = 20;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = 20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = 20;

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = 5;

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = 0;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = 0;

    // var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree.position.y = 1;
    // tree.position.x = 0;
    // tree.position.z = 5;
    // var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree.position.y = 1;
    // tree.position.x = 5;
    // tree.position.z = 5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = -5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = -5;


    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = -10;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = -10;

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = -15;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = -15;


    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = 15.5;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = 15.5;

    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 5;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 10;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 15;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 20;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -5;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -10;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -15;
    tree.position.z = -20;
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = -20;
    tree.position.z = -20;

    const ground = Ground();

    var building = house(-2, -1, 0);
    var building = house(1, 1.2, 0);
    var building = house(-1, 1.2, 0);
    var building = house(0, 1.2, 0);
    var building = house(2, -2, 0);
    var building = house(2.3, -0.2, 0);
    var building = house(-4, -5, 0);
    var building = house(-5, -5, 0);
    var building = house(4.5, -0.5, 0);
    var building = house(6, -5, 0);
    var building = house(-2, -3, 0);
    var building = house(-4, 3, 0);
    var building = house(-6, 3, 0);

    var building = house(-2, -1, 1);
    var building = house(1, 1.2, 1);
    var building = house(-1, 1.2, 1);
    var building = house(0, 1.2, 1);
    var building = house(2, -2, 1);
    var building = house(2.3, -0.2, 1);
    var building = house(-4, -5, 1);
    var building = house(-5, -5, 1);
    var building = house(4.5, -0.5, 1);
    var building = house(6, -5, 1);
    var building = house(-2, -3, 1);
    var building = house(-4, 3, 1);
    var building = house(-6, 3, 1);


    var building = house(-2, -1, 2);
    var building = house(1, 1.2, 2);
    var building = house(-1, 1.2, 2);
    var building = house(0, 1.2, 2);
    var building = house(2, -2, 2);
    var building = house(2.3, -0.2, 2);
    var building = house(-4, -5, 2);
    var building = house(-5, -5, 2);
    var building = house(4.5, -0.5, 2);
    var building = house(6, -5, 2);
    var building = house(-2, -3, 2);
    var building = house(-4, 3, 2);
    var building = house(-6, 3, 2);


    var building = house(-2, -1, 3);
    var building = house(1, 1.2, 3);
    var building = house(-1, 1.2, 3);
    var building = house(0, 1.2, 3);
    var building = house(2, -2, 3);
    var building = house(2.3, -0.2, 3);
    var building = house(-4, -5, 3);
    var building = house(-5, -5, 3);
    var building = house(4.5, -0.5, 3);
    var building = house(6, -5, 3);
    var building = house(-2, -3, 3);
    var building = house(-4, 3, 3);
    var building = house(-6, 3, 3);

    var building = house(-2, -1, 4);
    var building = house(1, 1.2, 4);
    var building = house(-1, 1.2, 4);
    var building = house(0, 1.2, 4);
    var building = house(2, -2, 4);
    var building = house(2.3, -0.2, 4);
    var building = house(-4, -5, 4);
    var building = house(-5, -5, 4);
    var building = house(4.5, -0.5, 4);
    var building = house(6, -5, 4);
    var building = house(-2, -3, 4);
    var building = house(-4, 3, 4);
    var building = house(-6, 3, 4);

    var building = house(-2, -1, 5);
    var building = house(1, 1.2, 5);
    var building = house(-1, 1.2, 5);
    var building = house(0, 1.2, 5);
    // var building = house(2, -2, 4);
    // var building = house(2.3, -0.2, 4);
    // var building = house(-4, -5, 4);
    // var building = house(-5, -5, 4);
    // var building = house(4.5, -0.5, 4);
    // var building = house(6, -5, 4);
    // var building = house(-2, -3, 4);
    // var building = house(-4, 3, 4);
    // var building = house(-6, 3, 4);




    var car = BABYLON.SceneLoader.ImportMesh("", "https://assets.babylonjs.com/meshes/", "car.babylon", scene, function (meshes) {

        var rootMesh = meshes[0];
        var scale = new BABYLON.Vector3(2, 2, 2);
        rootMesh.scaling = scale;
        var position = new BABYLON.Vector3(0, 0.2, -1);
        rootMesh.position = position;
    });

    var rabbit = BABYLON.SceneLoader.ImportMesh("", "https://assets.babylonjs.com/meshes/", "Rabbit.babylon", scene, function (meshes) {

        var rootMesh = meshes[0];
        var scale = new BABYLON.Vector3(0.02, 0.02, 0.02);
        rootMesh.scaling = scale;
        var position = new BABYLON.Vector3(4, -0.15, -3);
        rootMesh.position = position;
    });

    var dummy = BABYLON.SceneLoader.ImportMesh("", "https://assets.babylonjs.com/meshes/", "dummy3.babylon", scene, function (meshes) {

        var rootMesh = meshes[0];

        var position = new BABYLON.Vector3(3, -0.15, -6);
        rootMesh.position = position;
    });


    return scene;
};

const Ground = () => {
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 50, height: 50 }, scene);
    var material = new BABYLON.StandardMaterial("groundMaterial", scene);
    material.diffuseTexture = new BABYLON.Texture("ground2.jpg", scene);
    ground.material = material;
    ground.position.y = -0.15;
}

var house = function (X, Z, Y) {
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const box = buildBox(X, Z, Y);
    // const roof = buildRoof(X, Z);

    const house = BABYLON.Mesh.MergeMeshes([box], true, false, null, false, true);
}
// var house = function (X, Z) {
//     const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

//     const box = buildBox(X, Z);
//     const roof = buildRoof(X, Z);

//     const house = BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
// }

const buildBox = (X, Z, Y) => {
    const boxMat = new BABYLON.StandardMaterial("roofMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")

    const faceUV = [];
    faceUV[1] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1);
    faceUV[2] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1);
    faceUV[3] = new BABYLON.Vector4(0.25, 0, 0.5, 1);
    faceUV[4] = new BABYLON.Vector4(0.75, 0.0, 1.0, 1.0);

    const box = BABYLON.MeshBuilder.CreateBox("box", { faceUV: faceUV, wrap: true });
    box.material = boxMat;
    box.position.y = 0.35 + Y;
    box.position.x = X;
    box.position.z = Z;

    return box;
}
// const buildBox = (X, Z) => {
//     const boxMat = new BABYLON.StandardMaterial("roofMat");
//     boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")

//     const faceUV = [];
//     faceUV[1] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1);
//     faceUV[2] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1);
//     faceUV[3] = new BABYLON.Vector4(0.25, 0, 0.5, 1);
//     faceUV[4] = new BABYLON.Vector4(0.75, 0.0, 1.0, 1.0);

//     const box = BABYLON.MeshBuilder.CreateBox("box", { faceUV: faceUV, wrap: true });
//     box.material = boxMat;
//     box.position.y = 0.35;
//     box.position.x = X;
//     box.position.z = Z;

//     return box;
// }

const buildRoof = (X, Z) => {

    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", { diameter: 1.3, height: 1.2, tessellation: 3 });
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.1;
    roof.position.x = X;
    roof.position.z = Z;
    return roof;
}





window.initfunction = async function () {

    var asyncEngineCreation = async function () {

        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("catch");
            return createDefaultEngine;
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'not null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initfunction().then(() => {
    sceneToRender = scene;
});

window.addEventListener("resize", function () {
    engine.resize();
});