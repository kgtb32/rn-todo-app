import {Realm} from '@realm/react';
import { nanoid } from 'nanoid';

export interface ITask{
    title: string;
    done?: boolean;
    due?: Date;
    color?: string;
}

export default class Task extends Realm.Object<Task>{
    id: string;
    title: string;
    done?: boolean;
    due?: Date;
    color?: string;

    static primaryKey = "id";

    constructor(realm: Realm, task: ITask){
        super(realm, {...task, id:nanoid(128)})
    }
}