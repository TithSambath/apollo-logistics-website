// import qs from 'qs';

// export const getStaticURL = (path = '') => {
//   return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
// };

// export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
//   const mergedOptions = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_STRAPI_TOKEN
//     },
//     ...options
//   };

//   // Build request URL
//   const queryString = qs.stringify(urlParamsObject);
//   const requestUrl = `${getStaticURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

//   // Trigger API call
//   const response = await fetch(requestUrl, mergedOptions);

//   // Handle response
//   if (!response.ok) {
//     console.error(response.statusText);
//     throw new Error(`An error occurred please try again`);
//   }

//   return response.json();
// };

export const sendMessage = async (data: any) => {
  await fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
