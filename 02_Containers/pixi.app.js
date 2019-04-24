const Application = PIXI.Application;
const Sprite = PIXI.Sprite;
const Container = PIXI.Container;
const Loader = PIXI.loader;

const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    resolution: 1
});

app.renderer.backgroundColor = 0x173F5F;

document.body.appendChild(app.view);

const container = new Container();

app.stage.addChild(container);

Loader.add('images/pikachu.png').load(setup);

function setup () {
    for ( let i=0 ; i < 4 ; i++ ) {
        const pikachu = new Sprite(Loader.resources['images/pikachu.png'].texture);

        // pikachu.anchor.set(0.5);
        pikachu.x = (i%2)*260;
        pikachu.y = Math.floor(i/2)*260;

        pikachu.pivot.x = pikachu.width/2;
        pikachu.pivot.y = pikachu.width/2;

        app.ticker.add((delta) => {
            pikachu.rotation -= 0.02 * delta;
        });

        container.addChild(pikachu);
    }


    container.x = app.screen.width/2-200;
    container.y = app.screen.height/2-100;

    
}