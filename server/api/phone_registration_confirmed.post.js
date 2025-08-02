export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const response = await $fetch(`https://api.skynet-cloud.ru/api/auth/phone_registration_confirmed?phone_number=${encodeURIComponent(query.phone_number)}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
  });

  return response;
});