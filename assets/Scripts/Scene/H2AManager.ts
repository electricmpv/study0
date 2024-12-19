
import { _decorator, Component, Node } from 'cc';
import {SceneManager} from "db://assets/Scripts/Scene/SceneManager";
import {SceneEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;



@ccclass('H2AManager')
export class H2AManager extends SceneManager {
        type:SceneEnum=SceneEnum.H2A
}

