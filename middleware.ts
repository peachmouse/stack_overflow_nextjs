import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [//user can access the Homepage even if unauthenticated
        '/'
    ]
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}