import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Table from "./Table"


const User = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const sendEmail = (data) => {
   console.log(data)
         
  };
  return (
    <div>
    <div className="m-2 p-2 border-black border-[2px]">
      <div>
        <h4
          className="dark:text-[#758283] text-[44px] font-bold  mt-4 ">
        
        Add User
        </h4>
       
        <div className="mt-3">
          <form
            onSubmit={handleSubmit((data) => sendEmail(data))}
            className="  "
            ref={form}
            autocomplete="off"
          >
            <input
             {...register("fullName", {
              required: true,
              maxLength: 30,
              minLength:5,
              pattern: /^[a-zA-Z ]*$/
            })}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Name.."
              className="placeholder:text-[#758283] text-[24px] border-[2px] border-[#000000]"
              autocomplete="off"
            />
            {errors?.fullName?.type === "required" && (
              <p className="error">This field is required</p>
            )}
            {errors?.fullName?.type === "maxLength" && (
              <p className="error">
               Name cannot exceed 20 characters
              </p>
            )}
            {errors?.fullName?.type === "minLength" && (
              <p className="error">
                Name must be 5 characters
              </p>
            )}
            {errors?.fullName?.type === "pattern" && (
              <p className="error">Alphabetical characters only</p>
            )}
             <br/>
            <input
              {...register("ContactDetail", {
                required: true,
                maxLength: 20,
                minLength:10,
                pattern:  /\d+/,
               
              
              })}
              type="text"
              id="lastName"
              name="ContactDetail"
              placeholder="Age.."
              className="placeholder:text-[#758283] text-[24px]  border-[2px] border-[#000000]"
              autocomplete="off"
            />

            {errors?.ContactDetail?.type === "required" && (
              <p className="error">    "This input is number only."</p>
            )}
            {errors?.ContactDetail?.type === "minLength" && (
              <p className="error">
              Age must be 1 characters
              </p>
            )}
             {errors?.ContactDetail?.type === "maxLength" && (
              <p className="error">
                Age must be 2 characters
              </p>
            )}
            {errors?.ContactDetail?.type === "pattern" && (
              <p className="error">Only digit number are allowed</p>
            )} <br/>
            <input
             {...register("subject", {
              required: true,
              maxLength: 30,
              minLength:5,
              pattern: /^[a-zA-Z ]*$/
            })}
              type="text"
              id="subject"
              name="subject"
              placeholder="Gender.."
              className="placeholder:text-[#758283] text-[24px] border-[2px] border-[#000000]"
              autocomplete="off"
            />
             {errors?.subject?.type === "required" && (
              <p className="error">This field is required</p>
            )}
            {errors?.subject?.type === "maxLength" && (
              <p className="error">
              Gender cannot exceed 6 characters
              </p>
            )}
              {errors?.subject?.type === "minLength" && (
              <p className="error">
              Gender cannot exceed 4 characters
              </p>
            )}
            {errors?.subject?.type === "pattern" && (
              <p className="error">Alphabetical characters only</p>
            )}
            <br/>
            <input type="submit" className="w-[100%] bg-white md:w-[70%] lg:w-[30%]" value=" Add " />
          </form>
        </div>
      </div>
    </div>
    <Table/>
    </div>
  );
};

export default User;
