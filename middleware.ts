import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { cookies } = request;
  const authToken = cookies.get("session");
  const { pathname } = new URL(request.url);

  const data = JSON.parse(authToken?.value || "{}");
  console.log(data.role);

  // 🔹 সুপার অ্যাডমিন না হলে '/admin/dashboard' থেকে হোমপেজে পাঠাবে
  if (pathname.startsWith("/admin/dashboard") && data.role !== "SUPER_ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🔹 Next.js static & API রুট গুলোর জন্য middleware না চালানো
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  // 🔹 লগিন না করা থাকলে শুধু '/login' এবং '/sign-up' পেজে যেতে পারবে
  if (!authToken) {
    if (pathname.startsWith("/login") || pathname.startsWith("/sign-up")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url)); // রিডাইরেক্ট করবে
  }

  // 🔹 লগিন করা থাকলে '/login' এবং '/sign-up' পেজে যেতে পারবে না
  if (authToken && (pathname.startsWith("/login") || pathname.startsWith("/sign-up"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ সব ঠিক থাকলে রুট এক্সেস করতে পারবে
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
