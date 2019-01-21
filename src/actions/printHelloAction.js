import {PRINT_HELLO} from './index';

export const printHelloWorld=()=>{
    console.log("I am in hello action");
    return {type:PRINT_HELLO,payload:{message:'Hello World!'}};
}