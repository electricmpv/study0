import { EventEnum, ItemStatusEnum, ItemTypeEnum, TriggerStatusEnum } from 'db://assets/Scripts/Enum'
import Singleton from 'db://assets/Scripts/Base/Singleton'
import EventManager from 'db://assets/Scripts/Runtime/EventManager'

interface IItem {
  status: ItemStatusEnum
  type: ItemTypeEnum
}

export default class DataManager extends Singleton {
  static get Instance() {
    return super.getInstance<DataManager>()
  }
  private _curItemType: ItemTypeEnum | null = null
  private _items: Array<IItem> = [
    { type: ItemTypeEnum.Key, status: ItemStatusEnum.Scene },
    { type: ItemTypeEnum.Mail, status: ItemStatusEnum.Disable },
  ]
  private _isSelect: boolean = false
  private _mailboxStatus: TriggerStatusEnum = TriggerStatusEnum.Pending
  private _grandmaStatus: TriggerStatusEnum = TriggerStatusEnum.Pending
  private _grandmaDialogIndex = -1
  get grandmaStatus() {
    return this._grandmaStatus
  }
  set grandmaStatus(newData) {
    this._grandmaStatus = newData
    EventManager.Instance.emit(EventEnum.Render)
  }

  get grandmaDialogIndex() {
    return this._grandmaDialogIndex
  }
  set grandmaDialogIndex(newData) {
    this._grandmaDialogIndex = newData
    EventManager.Instance.emit(EventEnum.Render)
  }
    get mailboxStatus() {
    return this._mailboxStatus
  }
  set mailboxStatus(newData) {
    this._mailboxStatus = newData
    EventManager.Instance.emit(EventEnum.Render)
  }
  get isSelect() {
    return this._isSelect
  }
  set isSelect(newData) {
    this._isSelect = newData
    EventManager.Instance.emit(EventEnum.Render)
  }

  get curItemType() {
    return this._curItemType
  }
  set curItemType(newData) {
    this._curItemType = newData
    EventManager.Instance.emit(EventEnum.Render)
  }
  get items() {
    return this._items
  }

  set items(newData) {
    this._items = newData

    EventManager.Instance.emit(EventEnum.Render)
  }
}