window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);


        // scene.clearColor = new BABYLON.Color3.red();


        // freecamera for top view
        // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
        // camera.attachControl(canvas, true);

        
        var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
        var camera = new BABYLON.ArcRotateCamera("arcCam",
        BABYLON.Tools.ToRadians(45),
        BABYLON.Tools.ToRadians(45),
        10.0, box.position, scene);
        camera.attachControl(canvas, true);

        camera.keysUp.push(87); //w
        camera.keysDown.push(83) //s
        camera.keysLeft.push(65); //a
        camera.keysRight.push(68); //d
        
        camera.setTarget(BABYLON.Vector3.Zero());
        var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
        return scene;
    }



    var scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });




});