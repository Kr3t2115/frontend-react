export default async function LoginApi(objectToSend: any) {
  const sendRequest = await fetch(
    import.meta.env.VITE_API_LINK + "/user/login",
    {
      credentials: "include",
      method: "post",
      body: objectToSend,
    }
  );

  if (!sendRequest.ok) {
    throw new Error(sendRequest.statusText);
  } else {
    const response = await sendRequest.json();
    return response;
  }
}

// Credentials musi byc by wogólue backend mógł dopisać nam cookiesy na fronce
// Link jest pobierany z .env (widziałem że tak ludzie robią)
// Wszystko będzie robione asynchronicznie oraz będzie pełna obsługa błędów
