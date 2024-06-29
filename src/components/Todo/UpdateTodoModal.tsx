import { Dialog, DialogClose, DialogContent, DialogDescription,  DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FormEvent, useState } from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useUpdateFullTodosMutation } from "@/redux/api/api";
const UpdateTodoModal = ({taskId}) => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const [updateFullTodo,{isLoading}] = useUpdateFullTodosMutation();

    const onSubmit = (e: FormEvent) =>{
        e.preventDefault();
       
        const taskDetails ={
           id: taskId, 
          title: task,
          isCompleted: !isCompleted,
          description: description,
          priority, 
        };
        //* For server 
        updateFullTodo(taskDetails)
    
        console.log("after edit",taskDetails);
    
       }
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-[#5C53FE]"><svg className="size-5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Todo</DialogTitle>
            <DialogDescription>
              Update your tasks that you want to finish.
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

export default UpdateTodoModal;