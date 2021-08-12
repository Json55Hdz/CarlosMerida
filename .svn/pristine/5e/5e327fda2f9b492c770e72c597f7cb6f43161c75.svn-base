  let cameraPos;
  
  AFRAME.registerComponent('modify-materials', {
	
    init: function () {
    const data = this.data;
    
//    this.texture = new THREE.TextureLoader().load("./Textures/White.jpg");//

//    const lightMap = this.texture;//

      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
          if (node.geometry && node.geometry.type == "BufferGeometry"){//

//		    node.geometry.attributes.uv2 = node.geometry.attributes.uv.clone();//
	      }//
          if (node.material && 'charPosition' in node.material) {
          
            node.material.charPosition = cameraPos;
//            node.material.lightMap = lightMap;
          }
        });
      });
    },
    tick: function () {
      cameraPos = this.Camera.object3D.position;
		console.log(cameraPos);
    }
  });