function drawMountainLine(hachangle,handstyle,compStyle){
  drawPowerline(200+random(-100,100),2400+random(-100,100)+random(-100,100),1)

  drawPowerline(1600+random(-100,100),2400+random(-100,100),600+random(-100,100),2)


  gain=random(1,6) //too much requires different compositions.

  if (compStyle<0.2){
    drawMountMany(1200+gain*random(-100,100),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-100,100),1+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1200+gain*random(-100,100),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(800+gain*random(-100,100),200,colors.bg,hachangle,handstyle)
    drawMountMany(800+gain*random(-100,100),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-100,100),100+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2300+gain*random(-100,200),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-100,100),700+gain*random(-100,100),colors.bg,hachangle,handstyle)
  }else if (compStyle<0.4){
    drawMountMany(1200+gain*random(-100,100),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1800+gain*random(-400,400),200,colors.bg,hachangle,handstyle)
    drawMountMany(1700+gain*random(-100,100),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-400,400),100+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2300+gain*random(-100,200),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-300,300),700+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1200+gain*random(-100,100),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-100,100),1+gain*random(-100,100),colors.bg,hachangle,handstyle)
  }else if(compStyle<0.6){
    drawMountMany(200+gain*random(-200,200),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-200,200),1+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(200+gain*random(-200,200),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(700+gain*random(-200,200),200,colors.bg,hachangle,handstyle)
    drawMountMany(300+gain*random(-200,200),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1400+gain*random(-200,200),100+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1200+gain*random(-200,200),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1600+gain*random(-200,200),700+gain*random(-100,100),colors.bg,hachangle,handstyle)
  }else if(compStyle<0.7){
    drawMountMany(2400+gain*random(-100,100),700+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2300+gain*random(-100,100),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-100,100),100+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(800+gain*random(-100,100),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(800+gain*random(-100,100),200,colors.bg)
    drawMountMany(1200+gain*random(-100,100),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-100,100),1+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(1200+gain*random(-100,100),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
  }else if (compStyle<0.9){
    drawMountMany(200+gain*random(-100,100),200+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-100,100),1+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(200+gain*random(-100,100),600+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(700+gain*random(-100,100),200,colors.bg,hachangle,handstyle)
    drawMountMany(300+gain*random(-100,100),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-100,100),100+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2200+gain*random(-100,100),400+gain*random(-100,100),colors.bg,hachangle,handstyle)
    drawMountMany(2400+gain*random(-100,100),700+gain*random(-100,100),colors.bg,hachangle,handstyle)
  }else {
    drawMountMany(200+gain*random(-200,200),200+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(600+gain*random(-200,200),1+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(800+gain*random(-200,200),600+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(700+gain*random(-200,100),200,colors.bg,hachangle,handstyle)
    drawMountMany(300+gain*random(-200,200),400+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(1400+gain*random(-200,200),100+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(1200+gain*random(-200,200),400+gain*random(-200,200),colors.bg,hachangle,handstyle)
    drawMountMany(1800+gain*random(-200,200),300+gain*random(-200,200),colors.bg,hachangle,handstyle)
  }









  push()
  translate(200+300,800)
  rotate(-90)
  buildhouseR(2000,300)
  pop()


  drawPowerline(300,2000,0,1)
  push()
  translate(1000+300,400)
  rotate(0)
  buildhouseR(2000,300)
  pop()


  push()
  translate(1000+200,300)
  rotate(90)
  buildhouseR(2000,300)
  pop()

  push()
  translate(2700+150,1400)
  rotate(90)
  buildhouseR(2000,300)
  pop()

  // push()
  // translate(2200+400,700)
  // rotate(180)
  // buildhouseR(2000,300)
  // pop()





}



function drawMountMany(X,Y,ff,hachangle,handstyle){



  for (k=0;k<1000;k+=random(2,10)){
    drawMountainOne(X+k,Y+k*random(0.6 ,10),ff,hachangle)
    drawMountainOne(X+k,Y+k*random(0.6 ,10),ff,hachangle)
    drawMountainOne(X-k,Y+k*random(2,10),ff,hachangle)

if (handstyle<0.5){
  lrpo=random([1,1]); //0.3
}else if (handstyle<0.85){
  lrpo=random([-1,-1]); //0.3
}else if (handstyle<0.92){
  lrpo=random([1,-1]); //0.2
}else{
  lrpo=random([-1,1]); //0.2
}





//same direction

    if(random(0,1)<0.8){
      rc.circle(X+lrpo*k*random(0.6 ,10),Y+k*random(0.6 ,1),random(10,240), {
        fill: colors.sea1,
        fillStyle: random(["hachure"]),
        fillWeight: random(0.3,0.6),
        hachureAngle: random(0,193),
        stroke: "transparent",
      });
      rc.circle(X+lrpo*k*random(0.6 ,10),Y+k*random(0.6 ,1),random(10,240), {
        fill: colors.sea2,
        fillStyle: random(["hachure"]),
        fillWeight: random(0.3,0.6),
        hachureAngle: random(0,193),
        stroke: "transparent",
      });
    }
    if(random(0,1)<0.8){
      rc.circle(X-lrpo*k*random(0.2 ,6),Y+k*random(2 ,4),random(10,240), {
        fill: colors.body1,
        fillStyle: random(["hachure"]),
        fillWeight: random(0.3,0.6),
        hachureAngle: random(0,193),
        stroke: "transparent",
      });
      rc.circle(X-lrpo*k*random(0.2 ,6),Y+k*random(2 ,4),random(10,240), {
        fill: colors.body2,
        fillStyle: random(["hachure"]),
        fillWeight: random(0.3,0.6),
        hachureAngle: random(0,193),
        stroke: "transparent",
      });
    }
      if(random(0,1)<0.8){
        rc.circle(X-lrpo*k*random(0.6 ,6),Y+k*random(2 ,8),random(10,240), {
          fill: random([colors.sand1,colors.sand2]),
          fillStyle: random(["hachure"]),
          fillWeight: random(0.2,0.4),
          hachureAngle: random(0,193),
          stroke: "transparent",
        });
      }
      if(random(0,1)<0.8){
        rc.circle(X-k*lrpo*random(1.2 ,3),Y+k*random(1.2 ,2),random(10,240), {
          fill: colors.main,
          fillStyle: random(["hachure"]),
          fillWeight: random(0.3,0.7),
          hachureAngle: random(0,193),
          stroke: "transparent",
        });
      }
      if(random(0,1)<0.8){
        rc.circle(X-k*lrpo*random(1.2 ,3),Y+k*random(1.2 ,5),random(10,240), {
          fill: colors.main,
          fillStyle: random(["hachure"]),
          fillWeight: random(0.3,0.7),
          hachureAngle: random(0,193),
          stroke: "transparent",
        });
      }
      if(random(0,1)<0.5){
        rc.circle(X-k*lrpo*random(1.2 ,3),Y+k*random(1.2 ,5),random(10,240), {
          fill: colors.main,
          fillStyle: random(["hachure"]),
          fillWeight: random(0.3,0.7),
          hachureAngle: random(0,193),
          stroke: "transparent",
        });
      }


      // if(random(0,1)<0.8){
      //   rc.circle(X-k*random(0.2 ,6),Y+k*random(2 ,4),random(10,240), {
      //     fill: colors.sea,
      //     fillStyle: random(["hachure"]),
      //     fillWeight: random(0.1,0.2),
      //     hachureAngle: random(0,193),
      //     stroke: "transparent",
      //   });
      // }
    }
  }




function drawMountainOne(X,Y,ff,hachangle){
  mounttop=random(1,3);
  // points=[
  //   [X,Y],
  //   [X+10,Y-30],
  //   [X+15,Y-80],
  //   [X+20,Y-80],
  //   [X+20+mounttop,Y-80],
  //   [X+30+mounttop,Y-30],
  //   [X+40+mounttop,Y],
  //   [X+40+mounttop,Y+10],
  //   [X+45+mounttop,Y+10],
  //   [X+30+mounttop,Y-20],
  //   [X+20+mounttop,Y-20],
  //   [X+20+mounttop,Y-70],
  //   [X+10+mounttop,Y-20],
  //   [X+mounttop,Y+10],
  // ];
stkv= random(3,15);
  points=[
    [X,Y],
    [X+10+random(-stkv,stkv),Y-30+random(-stkv,stkv)],
    [X+15+random(-stkv,stkv),Y-80+random(-stkv,stkv)],
    [X+20+random(-stkv,stkv),Y-80+random(-stkv,stkv)],
    [X+20+mounttop+random(-stkv,stkv),Y-80+random(-stkv,stkv)],
    [X+30+mounttop+random(-stkv,stkv),Y-30+random(-stkv,stkv)],
    [X+40+mounttop+random(-stkv,stkv),Y+random(-stkv,stkv)],
    [X+40+mounttop+random(-stkv,stkv),Y+10+random(-stkv,stkv)],
    [X+45+mounttop+random(-stkv,stkv),Y+10+random(-stkv,stkv)],
    [X+30+mounttop+random(-stkv,stkv),Y-20+random(-stkv,stkv)],
    [X+20+mounttop+random(-stkv,stkv),Y-20+random(-stkv,stkv)],
    [X+20+mounttop+random(-stkv,stkv),Y-70+random(-stkv,stkv)],
    [X+10+mounttop+random(-stkv,stkv),Y-20+random(-stkv,stkv)],
    [X+mounttop+random(-stkv,stkv),Y+10+random(-stkv,stkv)],
  ];

  rc.polygon(points, {
    fill: ff,
    fillStyle: random(["hachure"]),
    fillWeight: min([random(0.01,4),random(0.01,4)]),
    hachureAngle: hachangle,
    stroke: "transparent",
  });
}


function buildhouseR(X,Y){
  angleMode(DEGREES)
  rectMode(CENTER)
  startpoint=[100,100];

  for(k=0;k<20;k++){
    rc.circle(startpoint[0]+random(-2,2)*k,startpoint[1]+random(-2,2)*k,random(20,80), {
      fill: colors.main,
      fillStyle: random(["hachure"]),
      fillWeight: random(0.2,0.4),
      hachureAngle: random(0,193),
      stroke: "transparent",
    });
  }

  leftsidepoints=[
    [startpoint[0],startpoint[1]],
    [startpoint[0]-30*cos(30),startpoint[1]-30*sin(30)],
    [startpoint[0]-30*cos(30),startpoint[1]-30*sin(30)+20],
    [startpoint[0],startpoint[1]+20]
  ];

  frontsidepoints=[
    [startpoint[0],startpoint[1]],
    [startpoint[0]+50,startpoint[1]],
    [startpoint[0]+50,startpoint[1]+20],
    [startpoint[0],startpoint[1]+20]
  ];

  frontroofpoints=[
    [startpoint[0],startpoint[1]],
    [startpoint[0]+50,startpoint[1]],
    [startpoint[0]+25,startpoint[1]-30],
    [startpoint[0]-25,startpoint[1]-30]
  ];

  rc.polygon(frontroofpoints, {
    fill: colors.main,
    fillStyle: random(["hachure"]),
    fillWeight: random(1,2),
    hachureAngle: random(0,193),
    stroke: "solid",
  });


  rc.polygon(frontsidepoints, {
    fill: random([colors.sand1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: random(1,2),
    hachureAngle: random(90,93),
    stroke: "transparent",
  });

  rc.polygon(leftsidepoints, {
    fill: random([colors.sand1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: random(1,2),
    hachureAngle: random(0,1),
    stroke: "transparent",
  });


}


function drawPowerline(start,length,height,width){
  angleMode(RADIANS)
  shiftpowerline=random(0,100)
  //cant draw outside canvas
  let pointsprevious= [
    [100,1100+shiftpowerline+random(-30,30)],
    [100,1100+shiftpowerline+random(-30,30)],
    [100,1100+shiftpowerline+random(-30,30)],
    [100,1100+shiftpowerline+random(-30,30)],
  ];
  for (k=start;k<length;k+=width*random(100,400)){
    points=[
      [k,1200-height/20+shiftpowerline],
      [k+10,1200-height/20+shiftpowerline],
      [k+10,1200-random(200,330)-height+shiftpowerline],
      [k,1200-random(200,330)-height+shiftpowerline],
    ];
    noFill()
    arc(
      (points[1][0]+pointsprevious[1][0])/2,
      (points[3][1]+pointsprevious[3][1])/2-random(150,180),
      points[1][0]-pointsprevious[1][0]+100,
      400+random(0,50),
      -PI/6+PI/2+random(-0.2,0.2),PI/6+PI/2+random(-0.2,0.2)
    );

    if (random(0,1)<0.3){
      arc(
        (points[1][0]+pointsprevious[1][0])/2,
        (points[3][1]+pointsprevious[3][1])/2-random(150,180),
        points[1][0]-pointsprevious[1][0]+100,
        400+random(0,50),
        -PI/6+PI/2+random(-0.2,0.2),PI/6+PI/2+random(-0.2,0.2)
      );
    }

    pointsprevious=points;
    //console.log(pointsprevious)
    rc.polygon(points, {
      fill: colors.main,
      fillStyle: random(["hachure"]),
      fillWeight: random(0.3,0.6),
      hachureAngle: random(0,193),
      stroke: "solid",
    });

  }
}
