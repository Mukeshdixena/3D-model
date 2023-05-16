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


    // ArcRotateCamera

    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(-4, 1, -10));
    camera.attachControl(canvas, true);
    // camera.attachControl(canvas, true);

    camera.keysUp.push(87); //w
    camera.keysDown.push(83) //s
    camera.keysLeft.push(65); //a
    camera.keysRight.push(68); //d


    // FreeCamera

    // var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
    // camera.position = new BABYLON.Vector3(0, 5, -10);
    // camera.setTarget(BABYLON.Vector3.Zero());
    // camera.speed = 0.2;
    // camera.angularSensibility = 500;
    // camera.attachControl(canvas, true);
    // // scene.activeCamera = camera;


    // FollowCamera

    // var camera = new BABYLON.FollowCamera("camera", new BABYLON.Vector3(0, 0, 0), scene);
    // // camera.lockedTarget = mesh;
    // // camera.radius = 20; // distance from the target
    // // camera.lockedTarget = mesh;
    // // camera.radius = 20; // distance from the target
    // // scene.activeCamera = camera;
    // camera.attachControl(canvas, true);


    // universeCamera

    
    // // Parameters : name, position, scene
    // const camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);

    // // Targets the camera to a particular position. In this case the scene origin
    // camera.setTarget(BABYLON.Vector3.Zero());

    // // Attach the camera to the canvas
    // camera.attachControl(canvas, true);

    // // scene.activeCamera = camera;
    // document.addEventListener("keydown", function (event) {
    //     switch (event.keyCode) {
    //         case 87: // W key
    //             camera.position.z += camera.speed;
    //             break;
    //         case 83: // S key
    //             camera.position.z -= camera.speed;
    //             break;
    //         case 65: // A key
    //             camera.position.x -= camera.speed;
    //             break;
    //         case 68: // D key
    //             camera.position.x += camera.speed;
    //             break;
    //     }
    // });


    // var light = new BABYLON.DirectionalLight("light", new BABYLON.Vector3(0, 0, 0), scene);
    // light.intensity = 0.5;

    // var spot = new BABYLON.SpotLight("spot", new BABYLON.Vector3(25, 15, -10), new BABYLON.Vector3(-1, -0.8, 1), 15, 1, scene);
    // spot.diffuse = new BABYLON.Color3(1, 1, 1);
    // spot.specular = new BABYLON.Color3(1, 1, 1);
    // spot.intensity = 0.8;

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


    // tree
    var tree = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree.position.y = 1;
    tree.position.x = 0;
    tree.position.z = 11;
    var tree2 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree2.position.y = 1;
    tree2.position.x = 5;
    tree2.position.z = 11;
    var tree3 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree3.position.y = 1;
    tree3.position.x = 10;
    tree3.position.z = 11;
    var tree4 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree4.position.y = 1;
    tree4.position.x = 15;
    tree4.position.z = 11;
    var tree5 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree5.position.y = 1;
    tree5.position.x = 20;
    tree5.position.z = 11;
    var tree_2 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_2.position.y = 1;
    tree_2.position.x = -5;
    tree_2.position.z = 11;
    var tree_3 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_3.position.y = 1;
    tree_3.position.x = -10;
    tree_3.position.z = 11;
    var tree_4 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_4.position.y = 1;
    tree_4.position.x = -15;
    tree_4.position.z = 11;
    var tree_5 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_5.position.y = 1;
    tree_5.position.x = -20;
    tree_5.position.z = 11;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = 20;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = 20;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = 20;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = 20;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = 20;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = 20;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = 20;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = 20;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = 20;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = 5;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = 5;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = 5;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = 5;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = 5;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = 5;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = 5;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = 5;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = 5;


    // var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree1.position.y = 1;
    // tree1.position.x = 0;
    // tree1.position.z = 0;
    // var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree12.position.y = 1;
    // tree12.position.x = 5;
    // tree12.position.z = 0;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = 0;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = 0;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = 0;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = 0;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = 0;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = 0;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = 0;

    // var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree1.position.y = 1;
    // tree1.position.x = 0;
    // tree1.position.z = -5;
    // var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree12.position.y = 1;
    // tree12.position.x = 5;
    // tree12.position.z = -5;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = -5;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = -5;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = -5;
    // var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    // tree_12.position.y = 1;
    // tree_12.position.x = -5;
    // tree_12.position.z = -5;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = -5;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = -5;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = -5;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = -10;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = -10;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = -10;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = -10;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = -10;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = -10;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = -10;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = -10;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = -10;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = -15;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = -15;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = -15;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = -15;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = -15;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = -15;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = -15;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = -15;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = -15;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = 15.5;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = 15.5;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = 15.5;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = 15.5;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = 15.5;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = 15.5;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = 15.5;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = 15.5;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = 15.5;

    var tree1 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree1.position.y = 1;
    tree1.position.x = 0;
    tree1.position.z = -20;
    var tree12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree12.position.y = 1;
    tree12.position.x = 5;
    tree12.position.z = -20;
    var tree13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree13.position.y = 1;
    tree13.position.x = 10;
    tree13.position.z = -20;
    var tree14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree14.position.y = 1;
    tree14.position.x = 15;
    tree14.position.z = -20;
    var tree15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree15.position.y = 1;
    tree15.position.x = 20;
    tree15.position.z = -20;
    var tree_12 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_12.position.y = 1;
    tree_12.position.x = -5;
    tree_12.position.z = -20;
    var tree_13 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_13.position.y = 1;
    tree_13.position.x = -10;
    tree_13.position.z = -20;
    var tree_14 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_14.position.y = 1;
    tree_14.position.x = -15;
    tree_14.position.z = -20;
    var tree_15 = simplePineGenerator(5, 10, woodMaterial, leafMaterial);
    tree_15.position.y = 1;
    tree_15.position.x = -20;
    tree_15.position.z = -20;





    // ground
    const ground = Ground();

    // building
    var building = house(-2, -1); // x,z
    var building = house(1, 1.2); // x,z
    var building = house(-1, 1.2); // x,z
    var building = house(0, 1.2); // x,z
    var building = house(2, -2); // x,z
    var building = house(2.3, -0.2); // x,z
    var building = house(-4, -5); // x,z 
    var building = house(-5, -5); // x,z 
    var building = house(5.5, -0.5); // x,z
    var building = house(4.5, -0.5); // x,z
    var building = house(6, -5); // x,z
    // var building = house(-2, 3); // x,z
    // var building = house(-4, 3); // x,z
    // var building = house(-6, 3); // x,z

    // vehical
    var car = BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.babylon");
    // car.position.x = 20;

    return scene;
};




const Ground = () => {
    //color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100 });
    ground.material = groundMat;
    ground.position.y = -0.15;
}

var house = function (X, Z) {


    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const box = buildBox(X, Z);
    const roof = buildRoof(X, Z);

    const house = BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
}
const buildBox = (X, Z) => {
    //texture
    const boxMat = new BABYLON.StandardMaterial("roofMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")


    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
    faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
    faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
    faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side



    const box = BABYLON.MeshBuilder.CreateBox("box", { faceUV: faceUV, wrap: true });
    box.material = boxMat;
    box.position.y = 0.35;
    box.position.x = X;
    box.position.z = Z;

    return box;
}

const buildRoof = (X, Z) => {
    //texture
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