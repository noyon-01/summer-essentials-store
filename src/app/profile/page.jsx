"use client";
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function Profile() {
  const userData = authClient.useSession();
  const users = userData.data?.user;

  return (
    <div className="bg-base-200 p-20 my-20 max-w-md mx-auto shadow-xl rounded-2xl">
      <div className="avatar flex flex-col justify-center items-center">
        <div className="ring-primary ring-offset-base-100 w-25 rounded-full ring-2 ring-offset-2">
          <Image
            src={users?.image}
            alt={users?.name}
            height={200}
            width={200}
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="text-2xl font-bold mt-5">{users?.name}</h1>
        <h2 className="text-gray-500">{users?.email}</h2>
        <div className="mt-5">
          <UpdateUserModal />
        </div>
      </div>
    </div>
  );
}
