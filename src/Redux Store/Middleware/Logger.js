export const loggerMiddlewares = (store) => (next) => (action) => {
    if(!action.type)
    {
        return next(action);
    }
    console.log("type : ", action.type);
    console.log("payload : ", action.payload);
    console.log("Previous state : ", store.getState());

    next(action);

    console.log("Next state : ", store.getState());
}