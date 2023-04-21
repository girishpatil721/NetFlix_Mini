const init_count={
    count:0
}
function counter (state=init_count,action){
    switch(action.type){
        case 'Inc':return{ count:state.count+1}
        case 'Dec':return{ count:state.count-1}
        default: return state
    }
}

export default counter;