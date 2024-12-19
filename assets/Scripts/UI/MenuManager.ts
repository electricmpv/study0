
import { _decorator, Component, Node, director } from 'cc'
import {SceneManager} from "db://assets/Scripts/Scene/SceneManager";
import {SceneEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;


@ccclass('MenuManager')
export class MenuManager extends Component {


    handleBackMenu() {
        director.loadScene(SceneEnum.Menu)
    }
}
