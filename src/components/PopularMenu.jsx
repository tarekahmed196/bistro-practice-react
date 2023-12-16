
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import useMenu from '../hook/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu([])
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-10'>
            <SectionTitle subHeading={'popular items'} heading={'From Our Menu'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;