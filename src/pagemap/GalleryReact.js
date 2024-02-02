import { width } from '@mui/system';
import React from 'react'
import { useState } from 'react'
import Menu from './Menu';
import './Gal.css'
import {useNavigate} from 'react-router-dom';

export default function GalleryReact() {

    const navigate = useNavigate();
    const navigateHome = () => {
         navigate('/Mapview');
    };

    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category == categItem ;

        });
        setItems(updatedItems);
    }

  return (
    <>
    
    <h1 className='mt-5 text-center main-heading'>Your Favourite Dish</h1>
    <hr />
    <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>
            <button className='btn btn-warning' onClick={()=>filterItem('breakfast')}>Breakfast</button>
            <button className='btn btn-warning' onClick={()=>filterItem('lunch')}>Lunch</button>
            <button className='btn btn-warning' onClick={()=>filterItem('evening')}>Evening </button>
            <button className='btn btn-warning' onClick={()=>filterItem('dinner')}>Dinner</button>
            <button className='btn btn-success' onClick={()=>setItems(Menu)}>All</button>
        </div>
    </div>

    <div className='menu-items container-fluid mt-3'>
        <div className='row'>
            <div className='col-11 mx-auto'>
                <div className='row my-5'>
                    {
                        items.map((elem) => {
                            const{id, name, image} = elem;
                            return(

                        <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3'>
                        <div className='row me-2 val'>
                            <div className='col'>
                                <img src={image} alt="menuPic" className='img' />
                            </div>
                            <div className='col text-center pt-3'>
                                    <h3>{name}</h3> 
                                        <a href='#'>
                                            <button className='btn btn-primary' onClick={navigateHome}>Visit Map</button>
                                        </a>
                            </div>
                        </div>
                    </div>
                            )

                        })
                    }
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
