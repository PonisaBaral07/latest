import {createSlice} from "@reduxjs/toolkit";
const orderSlice= createSlice({
    name:"Order",
    initialState:{
        orderItems:[],
    },
    reducers:{
        add:(state,action)=>{
            const order=state.orderItems.find(
            (order)=>order.id==action.payload.id,
        )
         if (order){
            order.quantity+=1;
         }
         else{
            state.orderItems.push({...action.payload,quantity:1});
        }},
    
         increment:(state,action)=>{
            const order =state.orderItems.find(
            (order)=>order.id==action.payload
);
if(order){
order.quantity+=1;
}},
decrement:(state,action)=>{
            const order =state.orderItems.find(
            (order)=>order.id==action.payload
);
if(order){
    if(order.quantity>1){
order.quantity-=1;
}
else{
    state.orderItems=state.orderItems.filter(
        (item)=>item.id!==action.payload
    )
}
}
},

remove:(state,action)=>{
state.orderItems=state.orderItems.filter(
(order)=>order.id!==action.payload);
}
}
});
export const {add,increment,decrement,remove}=orderSlice.actions;
export default orderSlice.reducer;
