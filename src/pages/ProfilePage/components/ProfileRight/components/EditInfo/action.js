import { redirect, json } from 'react-router-dom';

export default async function action({ params, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  //   return json('error message');

  return redirect('/profile');
}
