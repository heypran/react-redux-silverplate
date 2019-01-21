import {PRINT_HELLO} from '../actions';

const printHelloWorldReducer=(state={message:'No message'},{type,payload})=>{
    switch (type){
        case PRINT_HELLO:
        console.log('I amin hello reducer..'+JSON.stringify(payload));
            return payload;
        default:
            return state;
    }
}

export default printHelloWorldReducer;