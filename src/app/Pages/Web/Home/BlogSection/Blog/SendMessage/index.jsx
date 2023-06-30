import React from "react";
import InputField from "../../../../../../../FormFields/InputField";
import SecondaryButton from "../../../../../../Components/Shared/Buttons/secondarybutton";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { showToast } from "../../../../../../../FormFields/helpers";

function SendMesage() {
  const ref = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = ref.current;
    const formData = new FormData(form);

    for (let [name, value] of formData.entries()) {
      if (!value) {
        showToast("error", "Please fill in all the required fields.");
        return;
      }
    }

    try {
      const result = await emailjs.sendForm(
        "service_nilgc85",
        "template_ka3utjq",
        form,
        "E9e-FbtJcilYbz3l0"
      );
      console.log(result.text);
      showToast("success", "Thank you, your review has been submitted.");
    } catch (error) {
      console.log(error.text);
      showToast("error", "Failed to send message. Please try again later.");
    }

    e.target.reset();
  };

  return (
    <div className="contact-form">
      <form className="fields" ref={ref} onSubmit={sendEmail}>
        <ToastContainer />
        <InputField label={"First name"} name="user_name" />
        <InputField label={"Last name"} name="user_surname" />
        <InputField label={"Phone number"} name="user_phone" />
        <InputField label={"Email address"} name="user_email" type="email" />
        <InputField label={"Message"} multiline rows={4} name="user_message" />
        <SecondaryButton font="22px" hover={true} type="submit">
          Send message
        </SecondaryButton>
      </form>
    </div>
  );
}

export default SendMesage;
