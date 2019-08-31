//========================
// YicCharacterStatus.js
//========================

/*:
* @plugindesc A small window to record character's status
* @author Yic
*
* @param yicx
* @dec The x position of box
* @default 100
*
* @param yicy
* @dec The y position of box
* @default 100
*
* 
*/

function Window_YMP() {
	this.initialize.apply(this,arguments)
}
var parameters = PluginManager.parameters('YicCharacterStatus');


Window_YMP.prototype = Object.create(Window_Base.prototype); //新建一个窗口

Window_YMP.prototype.initialize = function (x, y, width, height) {
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this.refresh();
}



Window_YMP.prototype.refresh = function () {
    this.contents.fontSize=15;
    //this.drawText(':D', 0, 0, this.Width);
    this.drawActorFace($gameParty.members()[0], 0, 0);
    
}



Scene_Map.prototype.createDisplayObjects = function() {
    this.createSpriteset();
    this.createMapNameWindow();
    this.createWindowLayer();
    this.createAllWindows();
    this.createStatusWindow();
};

Scene_Map.prototype.createStatusWindow = function() {
    this._MessageWindow = new Window_YMP(parameters.yicx,parameters.yicy,192,192);
    this.addWindow(this._MessageWindow);
};
