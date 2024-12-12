import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc'
import {ItemStatusEnum, ItemTypeEnum, TriggerTypeEnum} from "db://assets/Scripts/Enum";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";
const { ccclass, property } = _decorator;



@ccclass('TriggerManager')
export abstract class TriggerManager extends RenderManager {

  type: TriggerTypeEnum


  render() {}

  abstract handleTrigger(): void
}