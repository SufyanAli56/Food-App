import MyDishes from '@/app/components/mydishes/MyDishes';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import HomeCard from '../../components/HomeCards/HomeCards'
import Services from '@/app/components/Services/Services';
import Testimonial from '@/app/components/testimonial/Testimonial';
import Faq from '@/app/components/faq/Faq';
import GetInTouch from '@/app/components/getIntouch/GetInTouch';
export const metadata = {
  title: 'Delicious Restaurant | Home',
  description: 'Experience the finest cuisine in town at our restaurant',
};

export default function Home() {
  return (
    <main className='bg-white'>
      <HomeBanner />
        <HomeCard/>
       <MyDishes/>
       <Services/>
       <Testimonial/>
       <GetInTouch/>
       <Faq/>
       
    </main>
  );
}