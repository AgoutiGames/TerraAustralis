<?xml version="1.0" encoding="UTF-8"?>
<tileset name="stage_01_events" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../../environment/logic/symbol_numbers.png" width="600" height="600"/>
 <tile id="70" type="AeAccelerate">
  <properties>
   <property name="NAME" value="accelerate_fall"/>
   <property name="XFACTOR" type="float" value="0"/>
   <property name="YFACTOR" type="float" value="1000"/>
  </properties>
 </tile>
 <tile id="71" type="AeDecelerate">
  <properties>
   <property name="NAME" value="friction"/>
   <property name="XFACTOR" type="float" value="1000"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="72" type="AeMove">
  <properties>
   <property name="NAME" value="move"/>
  </properties>
 </tile>
 <tile id="73" type="AeMulti">
  <properties>
   <property name="1" value="accelerate_fall"/>
   <property name="2" value="friction"/>
   <property name="3" value="move"/>
   <property name="NAME" value="physics"/>
  </properties>
 </tile>
 <tile id="90" type="AeAccelerate">
  <properties>
   <property name="NAME" value="accelerate_right"/>
   <property name="XFACTOR" type="float" value="1500"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="91" type="AeAccelerate">
  <properties>
   <property name="NAME" value="accelerate_left"/>
   <property name="XFACTOR" type="float" value="-1500"/>
   <property name="XMAX_SPEED" type="float" value="-500"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="92" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="anim_walk_right"/>
  </properties>
 </tile>
 <tile id="93" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="LEFT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="anim_walk_left"/>
  </properties>
 </tile>
 <tile id="94" type="AeMulti">
  <properties>
   <property name="1" value="accelerate_right"/>
   <property name="2" value="anim_walk_right"/>
   <property name="NAME" value="walk_right"/>
  </properties>
 </tile>
 <tile id="95" type="AeMulti">
  <properties>
   <property name="1" value="accelerate_left"/>
   <property name="2" value="anim_walk_left"/>
   <property name="NAME" value="walk_left"/>
  </properties>
 </tile>
 <tile id="96" type="AeAccelerate">
  <properties>
   <property name="NAME" value="accelerate_jump"/>
   <property name="YFACTOR" type="float" value="-99999999"/>
   <property name="YMAX_SPEED" type="float" value="-600"/>
  </properties>
 </tile>
 <tile id="97" type="AeSound">
  <properties>
   <property name="NAME" value="sound_jump"/>
   <property name="PATH" type="file" value="../../audio/sounds/Ding2.ogg"/>
  </properties>
 </tile>
 <tile id="98" type="AeMulti">
  <properties>
   <property name="1" value="accelerate_jump"/>
   <property name="2" value="sound_jump"/>
   <property name="NAME" value="jump"/>
  </properties>
 </tile>
 <tile id="99" type="AteOnGround">
  <properties>
   <property name="NAME" value="jump_ground"/>
   <property name="SUCCESS" value="jump"/>
   <property name="TOLERANCE" type="int" value="5"/>
  </properties>
 </tile>
</tileset>
