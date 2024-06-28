import { useAppSelector } from "@/redux/hook";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    const {todos} = useAppSelector((state)=> state.todos);

    return (
        <div>
            <div className="flex justify-between">
                
                <AddTodoModal/>
                <TodoFilter/>

            </div>

            <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
                {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">

                    <p>There is no task pending</p>

                </div> */}

           <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
           {
            todos.map(item =>(<TodoCard {...item}/>))
           }
           </div>
            </div>
        </div>
    );
};

export default TodoContainer;