import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      {/* Footer is in _app.js to be present on all pages */}
      <Footer/>
    </div>
  );
}
