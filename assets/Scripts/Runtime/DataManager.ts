import { EventEnum, ItemStatusEnum, ItemTypeEnum, SceneEnum, TriggerStatusEnum } from 'db://assets/Scripts/Enum'
import Singleton from 'db://assets/Scripts/Base/Singleton'
import EventManager from 'db://assets/Scripts/Runtime/EventManager'
import { sys } from 'cc'

interface IItem {
  status: ItemStatusEnum
  type: ItemTypeEnum
}

const STORAGE_KEY = 'STORAGE_KEY'
export default class DataManager extends Singleton {
  static get Instance() {
    return super.getInstance<DataManager>()
  }

  readonly H2AAnswer = [0, 1, 2, 3, 4, 5, null]
  readonly H2AInitData = [1, 0, 3, 2, 5, 4, null]
  private _H2AData: Array<number | null> = [...this.H2AInitData]

  private _curItemType: ItemTypeEnum | null = null
  private _items: Array<IItem> = [
    { type: ItemTypeEnum.Key, status: ItemStatusEnum.Scene },
    { type: ItemTypeEnum.Mail, status: ItemStatusEnum.Disable },
  ]
  private _isSelect: boolean = false
  private _mailboxStatus: TriggerStatusEnum = TriggerStatusEnum.Pending
  private _grandmaStatus: TriggerStatusEnum = TriggerStatusEnum.Pending
  private _grandmaDialogIndex = -1
  private _doorStatus: TriggerStatusEnum = TriggerStatusEnum.Pending
  private _curScene: SceneEnum = SceneEnum.H1

  get H2AData() {
    return this._H2AData
  }
  set H2AData(newData) {
    this._H2AData = newData
    this.renderAndSave()
  }
  get curScene() {
    return this._curScene
  }
    set curScene(newData) {
    this._curScene = newData
    this.renderAndSave()
  }
  get doorStatus() {
    return this._doorStatus
  }
  set doorStatus(newData) {
    this._doorStatus = newData
    this.renderAndSave()
  }
  get grandmaStatus() {
    return this._grandmaStatus
  }
  set grandmaStatus(newData) {
    this._grandmaStatus = newData
    this.renderAndSave()
  }

  get grandmaDialogIndex() {
    return this._grandmaDialogIndex
  }
  set grandmaDialogIndex(newData) {
    this._grandmaDialogIndex = newData
    this.renderAndSave()
  }
  get mailboxStatus() {
    return this._mailboxStatus
  }
  set mailboxStatus(newData) {
    this._mailboxStatus = newData
    this.renderAndSave()
  }
  get isSelect() {
    return this._isSelect
  }
  set isSelect(newData) {
    this._isSelect = newData
    this.renderAndSave()
  }

  get curItemType() {
    return this._curItemType
  }
  set curItemType(newData) {
    this._curItemType = newData
    this.renderAndSave()
  }
  get items() {
    return this._items
  }

  set items(newData) {
    this._items = newData

    this.renderAndSave()
  }

  renderAndSave() {
    EventManager.Instance.emit(EventEnum.Render)
    sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      H2AData: this.H2AData,
      curScene: this.curScene,
      doorStatus: this.doorStatus,
      grandmaStatus: this.grandmaStatus,
      grandmaDialogIndex: this.grandmaDialogIndex,
      mailboxStatus: this.mailboxStatus,
      isSelect: this.isSelect,
      curItemType: this.curItemType,
      items: this.items,
    }))
  }

  restore(){
    const _data = sys.localStorage.getItem(STORAGE_KEY)
    try {
      const data = JSON.parse(_data)
      this.H2AData = data.H2AData
      this.curScene = data.curScene
      this.doorStatus = data.doorStatus
      this.grandmaStatus = data.grandmaStatus
      this.grandmaDialogIndex = data.grandmaDialogIndex
      this.mailboxStatus = data.mailboxStatus
      this.isSelect = data.isSelect
      this.curItemType = data.curItemType
      this.items = data.items
    } catch (error) {
      console.error(error)
      this.reset()
    }
  }

  reset() {
    this.H2AData = [...this.H2AInitData]
    this.curScene = SceneEnum.H1
    this.doorStatus = TriggerStatusEnum.Pending
    this.grandmaStatus = TriggerStatusEnum.Pending
    this.grandmaDialogIndex = -1
    this.mailboxStatus = TriggerStatusEnum.Pending
    this.isSelect = false
    this.curItemType = null
    this.items = [
      { type: ItemTypeEnum.Key, status: ItemStatusEnum.Scene },
      { type: ItemTypeEnum.Mail, status: ItemStatusEnum.Disable },
    ]
  }
}