'use client'
import Users_Details from "@/components/Admins/Users/Users_Details";
import { fetchAllUsers } from "@/Features/Actions/usersActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from '@/libs/Store/Store'

export default function AdminUsersPage() {
  const { users } = useSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <Users_Details users={users} />
  );
}
