import React from "react";
import InputField from "../../../../../../../FormFields/InputField";
import SecondaryButton from "../../../../../../Components/Shared/Buttons/secondarybutton";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../../../../../../FormFields/helpers";
import { useTranslation } from "react-i18next";

function SendMesage() {
  const ref = useRef();
  const { t } = useTranslation();
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
      showToast("success", "Thank you, your review has been submitted.");
    } catch (error) {
      showToast("error", "Failed to send message. Please try again later.");
    }

    e.target.reset();
  };

  return (
    <div className="contact-form">
      <form className="fields" ref={ref} onSubmit={sendEmail}>
        <ToastContainer />
        <InputField label={t("form.name")} name="user_name" />
        <InputField label={t("form.last")} name="user_surname" />
        <InputField label={t("form.phone")} name="user_phone" />
        <InputField label={t("form.email")} name="user_email" type="email" />
        <InputField
          label={t("form.message")}
          multiline
          rows={4}
          name="user_message"
        />
        <SecondaryButton font="22px" hover={true} type="submit">
          {t("home.sendMessage")}
        </SecondaryButton>
      </form>
    </div>
  );
}

export default SendMesage;
