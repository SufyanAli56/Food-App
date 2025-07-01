import MyDishes from '@/app/components/mydishes/MyDishes';
import HomeBanner from '../../components/homeBanner/HomeBanner';
import HomeCard from '../../components/HomeCards/HomeCards'
import Services from '@/app/components/Services/Services';
import Testimonial from '@/app/components/testimonial/Testimonial';
export const metadata = {
  title: 'Delicious Restaurant | Home',
  description: 'Experience the finest cuisine in town at our restaurant',
};

export default function Home() {
  return (
    <main>
      <HomeBanner />
        <HomeCard/>
       <MyDishes/>
       <Services/>
       <Testimonial/>
    </main>
  );
}