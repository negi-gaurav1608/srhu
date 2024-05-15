import React from 'react';
import Cards from './Cards';
function Home() {
  return (
    <>
     <div className="bg-white">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
                Medicine has always been a dynamic field, constantly evolving with advancements in science and technology. From the discovery of antibiotics to the development of sophisticated surgical techniques, medicine continues to push boundaries, offering new hope and treatments to patients worldwide. In this article, we explore some of the recent breakthroughs and trends in medicine that are revolutionizing healthcare and improving patient outcomes.Precision medicine, also known as personalized medicine, is an innovative approach that takes into account individual variability in genes, environment, and lifestyle for each person. By leveraging genetic and molecular profiling, doctors can tailor treatments to the specific characteristics of each patient, increasing efficacy and reducing adverse effects. From targeted cancer therapies to pharmacogenomics-guided drug prescriptions, precision medicine is transforming the way we prevent, diagnose, and treat diseases.


                </div>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
                    <img src="https://medicalmirror.org/wp-content/uploads/2020/09/image-55.jpg" alt="user" className='max-h-screen'/>
                </div>

            </div>

            <div className='mt-3'>
                <Cards
                    data="Volini Spray is a pain relief spray which provides instant relief from muscle pain, sprain and pain in the joints. Scientifically formulated with the ingredients such as Diclofenac diethylamine, Methyl Salicylate and Menthol, it contains microparticles which provide quick relief from pain by penetrating deeply. Musculoskeletal and joint pain can also be cured by its use."
                    user="Revital H Capsule - Men 60's"
                    position="₹59.5" 
                    img="https://newassets.apollo247.com/pub/media/catalog/product/v/o/vol0290_1.jpg"
                />

                <Cards
                    data="La Pink Vitamin C Toner Serum, a 100% Microplastic-Free Formulation, is crafted with the purpose of enhancing skin brightness and promoting even skin tone. This 2-in-1 Toner Serum provides a refreshing and weightless experience and works efficiently to illuminate the skin, unclog the pores, promote collagen production, retain lost moisture, and give radiant-looking skin. It also helps to combat issues like pigmentation and dark spots, revealing a smooth skin texture."
                    user="La Pink Vitamin C White Haldi Face Toner Serum 50 ml"
                    position="₹ 495.00"
                    img="https://th.bing.com/th/id/OIP.-ATjdPYmCtAqBzXupDbmzQHaHg?rs=1&pid=ImgDetMain"
                />

                <Cards
                    data="Revital H multivitamin supplement capsules for daily health are a balanced combination of natural ginseng, 10 vitamins and 9 minerals which can help fill in nutritional gaps and support general well-being for a healthy, active lifestyle. Ginseng helps to improve concentration and increase oxygen consumption in the body."
                    user="Revital H Capsule - Men 60's"
                    position="₹ 385.00"
                    img="https://newassets.apollo247.com/pub/media/catalog/product/r/e/rev0203_1.jpg"
                />

                 <Cards
                    data="Ashvagandha normalizes the excessive cortisol levels and thereby helps relieves stress.Ashwagandha helps improve the overall sleep quality and maintains healthy sleep patterns. It also helps combat pent-up fatigue and gives a boost to the energy levels.."
                    position="₹ 190.00"
                    user="Aswagahanda"
                    img="https://m.media-amazon.com/images/I/61eNW65rU0L._SX679_.jpg"
                />


            </div>

            {/* <div>
                <img src="https://varteq.com/wp-content/uploads/2020/05/big-data-in-healthcare-1-680x360.jpg" alt="pics"></img>
            </div>
             */}


            </div>


        {/* </div> */}
    </>
  )
}

export default Home