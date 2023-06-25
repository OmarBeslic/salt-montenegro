import React from "react";
import InputField from "../../../../../../../FormFields/InputField";
import SecondaryButton from "../../../../../../Components/Shared/Buttons/secondarybutton";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function SendMesage() {
  const [res, setRes] = useState(false);
  const ref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(ref.current, "formaaaaa");
    console.log("cao", "formaaaaa");
    emailjs
      .sendForm(
        "service_nilgc85",
        "template_ka3utjq",
        ref.current,
        "E9e-FbtJcilYbz3l0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setRes(true);
        },
        (error) => {
          console.log(error.text);
          setRes(false);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-form">
      {res ? (
        <h1>We have recived your message!</h1>
      ) : (
        <form className="fields" ref={ref} onSubmit={sendEmail}>
          <InputField label={"First name"} name="user_name" />
          <InputField label={"Last name"} name="user_surname" />
          <InputField label={"Phone number"} name="user_phone" />
          <InputField label={"Email address"} name="user_email" type="email" />
          <InputField
            label={"Message"}
            multiline
            rows={4}
            name="user_message"
          />
          <SecondaryButton font="22px" hover={true} type="submit">
            Send message
          </SecondaryButton>
        </form>
      )}
    </div>
  );
}

export default SendMesage;
