import authActions from "./authSlice";

const signUpHandler = (authInfo) => {
  return async () => {
    const sendReq = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC20QS24VwQci3hGzoyOHQrtvmgOhSjYSo",
        {
          method: "POST",
          body: JSON.stringify(authInfo),
          headers: { 
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Signing Up Failed");
      } else {
        authActions.signIn();
      }
    };
    try {
      await sendReq();
    } catch (err) {
      alert(err.message);
    }
  };
};
export const signInHandler = (authInfo) => {
  return async () => {
    const sendReq = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC20QS24VwQci3hGzoyOHQrtvmgOhSjYSo",
        {
          method: "POST",
          body: JSON.stringify({
            email : authInfo.username ,
            password : authInfo.password ,
            returnSecureToken : authInfo.returnSecureToken
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Signing Up Failed");
      } else {
        res
          .json()
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    };
    try {
      await sendReq();
    } catch (err) {
      alert("tHE ERROR IS :" , err);
    }
  };
};

export default signUpHandler;
