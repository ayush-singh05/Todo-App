import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isComplete: true
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },

        toggleCompleted: (state, action) => {
            const { id } = action.payload;
           
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete 
                    };
                }
                
                return todo;
            });
        }
    }
});

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer;