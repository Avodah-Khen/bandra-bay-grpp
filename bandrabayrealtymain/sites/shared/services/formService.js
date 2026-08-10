//sites/shared/services/formService.js

export const submitToGoogleForm = async (form, config) => {
  const formData = new FormData();

  Object.entries(config.fields).forEach(([key, id]) => {
    formData.append(id, form[key]);
  });

  ///JUST THE CHECKING SOMETHING OYOYOYOYslmsdkmvsmv;svm

  ///yoyoyoyoyoy
  await fetch(config.url, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
};