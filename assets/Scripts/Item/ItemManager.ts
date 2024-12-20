
import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc'
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";
const { ccclass, property } = _decorator;


 
@ccclass('ItemManager')
export class ItemManager extends RenderManager {
  label = '物品'
  type: ItemTypeEnum

  @property(SpriteFrame)
  sceneSf: SpriteFrame = null
  @property(SpriteFrame)
  inventorySf: SpriteFrame = null

  start() {

    this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this)
      super.start()
  }

  onDestroy() {

    this.node.off(Node.EventType.TOUCH_END, this.touchEnd,this)
      super.onDestroy()
  }

  render() {
      const spriteComponent = this.getComponent(Sprite)
      const status = DataManager.Instance.items.find(i => i.type === this.type)?.status

     /* console.log('Render Method - Status:', status);
      console.log('Render Method - sceneSf:', this.sceneSf);
      console.log('Render Method - inventorySf:', this.inventorySf);
      console.log('Render Method - Sprite Component:', spriteComponent);*/

      switch (status) {
          case ItemStatusEnum.Scene:
              this.node.active = true
              spriteComponent.spriteFrame = this.sceneSf
              break;
          case ItemStatusEnum.Inventory:
              this.node.active = true
              spriteComponent.spriteFrame = this.inventorySf
              break;
          case ItemStatusEnum.Disable:
              this.node.active = false
              break;
              default:
                  break;
      }
  }

  touchEnd() {
    const item = DataManager.Instance.items.find(i => i.type === this.type)
     // console.log('Touch End Item:', item)
    if (!item) {
      return
    }
    if (item.status === ItemStatusEnum.Scene) {
      item.status = ItemStatusEnum.Inventory
      DataManager.Instance.items = [...DataManager.Instance.items]
       // console.log('Item Status Updated:', item.status)


    }
  }
}
