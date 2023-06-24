import { createRealmContext } from "@realm/react";
import Task from "../model/Task";

export default createRealmContext({
    schema: [Task]
})