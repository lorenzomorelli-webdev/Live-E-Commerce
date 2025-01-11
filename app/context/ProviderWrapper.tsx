import { CartProvider } from "@/app/context/cartContext";
import { AuthProvider } from "@/app/context/authContext";
import { ModalProvider } from "@/app/context/modalContext";
import { FavoritesProvider } from "./favoritesContext";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <ModalProvider>{children}</ModalProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}
