import * as PIXI from "pixi.js"

export class Application {
    static app = new PIXI.Application({
        width: 1024,
        height: 768,
        antialias: true,
        transparent: false,
        resolution: 1});
    
    public static run() {
        document.body.appendChild(Application.app.view);
    }
}    