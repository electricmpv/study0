
import { _decorator, Component, Node, SpriteFrame, CCInteger, Sprite } from 'cc';
import {ItemManager} from "db://assets/Scripts/Item/ItemManager";
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
const { ccclass, property } = _decorator;



@ccclass('ContentManager')
export class ContentManager extends RenderManager {
  @property(SpriteFrame)
  normalSf: SpriteFrame = null
  @property(SpriteFrame)
  successSf: SpriteFrame = null
  @property(CCInteger)
  index: number
  render() {
    const curIndex = DataManager.Instance.H2AData.findIndex(i => i === this.index)
    const answerIndex = DataManager.Instance.H2AAnswer.findIndex(i => i === this.index)
    this.getComponent(Sprite).spriteFrame = curIndex === answerIndex ? this.successSf : this.normalSf
  }
}

