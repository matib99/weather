import { combineEpics } from "redux-observable";
import { gifEpic } from '../gifFrame/epics';
import { searchEpic } from "../searchFrame/epics";

export const rootEpic = combineEpics(
    gifEpic,
    searchEpic
)