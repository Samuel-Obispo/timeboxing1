import api from "../config/api"
import ITask from "../interfaces/ITask"

const getTask=()=>{
    return api.get<Array<ITask>>("/tasks")
}