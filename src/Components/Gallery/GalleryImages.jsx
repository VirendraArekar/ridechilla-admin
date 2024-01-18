import React, { useContext } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom';
import GalleryContext from '../../_helper/Gallery';

const GalleryImages = () => {
  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const { smallImages } = useContext(GalleryContext);
  return (
    <Gallery>
      {smallImages && smallImages.map((item, i) => {
        return (
          <figure className="col-sm-6 col-md-4 col-xl-3 xl-25 box-col-3" key={i}>
            <Item original={require(`../../assets/images/${item}`)} width='1024' height='768'>
              {({ ref, open }) => (
                <Link onClick={() => { executeScroll(); open(); }}>
                  <img className='img-thumbnail' ref={ref} src={require(`../../assets/images/${item}`)} alt='' />
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
export default GalleryImages