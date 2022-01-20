export const throwError = (message:any, code = 500) => {
    const err = {
      code,
      message,
    };
    throw err;
  };