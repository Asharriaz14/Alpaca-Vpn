
import { featuredBoxes } from '../constants';

function FeatureBoxes() {
  return (
    <>
<div className="mx-4 flex flex-wrap p-8">
    
{featuredBoxes.map((boxes, index) => (
  <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
    <div className={`mb-9  rounded-xl py-8 px-7 shadow-md  transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9   ${index === 0 ? 'first-card' : 'feature-card'}`}>
      <div className="mx-auto mb-10 inline-block">
        <img src={boxes.image} alt="Featured Boxes Image" />
      </div>
      <div>
        <h3 className={`mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl ${index === 0 ? 'xl:text-3xl' : ''} ${index === featuredBoxes.length - 1 ? 'md:mr-20' : ''}`}>
          {boxes.title}
        </h3>
        <p className="text-sm text-tartiary">{boxes.description}</p>
      </div>
    </div>
  </div>
))}




</div>

    </>
  )
}

export default FeatureBoxes