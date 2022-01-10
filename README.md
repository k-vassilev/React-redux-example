**STORE-> globalized state, holding the data used throughout the whole application**

**ACTION -> Describes what we want to do with regard to the state; A function which returns an object**

**REDUCER -> Describes how the actions transform the state into the next state ; modifies store based on the chosen action**

**DISPATCH -> Trigger. Action is dispatched to the reducer, reducer determines how to affect the state and then acts on it.**