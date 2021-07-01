  AFRAME.registerComponent('modify-materials', {
	
    init: function () {
    const data = this.data;
    this.texture = new THREE.CubeTextureLoader().load([
            "Sources/Textures/px.png", "Sources/Textures/nx.png",
            "Sources/Textures/py.png", "Sources/Textures/ny.png",
            "Sources/Textures/pz.png", "Sources/Textures/nz.png"
        ]);
    this.texture.format = THREE['RGBFormat'];

    const SceneEnvMap = this.texture;
    
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
          if (node.material && 'envMap' in node.material) {
          
            node.material.envMap = SceneEnvMap;
//            node.material.lightMap = lightMap;
          }
        });
      });
    }
  });