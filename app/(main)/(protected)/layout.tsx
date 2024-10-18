import AuthController from "@/components/auth-routes-controller";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthController>{children}</AuthController>;
}
