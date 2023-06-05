import { useSelector } from "react-redux";

export default function useTranslate() {
  const translations = useSelector((state) => state.translations);

  /**
   * @method useTranslate
   * @description Used for translation of CMS strings
   * @example
   * // In case we only translate key
   * t("user_balance")
   *
   * // In case we have parameter we want to show in translation we can use placeholder, i.e.:
   * t("user_balance", { userBalance: user.balance })
   * // And in CMS translate as "User balance is: {userBalance}"
   * @param {String} key - Key for translation
   * @param {Object} [placeholders] - Placeholder used in translation
   * @return {String} - Returning translated string or input key
   */
  const translate = (key, placeholders) => {
    let translation = translations?.[key];
    if (translation && placeholders) {
      for (const key in placeholders) {
        translation = translation.replace(`{${key}}`, placeholders[key]);
      }
      return translation;
    }
    return translation || key;
  };

  return translate;
}
