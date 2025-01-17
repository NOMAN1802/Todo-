// import { useAppSelector } from "@/redux/hook";
// import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";


const TodoContainer = () => {

    const [priority, setPriority] = useState('');
    console.log(priority);
    // From local state
    // const {todos} = useAppSelector((state)=> state.todos);

    // From server
    const {data : todos,isError,isLoading} = useGetTodosQuery(priority);

    if(isLoading){
        return <p>Loading...</p>
    }
   console.log(todos);
    return (
        <div>
            <div className="flex justify-between">
                
                <AddTodoModal/>
                <TodoFilter priority={priority} setPriority={setPriority}/>

            </div>

            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
                

            <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.length === 0 ? (
            <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
              <p>There is no task pending</p>
            </div>
          ) : (
            todos?.data.map(item => <TodoCard key={item._id} {...item} />)
          )}
        </div>
            </div>
        </div>
    );
};

export default TodoContainer; 