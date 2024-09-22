// import { AuthState } from "@/components/auth-state";
export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <AuthState /> */}
      {children}
    </>
  );
}
