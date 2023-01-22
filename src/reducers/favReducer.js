import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favs: []
}

const favSlice = createSlice({
    name: "favItems",
    initialState,
    reducers: {
        addToFav : (state, action)=>{
            const itemIndex = state.favs.findIndex((item)=>item.id === action.payload.id);
            // console.log("itemIndex ", itemIndex);
            // console.log("action.payload.id ", action.payload.id);
            // console.log("action.payload ", action.payload);
            if(itemIndex >=0){
                const itemId = action.payload.id;
                state.favs = state.favs.filter((item)=> item.id !== itemId);
            }
            else{
                const tempProduct = {...action.payload};
                state.favs.push(tempProduct); 
            }
        },

        removeFromFav : (state,action)=>{
            const itemId = action.payload;
            state.favs = state.favs.filter((item)=> item.id !== itemId);
        }
    }
});

export const {addToFav, removeFromFav} = favSlice.actions;
export const favSelector = (state)=> state.favItems;
export default favSlice.reducer;