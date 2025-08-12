import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserFromRequest } from "@/libs/getUserFromRequest";
import { UserToken } from "@/types/types";

export default function middleware(req: NextRequest) {
  const publicPaths = ["/login", "/register", "/"]; // مسارات عامة مسموح الدخول لها بدون تسجيل
  const { pathname } = req.nextUrl;
 console.log("cookies in middleware:", req.cookies.getAll());
  // لو المسار عام، عدّي الطلب
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // الحصول على المستخدم من الكوكي
  const user = getUserFromRequest(req) as UserToken | null;
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // قواعد الـ Role
  const roleRoutes: Record<string, string[]> = {
    USER: ["/users"],
    ADMIN: ["/admins"],
    DRIVER: ["/drivers"],
    STOCKKEEPER: ["/stockkeepers"],
  };

  // مسار يخص رول معين؟
  for (const [role, allowedPaths] of Object.entries(roleRoutes)) {
    if (allowedPaths.some((path) => pathname.startsWith(path))) {
      if (user.role !== role) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }

  return NextResponse.next();
}

// تحديد المسارات التي ينطبق عليها الميدل وير
export const config = {
  matcher: [
    "/users/:path*",
    "/admins/:path*",
    "/drivers/:path*",
    "/stockkeepers/:path*",
  ],
};
