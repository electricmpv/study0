import { _decorator, Node } from 'cc'
import { ItemStatusEnum, ItemTypeEnum, TriggerStatusEnum, TriggerTypeEnum } from 'db://assets/Scripts/Enum'

import { TriggerManager } from 'db://assets/Scripts/Trigger/TriggerManager'
import DataManager from 'db://assets/Scripts/Runtime/DataManager'

const { ccclass, property } = _decorator

@ccclass('MailboxTriggerManager')
export class MailboxTriggerManager extends TriggerManager {
  type: TriggerTypeEnum = TriggerTypeEnum.MailBox
  @property(Node)
  closeNode: Node = null
  @property(Node)
  openNode: Node = null

  render() {
    super.render()
    const open = DataManager.Instance.mailboxStatus === TriggerStatusEnum.Resolved
    this.closeNode.active = !open
    this.openNode.active = open
  }
  handleTrigger() {
    if (DataManager.Instance.curItemType === ItemTypeEnum.Key && DataManager.Instance.isSelect) {
      DataManager.Instance.curItemType = null
      DataManager.Instance.isSelect = false
      DataManager.Instance.items.find(i => i.type === ItemTypeEnum.Key).status = ItemStatusEnum.Disable
      DataManager.Instance.items.find(i => i.type === ItemTypeEnum.Mail).status = ItemStatusEnum.Scene
      DataManager.Instance.items = [...DataManager.Instance.items]
      DataManager.Instance.mailboxStatus = TriggerStatusEnum.Resolved
    }
  }
}