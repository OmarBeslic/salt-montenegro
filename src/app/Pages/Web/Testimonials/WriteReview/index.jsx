import React, { useState, useEffect } from "react";
//
import { useDispatch, useSelector } from "react-redux";
import { getCountryList } from "../../../../store/slices/layoutSlice";
import { postReview } from "../../../../store/slices/reviewsSlice";
//
import { ToastContainer, toast } from "react-toastify";
import { showToast } from "../../../../../FormFields/helpers";
import "react-toastify/dist/ReactToastify.css";
//
import InputField from "../../../../../FormFields/InputField";
import SelectField from "../../../../../FormFields/Select";
import SecondaryButton from "../../../../Components/Shared/Buttons/secondarybutton";
import StarRating from "../../../../Components/Shared/StarRating";
import PrimaryButton from "../../../../Components/Shared/Buttons/primaryButton";
import { useTranslation } from "react-i18next";

function WriteReview() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state?.layout?.countries);
  const { t } = useTranslation();

  const [review, setReview] = useState({
    name: "",
    lastName: "",
    country: "",
    review: "",
    userEmail: "",
    countryFlag: "",
    rating: "",
  });

  useEffect(() => {
    dispatch(getCountryList());
  }, []);
  const getStars = (index) => {
    setReview({
      ...review,
      rating: index,
    });
  };
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
          rating: "",
        });
      });
    }
  };

  return (
    <div className="review-form">
      <ToastContainer />
      <div className="rating">
        <p>{t("form.rating")}</p>
        <StarRating getStars={(e) => getStars(e)} />
      </div>
      <InputField
        label={t("form.name")}
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
        label={t("form.last")}
        onChange={(e) =>
          setReview({
            ...review,
            lastName: e.target.value,
          })
        }
      />
      <InputField
        value={review?.userEmail}
        label={t("form.email")}
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
        label={t("form.country")}
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
        label={t("form.review")}
        multiline
        rows={4}
        onChange={(e) =>
          setReview({
            ...review,
            review: e.target.value,
          })
        }
      />
      <PrimaryButton onClick={() => handleSendReview()}>
        {t("form.sendReview")}{" "}
      </PrimaryButton>
    </div>
  );
}

export default WriteReview;
