import React, { useId } from 'react'
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function page() {

  const { userId } = auth();
  console.log(useId)
  const user = await currentUser()
  console.log(user);

  return (
    <div>page</div>
  )
}
