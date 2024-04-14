Step 1: CREATE THE DOUCUMENT

import { createContext } from "react";

export default new createContext(null);

Step 2: wrap inside  </TodoContext.Provider> inside app.jsx

 <TodoContext.Provider value{{}}> first {}->javascript code second{}->object
 
 </TodoContext.Provider>


Step 3:use the todoContext
path of file should be included explicitly
const{recive the parameter which we exported there}
const{todos,setTodos}=useContext(TodoContext);


finally they create common document which is helpful to commenly edit 

========================================================================================================


############ REDUCERS #########

reducers are just fuctions 

refer the image of working of state image

=++++++++++++++++++++++++++++++++++++++++++++++++

implementatio of useReducer 
 const[todos,dispatch]=useReducer(TodoReducers,[])

 const [stateVariable,dispatch]=useReducer(reducerMethod,initialState)

 dispatch is used to trigger task