/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var startTime;

var Smiley = (function(){
    class Smiley{
        constructor(element){
            this.el = element;
            this.$el = $(element);
            this.onClick = this.onClick.bind(this);
            this.moveSmiley = this.moveSmiley.bind(this);
            this.transitionEnd = this.transitionEnd.bind(this);
            this.el.addEventListener('click', this.onClick);
            this.el.addEventListener('transitionend', this.transitionEnd);
//            this.el.addEventListener('animationstart', this.transitionEnd);
//            this.el.addEventListener('webkitTransitionEnd', this.transitionEnd);
//            this.el.addEventListener('webkitAnimationStart', this.transitionEnd);
        }
        
        onClick(){
            var that = this;
            var windowWidthCenter = window.innerWidth / 2;
            var windowHeightCenter = window.innerHeight / 2;
            var offset = this.el.getBoundingClientRect();// Is this better than offsetWidth in performance terms?
            var animate = {
                left : windowWidthCenter - (offset.width  / 2),
                top: windowHeightCenter - (offset.height / 2),
                duration : 500
            };
            console.log(animate);
            requestAnimationFrame(function(){
                that.moveSmiley(animate);
            });
        }
        moveSmiley(animate){
            this.el.style.left = animate.left+'px';
            this.el.style.top = animate.top+'px';
//            console.log('MOVE !');
//            if(startTime === undefined){
//                startTime = new Date();
//            }
//            var ratio = (new Date().getTime() - startTime) / animate.duration;
//            var left = animate.left * ratio;
//            var top = animate.top * ratio;
//            if(left < animate.left || top < animate.top){
                
//                this.el.style.transform = `translate(${left}px, ${top}px)`;
//                setTimeout(function(){
//                    requestAnimationFrame(function(){
//                        that.moveSmiley(animate); 
//                    });
//                }, 0);
//            }
        }
        
        transitionEnd(){
            console.log('TRANSITION END !');
        }
    };
    
    return Smiley;
}());