"use client";

import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "@/Graphql/Schemas/UserQuery";
import { toast } from "react-toastify";

export default function LogoutPage() {
  const [logout] = useMutation(LOGOUT_USER, {
    onCompleted: () => {
      if (typeof window !== "undefined") {
        localStorage.clear();
        sessionStorage.clear();
      }
      toast.success("تم تسجيل الخروج بنجاح");
      window.location.href = "/";
    },
    onError: (err) => {
      console.error("Logout Error:", err.message);
      window.location.href = "/"; // حتى لو فيه مشكلة
    },
  });

  useEffect(() => {
    logout(); // يشغل اللوج أوت أول ما الصفحة تتحمل
  }, [logout]);

  return null; // مفيش UI
}
