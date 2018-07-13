cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, Johnny!'
    },

    // use this for initialization
    onLoad: function () {
        // /this.label.string = this.text;
        this.label.string = "hey guy..";
        console.log("onLoad");
    },

    // called every frame
    update: function (dt) {

    },
});
