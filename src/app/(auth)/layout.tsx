import { ToastProvider } from "@/components/ui/toast";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToastProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-xs sm:max-w-md">{children}</div>
      </div>
    </ToastProvider>
  );
}
