import {PRINT_HELLO} from '../actions/printHelloAction';

const printHelloWorldReducer=(state={message:'No message'},{type,payload})=>{
    switch (type){
        case PRINT_HELLO:
        console.log(`${PRINT_HELLO} reducer state:${JSON.stringify(state)} , payload:${JSON.stringify(payload)}`);
            return payload;
        default:
        console.log(`${PRINT_HELLO} reducer default state:${JSON.stringify(state)} , payload:${JSON.stringify(payload)}`);
            return state;
    }
}

export default printHelloWorldReducer;