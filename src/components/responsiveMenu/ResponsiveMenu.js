import React, {useState} from 'react';
import { FaStream, FaTimes } from 'react-icons/fa';
import BackDrop from '../BackDrop/BackDrop';
import Navbar from '../navbar/Navbar';
import Avatar from '../avatar/Avatar';
import './ResponsiveMenu.scss';

const ResponsiveMenu = () => {
    
    const [toggleState, setToggleState] = useState(false);

    function toggle() {
        setToggleState(!toggleState);
        
        if(toggleState)
            document.body.classList.remove('overflow-hidden');
        else
            document.body.classList.add('overflow-hidden');

    }

    return (
        <>
            {toggleState ? <BackDrop toggleFunc={toggle} /> : ''}
            <button onClick={toggle} className="o-toggle-menu d-block d-md-none o-bg-purple text-white rounded-circle position-fixed">
                {toggleState ? <FaTimes /> : <FaStream />}
            </button>
            <div style={toggleState ? {left:0} : {left:'-100%'}} className="responsive-menu overflow-hidden position-fixed bg-white d-block d-md-none">
                <div className="res-back-avatar pt-3 d-flex align-items-center justify-content-center flex-column">
                    <Avatar />
                </div>
                <Navbar flexColumn justifyStart toggleFunc={toggle} />
                <div className="position-absolute copyright pt-2 bg-white">
                </div>
            </div>
        </>
    )
};

export default ResponsiveMenu;