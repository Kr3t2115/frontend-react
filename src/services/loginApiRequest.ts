export default async function LoginApi(objectToSend: Object) {
  const sendRequest = await fetch(
    import.meta.env.VITE_API_LINK + "/user/login",
    {
      credentials: "same-origin",
      method: "post",
    }
  );

  console.log(objectToSend);
}

// Credentials musi byc by wogólue backend mógł dopisać nam cookiesy na fronce
// Link jest pobierany z .env (widziałem że tak ludzie robią)
// Wszystko będzie robione asynchronicznie oraz będzie pełna obsługa błędów
