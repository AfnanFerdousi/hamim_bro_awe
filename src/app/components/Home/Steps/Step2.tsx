import React from "react";
import FormWrapper from "../FormWrapper";
import FormTitle from "../FormTitle";
import InputField from "../InputField";
import Button from "../Button";
import SelectField from "../SelectField";
import AddButton from "../AddButton";
import ButtonSecondary from "../ButtonSecondary";
import { nextStep, prevStep } from "@/redux/slices/stepSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

interface Step2Data {
  timeline: string;
  product: string;
}

const Step2 = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>();

  console.log(errors);

  const onSubmit = (formData: any) => {
    console.log(formData); // formData contains the submitted values
    dispatch(nextStep());
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle />
        <SelectField label="Timeline" register={register("timeline")}>
          <option value="1_week">1 week</option>
          <option value="2_weeks">2 weeks</option>
          <option value="3_weeks">3 weeks</option>
          <option value="1_month">1 month</option>
        </SelectField>
        <div className="flex gap-3 mt-[30px]">
          <div className="flex-grow">
            <InputField
              label="Product"
              placeholder="2 items"
              register={register("product")}
            />
          </div>
          <AddButton className="justify-end items-end mt-auto" />
        </div>
        <div className="mt-[30px] flex justify-between gap-4">
          <ButtonSecondary
            onClick={() => {
              dispatch(prevStep());
            }}
          >
            Go Back
          </ButtonSecondary>
          <Button type="submit">Go Next</Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Step2;
