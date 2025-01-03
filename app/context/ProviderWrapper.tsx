import { CartProvider } from "@/app/context/cartContext";
import { AuthProvider } from "@/app/context/authContext";
import { ModalProvider } from "@/app/context/modalContext";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>{children}</ModalProvider>
      </CartProvider>
    </AuthProvider>
  );
}
