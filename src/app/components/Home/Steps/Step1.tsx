import React from "react";
import FormWrapper from "../FormWrapper";
import FormTitle from "../FormTitle";
import InputField from "../InputField";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { nextStep } from "@/redux/slices/stepSlice";
import { useForm } from "react-hook-form";

interface Step1Data {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

const Step1 = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>();

  console.log(errors);

  const onSubmit = (formData: any) => {
    console.log(formData); // formData contains the submitted values
    dispatch(nextStep());
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle />
        <div className="grid grid-cols-2 gap-[30px] mt-[60px] mb-[30px]">
          <InputField
            label="First Name"
            required
            placeholder="First Name*"
            register={register("firstName")}
          />
          <InputField
            label="Last Name"
            required
            placeholder="Last Name*"
            register={register("lastName")}
          />
          <InputField
            label="Email"
            required
            type="email"
            placeholder="Your email address"
            register={register("email")}
          />
          <InputField
            label="Phone"
            placeholder="Phone number*"
            register={register("phone")}
          />
        </div>
        <div className="text-right">
          <Button type="submit">Go Next</Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Step1;
