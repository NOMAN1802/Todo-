import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "src/components/ui/Container";


const Todo = () => {
    return (
        <Container>
            <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>

            <TodoContainer/>
        </Container>
    );
};

export default Todo;