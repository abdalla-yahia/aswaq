import jwt from "jsonwebtoken";
import { parse } from "cookie";

export function getUserFromRequest(req: Request) {
  const cookies = req.headers.get("cookie");
  if (!cookies) return null;

  const parsedCookies = parse(cookies);
  const token = parsedCookies.authToken;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    return decoded;
  } catch {
    return null;
  }
}
