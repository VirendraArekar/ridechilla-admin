import React, { useContext } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom';
import { H4, P } from '../../AbstractElements';
import { Imagedesc, PortfolioTitle } from '../../Constant';
import GalleryContext from '../../_helper/Gallery';

const GalleryImageDesc = () => {
    const executeScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const { smallImages } = useContext(GalleryContext);
    return (
        <Gallery withCaption>
            {smallImages && smallImages.map((item, index) => {
                return (
                    <figure key={index} className="col-sm-6 col-xl-3 box-col-3">
                        <Item original={require(`../../assets/images/${item}`)} width='1024' height='768' caption={`${PortfolioTitle}${Imagedesc}`}>
                            {({ ref, open }) => (
                                <Link onClick={() => { executeScroll(); open(); }}>
                                    <img className='img-thumbnail' ref={ref} src={require(`../../assets/images/${item}`)} alt='' />
                                    <div className="caption">
                                        <H4>{PortfolioTitle}</H4>
                                        <P>{Imagedesc}</P>
                                    </div>
                                </Link>
                            )}
                        </Item>
                    </figure>
                )
            })
            }
        </Gallery>
    )
}

export default GalleryImageDesc