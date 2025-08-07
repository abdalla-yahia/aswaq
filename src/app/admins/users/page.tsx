'use client'
import Users_Details from "@/components/Admins/Users/Users_Details";
import { RootState,useAppDispatch } from "@/libs/Redux_Store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers, fetchUserById } from "@/Features/Actions/users/usersActions";



export default function AdminUsersPage() {
const {user} = useSelector((state:RootState) => state?.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserById('1'));
  }, [dispatch]);

  console.log(user?.name)
  return (
    <Users_Details name={user?.name}/>
  );
}
