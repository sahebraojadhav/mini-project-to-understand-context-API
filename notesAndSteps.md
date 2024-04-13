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