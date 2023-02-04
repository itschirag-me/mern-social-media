import React, { PropsWithChildren } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

type InputType = {
  icon: JSX.Element;
  type: string;
  name: string;
  placeholder: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.FocusEventHandler;
  className: string;
  value: string | number;
  errorMessage: string;
};

const Input = (props: PropsWithChildren<InputType>) => {
  const [typePassword, setTypePassword] = React.useState(false);

  const handleShowPassword = () => setTypePassword(!typePassword);

  if (props.type === "password") {
    return (
      <div className="w-full relative pb-2">
        <div
          className={`flex items-center bg-violet-100 border-b border-violet-600 w-full px-2 my-2 ${
            props.className ? props.className : ""
          }`}
        >
          <span className="text-violet-600 xl:text-xl lg:text-xl md:text-lg text-lg">
            {props.icon}
          </span>
          <input
            type={typePassword ? "password" : "text"}
            name={props.name}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
            onChange={props.onChange}
            className="w-full bg-inherit p-2 focus:outline-none"
            value={props.value}
          />
          <span
            className="text-gray-500 xl:text-lg lg:text-lg md:text-base text-base"
            onClick={handleShowPassword}
          >
            {typePassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
          </span>
        </div>
        <span className="absolute text-rose-400 font-medium -bottom-0 xl:text-sm lg:text-sm md:text-xs text-[10px]">
          {props.errorMessage}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full relative pb-2">
      <div
        className={`flex items-center bg-violet-100 border-b border-violet-600 w-full px-2 my-2 ${
          props.className ? props.className : ""
        }`}
      >
        <span className="text-violet-600 xl:text-xl lg:text-xl md:text-lg text-lg">
          {props.icon}
        </span>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className="w-full bg-inherit p-2 focus:outline-none"
          value={props.value}
        />
      </div>
      <span className="absolute text-rose-400 font-medium -bottom-0 xl:text-sm lg:text-sm md:text-xs text-[10px]">{props.errorMessage}</span>
    </div>
  );
};

export default Input;
