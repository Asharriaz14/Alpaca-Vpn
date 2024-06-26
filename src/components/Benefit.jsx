// import BenefitImage from '../assets/Vector7.png';
import { whyus } from '../constants/index';

function Benefit() {
  return (
    <div className="max-w-s mx-auto space-y-10" >
      <div className=" text-center pt-10 px-6"  >
        <div>
          <h2 className="text-xl text-primary font-medium tracking-normal leading-relaxed mb-3.5 uppercase">Benefit</h2>
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white tracking-normal leading-relaxed mb-5">WHY USE ALPACA?</h2>
          <p className="text-tartiary text-lg mb-7">We offer a range of cutting-edge features that set us apart in the <br /> world of online security and privacy</p>
          <div className="py-16">
            <div className="mx-auto px-6 max-w-6xl text-gray-500">
              <div className="relative">
                <div className="relative z-10 grid gap-3 grid-cols-6">
                  {whyus.map((us, index) => (
                    <div key={index} className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-10 rounded-xl border border-primary">
                      <div>
                        <div className="relative aspect-square size-32 flex mx-auto">
                          <img src={us.image} alt="" className="w-24 m-auto h-fit" />
                        </div>
                        <div className="mt-6 text-center relative z-10 space-y-2">
                          <h2 className="text-2xl font-medium text-white transition group-hover:text-purple-950">{us.title}</h2>
                          <p className="text-[#919191] text-xs">{us.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
