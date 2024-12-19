import {_decorator, Sprite, director} from 'cc'
import {SceneEnum, TriggerStatusEnum, TriggerTypeEnum} from 'db://assets/Scripts/Enum'

import {TriggerManager} from 'db://assets/Scripts/Trigger/TriggerManager'
import DataManager from 'db://assets/Scripts/Runtime/DataManager'

const { ccclass, property } = _decorator

@ccclass('DoorTriggerManager')
export class DoorTriggerManager extends TriggerManager {
  type: TriggerTypeEnum = TriggerTypeEnum.Door

  render() {
    super.render()
    this.getComponent(Sprite).enabled = DataManager.Instance.doorStatus === TriggerStatusEnum.Pending
  }
  handleTrigger() {
    if(DataManager.Instance.doorStatus ===TriggerStatusEnum.Pending){

      DataManager.Instance.curScene = SceneEnum.H2A
    }else {
      DataManager.Instance.curScene = SceneEnum.H3
    }
  }
}