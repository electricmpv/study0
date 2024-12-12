import {_decorator, Node, Prefab,instantiate} from 'cc'
import {SceneManager} from 'db://assets/Scripts/Scene/SceneManager'
import DataManager from 'db://assets/Scripts/Runtime/DataManager'
import {ItemStatusEnum, ItemTypeEnum} from 'db://assets/Scripts/Enum'

const { ccclass, property } = _decorator

@ccclass('H2SceneManger')
export class H2SceneManger extends SceneManager {
  @property(Prefab)
  keyPrefab: Prefab = null
  @property(Node)
  keyPlaceholder: Node = null

  render() {
    super.render()
    this.items.destroyAllChildren()
    const key = DataManager.Instance.items.find(i => i.type === ItemTypeEnum.Key)
      if(key&&key.status===ItemStatusEnum.Scene){

        const keyNode = instantiate(this.keyPrefab)
          this.items.addChild(keyNode)
          keyNode.setPosition(this.keyPlaceholder.position)

      }
  }
}