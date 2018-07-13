// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 所有属性参数都是可选的，但至少必须声明 default, get, set 参数中的其中一个。
         */
        User: {
            id: 0,
            name: "aaa",
            get() {
                return this._user;
            },
            set(value) {
                this._user = value;
            }
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() { },

    start() {
        cc.log("test");
    },

    // update (dt) {},
});