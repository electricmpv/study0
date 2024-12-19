
import { _decorator, Component, Node } from 'cc';
import {SceneManager} from "db://assets/Scripts/Scene/SceneManager";
import {SceneEnum} from "db://assets/Scripts/Enum";
const { ccclass, property } = _decorator;


 
@ccclass('H1SceneManger')
export class H1SceneManger extends SceneManager {
        type: SceneEnum = SceneEnum.H1
}

