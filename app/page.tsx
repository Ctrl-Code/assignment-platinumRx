import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { ModelContextWrapper } from "./contexts";
import { Modal } from "./components/modal";
import MockData from "./mockData.json"

export default function Home() {
  const products = MockData

  return (
    <ModelContextWrapper>
      <div className="flex flex-col items-center h-full w-full max-w-full max-h-full">
        <Header />
        <Main products={products} />
        <Footer />
        <Modal products={products} />
      </div>
    </ModelContextWrapper>
  );
}
