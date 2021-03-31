import React, {} from 'react';

import './searchAndSortTile.css';

const SearchSortTile: React.FC = () => {


    const [text, setText] = React.useState<string>('');

    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const onClick = () => {
        if (buttonRef && buttonRef.current) {
            buttonRef.current.style.color = "blue";
        }
    };

    return (

        <div className={'searchSort'}>
            <div className={'all-courses'}>
                All Courses
            </div>

            <div className={'searchbar'}>

                    {/* <div className="image-dropdown" >
                        <img src={dropdown} />
                    </div> */}
                    <form >

                    <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <input className='search-box' value={text} onChange={(event) => setText(event.target.value)} placeholder={'Search Here'} />
                    <button onClick={onClick} ref={buttonRef} type="submit" className="fa-fa-search"><i className="fa fa-search"></i></button>
                
                    </div>
                </form>
            </div>
        </div>
    )

}


export default SearchSortTile;