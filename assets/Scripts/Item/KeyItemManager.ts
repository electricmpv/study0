
import { _decorator, Component, Node } from 'cc';
import {ItemManager} from "db://assets/Scripts/Item/ItemManager";
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;


 
@ccclass('KeyItemManager')
export class KeyItemManager extends ItemManager {
    label ='信箱钥匙'
    type:ItemTypeEnum = ItemTypeEnum.Key

}

