<?xml version="1.0" encoding="UTF-8"?>
<tileset name="shell_01" tilewidth="96" tileheight="96" tilecount="1" columns="1">
 <image source="shell_01.png" width="96" height="96"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="shell_01"/>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="ON_COLLISION" value="pickup_once"/>
   <property name="ON_IDLE" value="shell_idle_anim"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="36" y="8" width="24" height="83"/>
  </objectgroup>
 </tile>
</tileset>
