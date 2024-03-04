Shery.textAnimate(" h1 " /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
});

gsap.from(".dipansuImage",
    {
        y: 100,
        stagger: .3,
        opacity: 0,
        ease: Expo,
        duration: 2
    })
gsap.from(".right .div",
    {
        x: 30,
        stagger: .6,
        opacity: 0,
        ease: Expo,
        duration: 2
    })

gsap.from(".socialmedia ",
    {
        y: 30,
        stagger: .6,
        opacity: 0,
        ease: Expo,
        duration: 2
    })


Shery.imageEffect(".dipansuImage",
    {
        style: 3,
        config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 87.02, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 54.38 }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": 1.034735931204197 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }, "uColor": { "value": true }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] } },
    })

