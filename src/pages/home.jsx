import React from "react";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import "../style.css";

export default function Home() {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem text="Eat"/> 
      <TodoItem text="Code"/> 
      <TodoItem text="Play"/> 
      <TodoItem text="Stude"/> 
      <TodoItem text="Sleep again"/> 
      <Button />
    </div>
  );
};