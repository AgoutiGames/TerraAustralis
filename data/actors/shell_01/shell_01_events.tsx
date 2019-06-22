<?xml version="1.0" encoding="UTF-8"?>
<tileset name="shell_01_events" tilewidth="60" tileheight="60" tilecount="36" columns="6">
 <image source="../../environment/logic/symbol_alphanum.png" width="360" height="360"/>
 <tile id="0" type="AeAnimate">
  <properties>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="shell_idle_anim"/>
  </properties>
 </tile>
 <tile id="6" type="AeAnimate">
  <properties>
   <property name="ANIMATION_FRAMES" type="int" value="16"/>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="NAME" value="pickup_anim"/>
   <property name="SIGNAL" value="STOP"/>
  </properties>
 </tile>
 <tile id="7" type="AeEraseThis">
  <properties>
   <property name="NAME" value="kill_this"/>
  </properties>
 </tile>
 <tile id="8" type="AeMulti">
  <properties>
   <property name="1" value="pickup_anim"/>
   <property name="2" value="kill_this"/>
   <property name="NAME" value="pickup"/>
  </properties>
 </tile>
 <tile id="11" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="pickup"/>
   <property name="NAME" value="pickup_once"/>
  </properties>
 </tile>
</tileset>
