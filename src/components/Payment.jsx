import { paymentPlan } from '../constants/index';
import CheckCircle from '../assets/check-circle.png'; 

function Payment() {
  return (
    <>
     <div className="max-w-s mx-auto space-y-10 my-16 text-center">
      <div className="bg-no-repeat bg-contain bg-center ">
      <h2 className="text-xl text-primary font-medium tracking-normal leading-relaxed mb-3.5 uppercase">PRICING</h2>
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white tracking-normal leading-relaxed mb-5">PRICING & PLANS</h2>
      <p className="text-tartiary text-lg mb-1  ">Alpaca VPN offers a variety of affordable plans to suit your <br /> needs. Choose the option that best fits your budget and start <br /> enjoying the freedom and security of a truly private online <br /> experience.</p>
    
      </div>
    </div>
      <div className="  lg:mx-40 flex flex-wrap  py-20 px-8 justify-center bg-[#1A1A1A] rounded-xl text-tartiary">
      
        {paymentPlan.map((plan, index) => (
          <div
            key={index}
            className={`my-4  bg-[#000000] p-8 hover-scale-shadow hover:rounded-lg  hover:text-white hover:cursor-pointer ${index === 0 ? 'border-left ' : ''} ${index === paymentPlan.length - 1 ? 'border-right' : ''}`}
          >
            <div className="p-6">
              <p className="mb-8">
                <span className="text-5xl font-bold tracking-tight text-[#797979]">
                  {plan.price}
                </span>
                <span className="text-base font-medium ml-1">{plan.time}</span>
              </p>
              <div className="flex justify-between">
                <h2 className="text-3xl font-semibold text-[#797979]">
                  {plan.pay}
                </h2>
              </div>
              <p className="mt-2 text-sm">{plan.precaution}</p>
            </div>
            <div className="px-6 pt-2 pb-8">
              <ul role="list" className="mt-2 space-y-4">
                  <li className="flex space-x-3">
                    <div className="flex justify-center items-center rounded-full bg-[#191919] h-5 w-5">
                      <img src={CheckCircle} alt="check-circle" className="h-3 w-3" />
                    </div>
                    <span className="text-sm">{plan.listOne}</span> 
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex justify-center items-center rounded-full bg-[#191919] h-5 w-5">
                      <img src={CheckCircle} alt="check-circle" className="h-3 w-3" />
                    </div>
                    <span className="text-sm">{plan.listTwo}</span> 
                  </li>
                  <li className="flex space-x-3">
                    <div className="flex justify-center items-center rounded-full bg-[#191919] h-5 w-5">
                      <img src={CheckCircle} alt="check-circle" className="h-3 w-3" />
                    </div>
                    <span className="text-sm">{plan.listThree}</span> 
                  </li>
              </ul>
            </div>
            <a
              href="#"
              target="_blank"
              className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-[#585858] border border-[#585858] rounded-full hover:bg-primary hover:text-white focus:outline-none focus:ring"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Payment;
