// import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormEvent, useState } from "react";
// import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


const AddTodoModal = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    //! For local state management
    // const dispatch = useAppDispatch();

    //* For server
    //? [actualFunctionForPost, {data, isLoading, isError}] 

    const [addTodo, {data,isLoading,isError,isSuccess}] = useAddTodosMutation();
    
    console.log({data,isLoading,isError,isSuccess});
   const onSubmit = (e: FormEvent) =>{
    e.preventDefault();
    // const randomString = Math.random().toString(36).substring(2,7)

    const taskDetails ={
      // id: randomString,
      title: task,
      isCompleted: false,
      description: description,
      priority, 
    };
    // !For local state management
    // dispatch(addTodo(taskDetails));

    //* For server 
    addTodo(taskDetails)

    console.log(taskDetails);

   }

    return (
        <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient text-xl mb-5 font-semibold">Add todo</Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form 
        onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task
            </Label>
            <Input
            onBlur={(e)=> setTask(e.target.value)}
              id="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
            onBlur={(e)=> setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
            Priority
            </Label>
            
            <Select onValueChange={(value) => setPriority(value)}>
      <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
                       
          </div>
        </div>
        <div className="flex justify-end">
            <DialogClose asChild>
            <Button type="submit">Save changes</Button>
            </DialogClose>
         
        </div>
        </form>
      </DialogContent>
      
    </Dialog>
    );
};

export default AddTodoModal;