window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);


        // scene.clearColor = new BABYLON.Color3.red();


        // freecamera for top view
        // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 0, -10), scene);
        // camera.attachControl(canvas, true);


        var box = BABYLON.Mesh.CreateBox("box", 4.0, scene);
        var buildings = BABYLON.Mesh.CreateBox("buildings", 4.0, scene);
        var vehicles = BABYLON.Mesh.CreateBox("vehicles", 4.0, scene);


        // const box = simplePineGenerator(canopies, height, trunkMaterial, leafMaterial, scene);
        box.position = new BABYLON.Vector3(0, 0, 0);
        buildings.position = new BABYLON.Vector3(15, 0, 0);
        vehicles.position = new BABYLON.Vector3(-15, 0, 0);





        var camera = new BABYLON.ArcRotateCamera("arcCam",
            BABYLON.Tools.ToRadians(45),
            BABYLON.Tools.ToRadians(45),
            10.0, box.position, scene);
        camera.attachControl(canvas, true);

        // camera.keysUp.push(87); //w
        // camera.keysDown.push(83) //s
        // camera.keysLeft.push(65); //a
        // camera.keysRight.push(68); //d

        camera.setTarget(BABYLON.Vector3.Zero());
        var box = BABYLON.Mesh.CreateBox("box", 4.0, scene);
        return scene;
    }



    var scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });




});



var simplePineGenerator = function(canopies, height, trunkMaterial, leafMaterial, scene) {
    var curvePoints = function(l, t) {
    var path = [];
    var step = l / t;
    for (var i = 0; i < l; i += step ) {
		path.push(new BABYLON.Vector3(0, i, 0));
	   	path.push(new BABYLON.Vector3(0, i, 0 ));
     }
    return path;
  	};
	
	var nbL = canopies + 1;
  	var nbS = height;
  	var curve = curvePoints(nbS, nbL);
	var radiusFunction = function (i, distance) {
  		var fact = 1;
		if (i % 2 == 0) { fact = .5; }
   		var radius =  (nbL * 2 - i - 1) * fact;	
   		return radius;
	};  
  
	var leaves = BABYLON.Mesh.CreateTube("tube", curve, 0, 10, radiusFunction, 1, scene);
	var trunk = BABYLON.Mesh.CreateCylinder("trunk", nbS/nbL, nbL*1.5 - nbL/2 - 1, nbL*1.5 - nbL/2 - 1, 12, 1, scene);
  
	leaves.material = leafMaterial;
	trunk.material = trunkMaterial; 
	var tree = new BABYLON.Mesh.CreateBox('',1,scene);
	tree.isVisible = false;
	leaves.parent = tree;
	trunk.parent = tree; 
    return tree; 
}