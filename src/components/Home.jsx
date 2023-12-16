
import Banner from './Banner';
import Category from './Category';
import Featured from './Featured';
import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';
import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Bistro</title>
      </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu/>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;