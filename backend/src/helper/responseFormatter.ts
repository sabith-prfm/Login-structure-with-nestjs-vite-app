export const ResponseFormatter = (data: any, message: string) => {
  return {
    success: true,
    message: message || 'Operation success',
    data: data || {},
  };
};

export const ErrorFormatter = (
  err: any,
  message?: string,
  errorObjRequired: boolean = true,
) => {
  const errorObj = {
    message: 'Due to security reasons error message turned off', //For higher security can pass this data
  };
  return {
    success: false,
    message: errorObjRequired ? message : 'Operation Failed..!',
    data: errorObjRequired ? err : errorObj,
  };
};
