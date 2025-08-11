"use client";
import * as icon from '@/utils/Icons/Icons';

import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "@/Graphql/Schemas/UserQuery";

export default function LogoutButton() {
  const [logout, { loading }] = useMutation(LOGOUT_USER, {
    onCompleted: async () => {
      // Reset Apollo cache 
      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
      }
      window.location.href = "/login"; 
    },
    onError: (err) => {
      console.error("Logout Error:", err.message);
    },
  });

  return (
    <icon.BiLogOutCircle onClick={() => logout()}  title={loading ? "جارٍ تسجيل الخروج..." : "خروج"}/>
  );
}
