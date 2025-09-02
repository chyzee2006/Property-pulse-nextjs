import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Property Pulse",
  description:
    "Your go-to platform for real estate insights and property management.",
  keywords: "real estate, property management, insights, rental, listings",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
