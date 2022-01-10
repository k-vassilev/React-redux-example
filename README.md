**STORE-> globalized state, holding the data used throughout the whole application**

**ACTION -> Describes what we want to do with regard to the state; A function which returns an object**

**REDUCER -> Describes how the actions transform the state into the next state ; modifies store based on the chosen action**

**DISPATCH -> Trigger. Action is dispatched to the reducer, reducer determines how to affect the state and then acts on it.**

**Payload is what is keyed ( the key value pairs ) in your actions and passed around between reducers in your redux application. For example -,This is a generally accepted convention to have a type and a payload for an action**