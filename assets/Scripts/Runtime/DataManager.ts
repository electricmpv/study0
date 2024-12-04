import {EventEnum, ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
import Singleton from "db://assets/Scripts/Base/Singleton";
import EventManager from "db://assets/Scripts/Runtime/EventManager";

interface IItem {
    status: ItemStatusEnum
    type:ItemTypeEnum
}

export default class DataManager extends Singleton{

    static get Instance(){
        return super.getInstance<DataManager>()
    }
    private _items:Array<IItem> = [
        {type:ItemTypeEnum.Key, status:ItemStatusEnum.Scene},
        {type:ItemTypeEnum.Mail, status:ItemStatusEnum.Scene},

    ]

    get items(){
        return this._items
    }

    set items(newData){
        this._items = newData

        EventManager.Instance.emit(EventEnum.Render)
    }
}