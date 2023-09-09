import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 0,
      name: "iPhone 13 Pro",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/40026b18c2b053ac4a68c3288556dc899a77aecd_1677070081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      details: {
        image1:
          "https://dkstatics-public.digikala.com/digikala-products/f32372d326f11271aef44fa73356eaecade74200_1691492034.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        image2:
          "https://dkstatics-public.digikala.com/digikala-products/951bd823563fbabf6d53e84dada90d2f4c953e2b_1688801322.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        description:
          "گوشی موبایل اپل مدل iPhone 13 Pro تک سیم کارت ظرفیت یک ترابایت و رم 6 گیگابایت - اروپا نات اکتیو",
      },
    },
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/dcd6e4e843bea3f070614a95d27b1181fdf23008_1677071626.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      details: {
        image1:
          "https://dkstatics-public.digikala.com/digikala-products/2534bc70ec8a88122c926d3276e6a32f78f50e7c_1691495794.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        image2:
          "https://dkstatics-public.digikala.com/digikala-products/7ce2572e29b47590ebacc3cd1b994958bed33a10_1688801355.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        description:
          "گوشی موبایل اپل مدل iPhone 13 Pro Max تک سیم‌ کارت ظرفیت یک ترابایت و رم 6 گیگابایت - اروپا نات اکتیو",
      },
    },
    {
      id: 2,
      name: "Galaxy Z Fold5",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/deeb10f86832cb8e7cc0152905e553c1f9b240c6_1690718621.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      details: {
        image1:
          "https://dkstatics-public.digikala.com/digikala-products/b2ef6dacd0c64046e775187488e69906333c8371_1690718622.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        image2:
          "https://dkstatics-public.digikala.com/digikala-products/ca0f011002f5887b3129e1c1091858374462781e_1690718622.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        description: "Samsung Galaxy Z Fold5 Dual SIM 512GB and 12GB RAM",
      },
    },
    {
      id: 3,
      name: "Galaxy Z Flip5",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/98f5967d3b11b4069c7a89d9608fac880f4a24dc_1690719731.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      details: {
        image1:
          "https://dkstatics-public.digikala.com/digikala-products/28088af4bea0d741094b557ee48363b4fc6b524a_1690719731.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        image2:
          "https://dkstatics-public.digikala.com/digikala-products/1108e18569381acaa90e92604a8701c80f700a51_1690719731.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        description:
          "گوشی موبایل سامسونگ مدل Galaxy Z Flip5 تک سیم کارت ظرفیت 512 گیگابایت و رم 8 گیگابایت",
      },
    },
  ],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    RemoveProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    },
    FilterSearch: (state, action) => {
      if (!action.payload) {
        return {
          products: initialState.products,
        };
      } else {
        // filter the products by name
        return {
          ...state,
          products: state.products.filter((product) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      }
    },
  },
});

export const { RemoveProduct, FilterSearch } = products.actions;
export default products.reducer;
