import { cartActions } from ".";

export const sendCartData = (cartData) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://https-req-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) 
      {
        console.log(response)
        throw new Error("Some Error Occured");
      }
    };
    try {
      await sendRequest();
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const res = await fetch(
        "https://https-req-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) throw new Error("CANT SEND DATA");

      const resData = await res.json();
      return resData;
    };
    try {
      const cartData = await getRequest();
      dispatch(cartActions.replaceCart({
          items : cartData.items || [] ,
          totalQuantity : cartData.totalQuantity ,
          finalPrice : cartData.finalPrice
      }));
    } catch (err) {
      alert(err.message);
    }
  };
};
