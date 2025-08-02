export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await $fetch('https://api.skynet-cloud.ru/api/auth/check_user', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
});