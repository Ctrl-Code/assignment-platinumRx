import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { ModelContextWrapper } from "./contexts";
import { Modal } from "./components/modal";

export default async function Home() {
  const getData = async () => {
    const response = await fetch('https://jsonfakery.com/products/random/20', { cache: 'no-store' })
    const resList = await response.json()
    return resList.slice(0, 20)
  }
  const data = await getData()

  return (
    <ModelContextWrapper>
      <div className="flex flex-col items-center h-full w-full max-w-full max-h-full">
        <Header />
        <Main products={data} />
        <Footer />
        <Modal products={data} />
      </div>
    </ModelContextWrapper>
  );
}
