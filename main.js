

window.onload = function(){
    window.addEventListener("scroll",(e)=>{
        console.log(window.scrollY);
    });

    lax.init();
    lax.addDriver("scrollY", function(){
        return  window.scrollY;
    } );


    
    
    lax.addElements('.logo', {
        scrollY: {
            scale:[
                [0,80],
                [1,3]
            ],

            opacity:[
                [0,80],
                [1,0]
            ],
            translateY:[
                [0,80],
                [0,200]
            ],
        },
    });

        
    lax.addElements('.ultron', {
        scrollY: {
            opacity:[
                [0,80],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,80]
            ],
        },
    });

    lax.addElements('.loki', {
        scrollY: {
            opacity:[
                [40,120],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,-80]
            ],
        },
    });

    lax.addElements('.thanos', {
        scrollY: {
            opacity:[
                [60,120],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,80]
            ],
        },
    });

    lax.addElements('.scroll-tip', {
        scrollY: {
            opacity:[
                [0,600],
                [1,0]
            ],
            translateY:[
                [0,800],
                [-200,0]
            ],
            "letter-spacing":[
                [0,600],
                [0,150],
                {
                    cssUnit:"px"
                }
            ]
        },
    });

    lax.addElements('.ironman-title', {
        scrollY: {
            filter:[
                [600,700,800,900,1000,1100,1200],
                [0,30,0,30,0,30,0], 
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px yellow)`
                    },
                },
            ],
           translateY: [
            [1200,1700],
            [300,800]
           ],
        },
        
    });

    lax.addElements('.ironman-01', {
        scrollY: {
           translateY: [
            [1200,2000],
            [800,-1500]
           ],
        },
        
    });


    lax.addElements('.ironman-02', {
        scrollY: {
            scale:[
                [1600,1700],[0,1]
            ],
           translateX: [
            [1700,2200,2800],
            [0,700,0]
           ],
           translateY: [
            [1700,2200,2700],
            [-100,0,100]
           ],
        },
        
    });


    lax.addElements('.shield', {
        scrollY: {
           translateX: [
            [2200,2600,2900,3000],
            [-800,"screenWidth - 200",0,"screenWidth + 200"]
           ],
           translateY: [
            [2400,2600,2900,3000],
            [600,1000,1400,1600]
           ],
        },
        
    });

    lax.addElements('.captain-title', {
        scrollY: {
            filter:[
                [2000,2100,2200,2300,2400,2500,2600],
                [0,50,0,50,0,50,0], 
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px blue)`
                    },
                },
            ],
           translateY: [
            [2400,2600],
            [0,600]
           ],
        },
        
    });

    lax.addElements('.capi', {
        scrollY: {
           translateX: [
            [2600,3400],
            [400,-800]
           ],
           translateY: [
            [2600,3400],
            [0,600]
           ],
           scale: [
            [2600,3400],
            [1,0.5]
           ],
           opacity: [
            [2000,2400],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.shield02', {
        scrollY: {
           translateX: [
            [2600,3400],
            [0,"screenWidth + 900"]
           ],
           translateY: [
            [2600,3400],
            [0,600]
           ],
           scale: [
            [2600,3400],
            [1,10]
           ],
           opacity: [
            [2600,2800],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.rayo', {
        scrollY: {
            scaleX: [
                [3200,3500],
                [0,1]
               ],
           translateY: [
            [3600,4000,4100],
            [-10,-10,0]
           ],
          
           opacity: [
            [3000,3700,3900],
            [1,1,0]
           ],
        },
        
    });

    lax.addElements('.thor-title-1 img', {
        scrollY: {
            scale: [
                [3600,3700],
                [3,1]
            ],
           opacity: [
            [3600,3700],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.thor-title-2 img', {
        scrollY: {
            scale: [
                [3620,3700],
                [3,1]
            ],
           opacity: [
            [3620,3700],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.thor-title-3 img', {
        scrollY: {
            scale: [
                [3640,3700],
                [3,1]
            ],
           opacity: [
            [3640,3700],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.thor-title-4 img', {
        scrollY: {
            scale: [
                [3660,3700],
                [3,1]
            ],
           opacity: [
            [3650,3700],
            [0,1]
           ],
        },
        
    });

    lax.addElements('.thor', {
        scrollY: {
            translateX: [
                [3500,3800],
                [-500,1700]
            ],
            translateY: [
                [3500,3800],
                [0,-2000]
            ],
          
        },
        
    });

    lax.addElements('.thor02', {
        scrollY: {
            opacity: [
                [3800,4000],
                [-500,1700]
            ],
            translateY: [
                [3800,4000],
                [-5000,-300]
            ],

            filter:[
                [3800,4200],
                [100,0],
                {
                    cssFn: (value) => {
                        return `blur(${value}px)`;
                    },
                },
            ],
          
        },
        
    });

    lax.addElements('.avengers-logo img', {
        scrollY: {
            opacity: [
                [4900,5300],
                [0,1]
            ],
            scale: [
                [4900,5300],
                [0,1],
            ],

         
          
        },
        
    });




};


    
    




