
import { _decorator, Component, Node, director, Prefab, instantiate } from 'cc'
import {SceneEnum} from "db://assets/Scripts/Enum";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";

const { ccclass, property } = _decorator;


 
@ccclass('SceneManager')
export class SceneManager extends RenderManager {
        @property(Node)
        items:Node = null
    @property(Prefab)
    inventory:Prefab=null

    start() {
        super.start()
      /*  director.preloadScene(SceneEnum.H1)
        director.preloadScene(SceneEnum.H2)
        director.preloadScene(SceneEnum.H3)
        director.preloadScene(SceneEnum.H4)*/
        if(this.inventory){
            const inventoryNode = instantiate(this.inventory)
            this.node.addChild(inventoryNode)

        }
    }
    changeScene(e: Event, scene: string) {
        director.loadScene(scene as SceneEnum)
    }

    render(){}
}

