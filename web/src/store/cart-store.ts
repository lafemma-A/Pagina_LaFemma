import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
    _id: string;
    name: string;
    slug: string;
    price: number;
    quantity: number;
    image?: string;
    size?: string;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    toggleCart: () => void;
    clearCart: () => void;
    getTotal: () => number;
    getFormattedTotal: () => string;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (newItem) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item._id === newItem._id);

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item._id === newItem._id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                        isOpen: true,
                    });
                } else {
                    set({ items: [...currentItems, { ...newItem, quantity: 1 }], isOpen: true });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((item) => item._id !== id) });
            },

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            clearCart: () => set({ items: [] }),

            getTotal: () => {
                return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            },

            getFormattedTotal: () => {
                const total = get().getTotal();
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
            }
        }),
        {
            name: "lafemma-cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
