const createActionFormData = async (request: Request) => {
  const formData = await request.formData();
  const actionFormData = Object.fromEntries(formData);
  return actionFormData;
};

export default createActionFormData;
