const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: 1
});

document.body.appendChild(app.view);

PIXI.loader.add('images/pikachu.png').load(setup);

function setup () {
    const pikachu = new PIXI.Sprite(PIXI.loader.resources['images/pikachu.png'].texture);
    app.stage.addChild(pikachu);
}

