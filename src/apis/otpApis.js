export const submitOtp = (payload) => {
  return new Promise((resolve, reject) => {
    let num = Math.random() * 100;
    console.log("submitOtp", num);
    setTimeout(() => {
      resolve({
        status: "success",
        verified: true,
      });
      //   if (num > 50) {
      //     resolve({
      //       status: "success",
      //       verified: true,
      //     });
      //   } else {
      //     reject(
      //       new Error({
      //         status: "error",
      //         verified: false,
      //       })
      //     );
      //   }
    }, 2000);
  });
};
