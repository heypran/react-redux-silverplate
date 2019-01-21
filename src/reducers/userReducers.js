import { FETCH_DETAILS } from "../actions";

const userReducers=(state={},action)=>{
    switch(action.type){
        case FETCH_DETAILS:
            return {data:action.payload};
        default:
            return state;
    }
}

export default userReducers;