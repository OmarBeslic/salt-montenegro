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
function WriteReview() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state?.layout?.countries);
  const [error, setIsError] = useState({});

  const [review, setReview] = useState({
    name: "",
    lastName: "",
    country: "",
    review: "",
    userEmail: "",
    countryFlag: "",
  });

  const getFile = (e) => {
    setReview({ ...review, userPhoto: e });
  };

  useEffect(() => {
    dispatch(getCountryList());
  }, []);

  const validateComponent = ({ key, val }) => {
    if (!val) {
      return {
        [key]: "This field is required. Please enter a value.",
      };
    } else {
      return {
        [key]: "",
      };
    }
  };

  const handleSendReview = () => {
    const errors = {};

    Object.keys(review)
      .filter((key) => key !== "userPhoto")
      .forEach((key) => {
        const error = validateComponent({ key, val: review[key] });
        if (error[key]) {
          errors[key] = error[key];
        }
      });

    setIsError(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(postReview(review)).then((res) => {
        toast.success("Thank you, your review has been submitted.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
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
        error={error?.name}
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
        error={error?.lastName}
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
        error={error?.userEmail}
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
        error={error?.country}
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
        error={error?.review}
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
