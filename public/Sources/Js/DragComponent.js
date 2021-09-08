var objectToRotate = document.querySelector("#rotate");
    AFRAME.registerComponent('drag-rotate-component',{
      schema : { speed : {default:1}},
      init : function(){
        objectToRotate = document.querySelector("#rotate");
        this.ifMouseDown = false;
        this.x_cord = 0;
        this.y_cord = 0;
        document.addEventListener('touchstart', this.OnTouchStart);
        document.addEventListener('touchmove', this.OnTouchMove);
        document.addEventListener('touchend', this.OnTouchEnd);
      },
      OnTouchStart: function(event) {
        this.ifMouseDown = true;
        this.x_cord = event.touches[0].clientX;
        this.y_cord = event.touches[0].clientY;
      },
      OnTouchEnd: function (e) {
        this.ifMouseDown = false;
      },
      OnTouchMove: function(event) {
        if(this.ifMouseDown)
        {
          var temp_x =  event.touches[0].clientX-this.x_cord;
          var temp_y =  event.touches[0].clientY-this.y_cord;
          if(Math.abs(temp_y)<Math.abs(temp_x))
          {
            objectToRotate.object3D.rotateY(temp_x*5/1000);
          }
          this.x_cord =  event.touches[0].clientX;
          this.y_cord =  event.touches[0].clientY;
        }
      }
    });