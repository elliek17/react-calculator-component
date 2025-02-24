import AdvCalc from '@/components/advCalc'
import Calc from '@/components/calc'

export default function Home() {
  return (
    <div className="flex flex-col  sm:flex-row min-h-screen justify-center gap-20 items-center grid-cols-2">
    <Calc />
    <AdvCalc />
    </div>
  );
}
