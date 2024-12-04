
import { _decorator, Component, Node } from 'cc';
import {ItemManager} from "db://assets/Scripts/Item/ItemManager";
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;


 
@ccclass('MailItemManager')
export class MailItemManager extends ItemManager {
    label ='船票'
    type:ItemTypeEnum = ItemTypeEnum.Mail

}

