//import {PRINT_HELLO} from './index';

export const PRINT_HELLO = 'print:hello';

export const printHelloWorld=()=>{
    console.log("Hello action..");
    //you may perform api requests here..
    return {type:PRINT_HELLO,payload:{message:'Hello World!'}};
}