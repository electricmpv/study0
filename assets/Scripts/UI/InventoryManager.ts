import {_decorator, Button, instantiate, Label, Node, Prefab} from 'cc'
import {ItemStatusEnum, ItemTypeEnum} from "db://assets/Scripts/Enum";
import {RenderManager} from "db://assets/Scripts/Base/RenderManager";
import DataManager from "db://assets/Scripts/Runtime/DataManager";
import {ItemManager} from "db://assets/Scripts/Item/ItemManager";

const { ccclass, property } = _decorator;



@ccclass('InventoryManager')
export class InventoryManager extends RenderManager {

    @property(Prefab)
    keyPrefab: Prefab = null
    @property(Prefab)
    mailPrefab: Prefab = null
    
    @property(Label)
    label: Label = null
    @property(Button)
    leftBtn: Button = null
    @property(Button)
    rightBtn: Button = null
    @property(Node)
    placeholder: Node = null
    @property(Node)
    hand: Node = null



    render() {
        this.placeholder.destroyAllChildren()
        const isInventoryItems = DataManager.Instance.items.filter(i => i.status === ItemStatusEnum.Inventory)
        this.node.active = isInventoryItems.length > 0
        if(isInventoryItems.length){
            if(DataManager.Instance.curItemType){
                const item = isInventoryItems.find(i => i.type === DataManager.Instance.curItemType)
                if(item&&item.status ===ItemStatusEnum.Inventory){
                    this.generateItem(item.type)
                }else {

                    const type = isInventoryItems[0].type
                    this.generateItem(type)
                    DataManager.Instance.curItemType = type
                }
            }else {
                const type = isInventoryItems[0].type
                this.generateItem(type)
                DataManager.Instance.curItemType = type
            }
        }
        this.hand.active = DataManager.Instance.isSelect&&Boolean(DataManager.Instance.curItemType)
    }

    generateItem(type:ItemTypeEnum){
        switch (type) {
            case ItemTypeEnum.Key:
                const keyNode = instantiate(this.keyPrefab)
                this.placeholder.destroyAllChildren()
                this.placeholder.addChild(keyNode)
                //keyNode.getComponent(ItemManager)?.render()
                this.label.string = keyNode.getComponent(ItemManager).label
                /*console.log('生成的节点:', keyNode);
                console.log('节点上的组件:', keyNode.getComponent(ItemManager));*/
                break;

            case ItemTypeEnum.Mail:
                const mailNode = instantiate(this.mailPrefab)
                this.placeholder.destroyAllChildren()
                this.placeholder.addChild(mailNode)
                //mailNode.getComponent(ItemManager)?.render()
                this.label.string = mailNode.getComponent(ItemManager).label
                break;

                default:
                    break;
        }
    }

    handleSelect() {
        DataManager.Instance.isSelect = !DataManager.Instance.isSelect
    }
}

