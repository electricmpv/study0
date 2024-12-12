
import { _decorator, Component, Node, Prefab, instantiate } from 'cc'
import {SceneManager} from "db://assets/Scripts/Scene/SceneManager";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;


@ccclass('H4SceneManger')
export class H4SceneManger extends SceneManager {
    @property(Prefab)
    mailPrefab: Prefab = null
    @property(Node)
    mailPlaceholder: Node = null

    render() {
        super.render()
        this.items.destroyAllChildren()
        const mail = DataManager.Instance.items.find(i => i.type === ItemTypeEnum.Mail)
        if(mail&&mail.status===ItemStatusEnum.Scene){

            const mailNode = instantiate(this.mailPrefab)
            this.items.addChild(mailNode)
            mailNode.setPosition(this.mailPlaceholder.position)

        }
    }
}
