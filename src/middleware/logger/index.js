const logger = ({getState,dispatch}) => next => action => {
    console.group(action.type)
    console.log('dispatching',action)
    const res = next(action)
    console.log('next sate', getState())
    console.groupEnd()
    return res
}

export default logger