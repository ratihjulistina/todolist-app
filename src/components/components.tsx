import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export function Header() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-white">
        Chores Todo List
      </h1>
    </div>
  );
}

export function Todolist({ list }: { list: string }) {
  return (
    <div>
      <div className="m-auto flex justify-start items-center max-w-[50%] mb-6 mt-2 gap-2 ">
        <input type="checkbox" name="" id="" className="rounded" />
        <p className="text-white text-left ">{list}</p>
        <button className="rounded ml-auto w-6 h-6 border-2 border-collapse border-white ">
          <img
            src="icons8-delete.svg"
            alt=""
            className="object-center px-1 py-1 border-white bg-white"
          />
        </button>
      </div>
    </div>
  );
}

export function Done({ num }: { num: string }) {
  return (
    <div className="text-white font-bold m-auto flex justify-center">
      Done : {num}
    </div>
  );
}

export function Todolistinput() {
  return (
    <div className="flex justify-center flex-col max-w-[50%] m-auto">
      <p className="mt-6 mb-1 text-white">Add todo</p>
      <input
        type="text"
        placeholder="Enter Todo"
        id="input-todo"
        className="text-xl pb-1 pl-1 rounded mb-2"
      />
      <button
        id="add-todo"
        className="bg-blue-400 text-white px-3 py-1 rounded w-[100px]  "
      >
        Add Task
      </button>
    </div>
  );
}
