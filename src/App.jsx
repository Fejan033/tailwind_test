import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-amber-50 min-h-screen px-6 py-3 flex-col gap-16">
      <Header />
      <Footer />
      <Body />
    </div>
  );
}

export default App;
