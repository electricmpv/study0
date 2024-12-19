
import { _decorator, Component, Node, director, Prefab, instantiate } from 'cc'
import {SceneEnum} from "db://assets/Scripts/Enum";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";
import DataManager from "db://assets/Scripts/Runtime/DataManager";

const { ccclass, property } = _decorator;


@ccclass('SceneManager')
export class SceneManager extends RenderManager {

    type :SceneEnum

  @property(Node)
  items: Node = null
  @property(Prefab)
  inventory: Prefab = null
    @property(Prefab)
    menu: Prefab = null


  start() {
    super.start()
    /*  director.preloadScene(SceneEnum.H1)
        director.preloadScene(SceneEnum.H2)
        director.preloadScene(SceneEnum.H3)
        director.preloadScene(SceneEnum.H4)*/
    if (this.inventory) {
      const inventoryNode = instantiate(this.inventory)
      this.node.addChild(inventoryNode)
    }
    if (this.menu) {
      const menuNode = instantiate(this.menu)
      this.node.addChild(menuNode)
    }
  }
  changeScene(e: Event, scene: string) {
    DataManager.Instance.curScene = scene as SceneEnum
    //director.loadScene(scene as SceneEnum)
  }

  render() {
        if(DataManager.Instance.curScene ===this.type){
            return
        }
        director.loadScene(DataManager.Instance.curScene)
  }
}

