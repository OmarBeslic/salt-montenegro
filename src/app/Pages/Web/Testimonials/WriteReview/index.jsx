import React, { useState } from "react";
import File from "../../../../../FormFields/FileField";
import InputField from "../../../../../FormFields/InputField";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "../../../../../FormFields/Select";
import { useEffect } from "react";
import { getCountryList } from "../../../../store/slices/layoutSlice";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import { postReview } from "../../../../store/slices/reviewsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../../../../FormFields/helpers";
function WriteReview() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state?.layout?.countries);

  const [review, setReview] = useState({
    name: "",
    lastName: "",
    country: "",
    review: "",
    userEmail: "",
    countryFlag: "",
  });

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  const validateComponent = ({ key, val }) => {
    if (!val) {
      showToast("error", "This field is required. Please enter a value.");
      return false;
    }
    return true;
  };

  const handleSendReview = () => {
    let isValid = true;

    Object.keys(review)
      .filter((key) => key !== "userPhoto" && key !== "countryFlag")
      .forEach((key) => {
        if (!validateComponent({ key, val: review[key] })) {
          isValid = false;
        }
      });

    if (isValid) {
      dispatch(postReview(review)).then((res) => {
        showToast("success", "Thank you, your review has been submitted.");
        setReview({
          name: "",
          lastName: "",
          country: "",
          review: "",
          userEmail: "",
          countryFlag: "",
        });
      });
    }
  };

  return (
    <div className="review-form">
      <ToastContainer />

      <InputField
        label="Name"
        value={review?.name}
        onChange={(e) =>
          setReview({
            ...review,
            name: e.target.value,
          })
        }
      />
      <InputField
        value={review?.lastName}
        label="Last name"
        onChange={(e) =>
          setReview({
            ...review,
            lastName: e.target.value,
          })
        }
      />
      <InputField
        value={review?.userEmail}
        label="Email"
        onChange={(e) =>
          setReview({
            ...review,
            userEmail: e.target.value,
          })
        }
      />

      <SelectField
        value={review?.country}
        name="country"
        label="Your country"
        options={countries}
        onChange={(e) =>
          setReview({
            ...review,
            country: countries?.find((el) => el?.value === e.target.value)
              ?.label,
            countryFlag: countries?.find((el) => el?.value === e.target.value)
              ?.flag,
          })
        }
      />
      <InputField
        value={review?.review}
        label="Review"
        multiline
        rows={4}
        onChange={(e) =>
          setReview({
            ...review,
            review: e.target.value,
          })
        }
      />
      <SecondaryButton onClick={() => handleSendReview()}>
        Send review
      </SecondaryButton>
    </div>
  );
}

export default WriteReview;
