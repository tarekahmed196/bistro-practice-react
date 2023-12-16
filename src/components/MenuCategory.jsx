import React from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4'>
                    {
                        items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>
        </div>
    );
};

export default MenuCategory;