// write your createStore function here
function createStore (reducer) {
  let state;

  function getState () {
    return state;
  };

  function dispatch (action) {
    state = reducer(state, action);
    render();
  };

  return {
    dispatch,
    getState
  };
};

function candyReducer(state = [], action) {
  switch (action.type) {
	@@ -37,5 +37,5 @@ function render() {

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
let store = createStore(candyReducer);
store.dispatch({type: '@@INIT'});
