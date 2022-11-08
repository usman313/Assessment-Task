export const addCouterValue = (counterValue) =>{
    return (dispatch)=>{
        dispatch({
            type: 'add',
            payload: counterValue
        })
    }
}

export const subCouterValue = (counterValue) =>{
    return (dispatch)=>{
        dispatch({
            type: 'subtract',
            payload: counterValue
        })
    }
}