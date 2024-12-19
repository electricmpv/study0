
import { _decorator, Component, Node, director } from 'cc'
import {SceneManager} from "db://assets/Scripts/Scene/SceneManager";
import {SceneEnum} from "db://assets/Scripts/Enum";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
const { ccclass, property } = _decorator;


@ccclass('MenuSceneManager')
export class MenuSceneManager extends SceneManager {
  type: SceneEnum = SceneEnum.Menu

  handleNewGame() {
    DataManager.Instance.reset()
    director.loadScene(SceneEnum.H1)
  }
  handleContinueGame() {
    DataManager.Instance.restore()
    director.loadScene(DataManager.Instance.curScene)
  }

  render() {
    
  }
}
