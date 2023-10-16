import { createReducer } from "@reduxjs/toolkit";

const initialState={
    c:0,
}


export const customReducer= createReducer(initialState , {

    Increment: (state)=>{
        state.c +=1
    },

    Incrementby25: (state,action)=>{
        state.c +=1;
        state.c += action.payload
    },

    Decrement: (state)=>{
        state.c -=1
    },

})