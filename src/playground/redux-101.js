import {createStore} from 'redux';


const incrementCount = ({incrementBy=1}) => ({
    type : 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy=1}) => ({
    type : 'DECREMENT',
    decrementBy: decrementBy
});

const reset = () => ({
    type : 'RESET'
});

const store = createStore((state={ count:0 },action)=>{
    switch (action.type){
        case 'INCREMENT' : 
            return {
                count : state.count + action.incrementBy
            };

        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            };

        case 'RESET' :
            return {
                count : 0
            };

        default : return state;
    }
});


store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 9}));

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(incrementCount({incrementBy: 10}));


store.dispatch(reset());

store.dispatch(incrementCount({incrementBy: 3}));