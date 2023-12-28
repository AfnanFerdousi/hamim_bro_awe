import React from "react";
import FormWrapper from "../FormWrapper";
import FormTitle from "../FormTitle";
import InputField from "../InputField";
import Button from "../Button";
import SelectField from "../SelectField";
import AddButton from "../AddButton";
import ButtonSecondary from "../ButtonSecondary";
import TextareaField from "../TextAreaField";
import RadioField from "../RadioField";
import { useDispatch } from "react-redux";
import { nextStep, prevStep } from "@/redux/slices/stepSlice";
import { useForm } from "react-hook-form";

interface Step3Data {
  message: string;
}

const Step3 = () => {
  const dispatch = useDispatch();

  const radioOptions = [
    { label: "Website Design", value: "web_design" },
    { label: "App Design", value: "app_design" },
    { label: "Ui/UX Design", value: "ui_ux_design" },
  ];

  const [selectedOption, setSelectedOption] = React.useState<
    string | undefined
  >(undefined);

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>();

  console.log(errors);

  const onSubmit = (formData: any) => {
    console.log(formData); // formData contains the submitted values
    console.log(selectedOption);
    dispatch(nextStep());
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle />
        <div className="mt-[30px]">
          <div className="mb-[30px]">
            <RadioField
              label="Services"
              options={radioOptions}
              name="group1"
              onValueChange={handleRadioChange}
              required
            />
          </div>
          <TextareaField
            label="Message"
            placeholder="Write your message..."
            rows={6}
            register={register("message")}
          />
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
        </div>
      </form>
    </FormWrapper>
  );
};

export default Step3;
