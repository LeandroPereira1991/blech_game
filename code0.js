gdjs.Nova_32cenaCode = {};
gdjs.Nova_32cenaCode.GDskyObjects1= [];
gdjs.Nova_32cenaCode.GDskyObjects2= [];
gdjs.Nova_32cenaCode.GDfloorObjects1= [];
gdjs.Nova_32cenaCode.GDfloorObjects2= [];
gdjs.Nova_32cenaCode.GDplayer_951Objects1= [];
gdjs.Nova_32cenaCode.GDplayer_951Objects2= [];

gdjs.Nova_32cenaCode.conditionTrue_0 = {val:false};
gdjs.Nova_32cenaCode.condition0IsTrue_0 = {val:false};


gdjs.Nova_32cenaCode.eventsList0x70e0f0 = function(runtimeScene, context) {

{


{
gdjs.Nova_32cenaCode.GDplayer_951Objects1.createFrom(runtimeScene.getObjects("player_1"));
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Nova_32cenaCode.GDplayer_951Objects1.length === 0 ) ? 0 :gdjs.Nova_32cenaCode.GDplayer_951Objects1[0].getPointX("x")), "", 0);
}}

}


}; //End of gdjs.Nova_32cenaCode.eventsList0x70e0f0


gdjs.Nova_32cenaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Nova_32cenaCode.GDskyObjects1.length = 0;
gdjs.Nova_32cenaCode.GDskyObjects2.length = 0;
gdjs.Nova_32cenaCode.GDfloorObjects1.length = 0;
gdjs.Nova_32cenaCode.GDfloorObjects2.length = 0;
gdjs.Nova_32cenaCode.GDplayer_951Objects1.length = 0;
gdjs.Nova_32cenaCode.GDplayer_951Objects2.length = 0;

gdjs.Nova_32cenaCode.eventsList0x70e0f0(runtimeScene, context);return;
}
gdjs['Nova_32cenaCode']= gdjs.Nova_32cenaCode;
