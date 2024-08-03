import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";
// import RoundUI from "../components/RoundUI";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic4 from "../../assets/images/pic4.png";
import pic5 from "../../assets/images/pic5.png";
import pic6 from "../../assets/images/pic6.png";
import pic7 from "../../assets/images/pic7.jpg";
import pic8 from "../../assets/images/pic8.jpg";
import pic9 from "../../assets/images/pic9.png";
import pot from "../../assets/images/pot.png";
import mix from "../../assets/images/mix.png";
import image1 from '../../assets/images/sewing.jpg';
import image2 from '../../assets/images/woodCarving.jpg';
import image3 from '../../assets/images/jewelryMaking.jpg';

import '../../pages/Auth/css/LandingPage.css';
import Navbar from "../../components/Navbar";
import FooterPage from "./FooterPage";
import { Link } from "react-router-dom";


const LandingPage = () => {


  // // homepage chaldaa chaldaii api sanga communicate garna paryo 
  useEffect(() => {
    testApi().then((res) => {
      console.log(res)

    })
  }, [])

  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className="text-section">
          <div className="w-50">
            <h6>EXPLORING CULTURES AND CELEBRATING ARTISTRY</h6>
            <p>"Discover Nepal's
              Artistry, Crafted by
              Tradition, Cherished
              by the World."</p>
            <Link to="/login">
              <button className='btn btn-success w-100 mb-2' style={{ maxWidth: '100px' }}>
                Start
              </button>
            </Link>
          </div>


          <div className="image-section">
            <div className="img-1" style={{ position: 'absolute', top: '80px', right: '230px' }} >
              <img src={image1} alt="Image 1" style={{ width: '330px', height: '200px', flex: "1", display: "flex", flexdirection: "column", size: "30px", gap: "10px" }} />

            </div>
            <div className="img-2" style={{ position: 'absolute', top: '150px', right: '30px' }} >
              <img src={image2} alt="Image 2" style={{ width: '230px', height: '280px', flex: "1", display: "flex", flexdirection: "column", size: "25px", gap: "10px" }} />

            </div>
            <div className="img-3" style={{ position: 'absolute', top: '320px', right: '190px' }} >
              <img src={image3} alt="Image 3" style={{ width: '300px', height: '200px', flex: "1", display: "flex", flexdirection: "column", size: "30px", gap: "10px" }} />

            </div>
          </div>
        </div>

      </div>

      {/* Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5rem', height: '100%' }}>

        {/* Image Section */}
        <img src={mix} alt="" />

        {/* Categories Title */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ fontSize: '1rem', color: '#718096', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>Categories</p>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '1.25rem' }}>We Offer Variety Of Products</p>
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0.5rem', marginTop: '1.25rem' }}>

          {/* Handcrafted Artifacts Card 1 */}

          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic1} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Handcrafted Artifacts</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>Handmade sculptures</li>
              <li>Pottery and ceramics</li>
              <li>Woodwork and carvings</li>
              <li>Textiles and fabric crafts</li>
            </ol>
          </div>


          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic2} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Gifts and Souvenirs</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>Unique and personalized gifts
              </li>
              <li>Souvenirs from different destinations</li>
              <li>Gift sets and curated collections</li>
              {/* <li>Textiles and fabric crafts</li> */}
            </ol>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic3} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Accessories</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>Handmade jewelry
              </li>
              <li>Scarves </li>
              <li>Shawls </li>

              <li>Handbags and wallets</li>
              <li>Hats and headwear</li>
            </ol>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic4} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Home Decor</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>

              </li>
              <li>Handcrafted home furnishings
              </li>
              <li>Wall hangings and tapestries</li>
              <li>Candle holders and lamps</li>
            </ol>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic5} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Vintage & Antique</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>Vintage home decor
              </li>
              <li>Antique furniture</li>
              <li>Collectibles and memorabilia</li>
              <li>Vintage fashion and accessories</li>
            </ol>
          </div>
          <div style={{ gridColumn: 'span 2 / span 2', flexDirection: 'column', gap: '0.5rem', borderWidth: '1px', borderStyle: 'solid', borderColor: '#e2e8f0', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img style={{ height: '4.5rem', width: '3.5rem', objectFit: 'cover', borderRadius: '50%', marginTop: '1.5rem' }} src={pic6} alt="poc1" />
            <h3 style={{ fontSize: '1.275rem', fontWeight: 'bold', color: '#2b6cb0', margin: '0.5rem 0' }}>Painting & Art Prints</h3>
            <ol style={{ fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', listStyleType: 'disc', color: '#2d3748', marginLeft: '1.25rem', listStylePosition: 'inside', padding: '0' }}>
              <li>Traditional paintings

              </li>
              <li>Contemporary art
              </li>
              <li>Folk art paintings</li>
              <li>Prints and reproductions</li>
            </ol>
          </div>
        </div>
      </div>



      {/* about us */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '20px', height: '100%' }}>
        <div style={{ textAlign: 'center', marginTop: '6px' }}>
          <p style={{ fontSize: '14px', color: '#718096', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>About us</p>
          <p style={{ fontSize: '24px', color: '#102a43', fontWeight: 'bold', fontFamily: 'Volkhov, serif', marginTop: '5px' }}>Exposure to the Artisans and their Craftsmanship</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginTop: '4rem' }}>
          <div style={{ gridColumn: 'span 4', margin: '0 auto' }}>
            <div style={{ maxWidth: '300px', border: '1px solid #e2e8f0', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <img style={{ width: '100%', objectFit: 'cover' }} src={pic7} alt="Meaningful alt text for an image that is not purely decorative" />
              <div style={{ padding: '1.5rem' }}>
                <h5 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Pashmina Palette</h5>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CiLocationOn />
                  <p style={{ fontSize: '14px', color: '#4a5568' }}>Kupondole, Lalitpur</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', margin: '0 auto' }}>
            <div style={{ maxWidth: '300px', border: '1px solid #e2e8f0', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <img style={{ width: '100%', objectFit: 'cover' }} src={pic8} alt="Meaningful alt text for an image that is not purely decorative" />
              <div style={{ padding: '1.5rem' }}>
                <h5 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Himalayan Crafts</h5>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CiLocationOn />
                  <p style={{ fontSize: '14px', color: '#4a5568' }}>Thamel, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', margin: '0 auto' }}>
            <div style={{ maxWidth: '300px', border: '1px solid #e2e8f0', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <img style={{ width: '100%', objectFit: 'cover' }} src={pic7} alt="Meaningful alt text for an image that is not purely decorative" />
              <div style={{ padding: '1.5rem' }}>
                <h5 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Kailash Woodworks</h5>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CiLocationOn />
                  <p style={{ fontSize: '14px', color: '#4a5568' }}>Putalisadak, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* blog section */}

      {/* <div className="flex flex-col items-center justify-center h-full mt-20">
        <div className="text-center mt-6 mb-12">
          <p className="text-base text-gray-500 font-semibold font-poppins">
            Blogs
          </p>
        </div>

        <div className="grid grid-cols-12 items-center justify-center gap-4 w-10/12">
          <div className="col-span-7 flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Know about the crafts and story behind it
            </h1>

            <div className="flex flex-col gap-1">
              {" "}
              <h2 className="text-xl font-bold text-gray-500 dark:text-white">
                Showing Artistry
              </h2>
              <p className="text-base font-poppins">
                Artisans can use blog posts to showcase their craftsmanship,
                highlighting the skill and creativity that goes into their work.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-gray-500 dark:text-white">
                Artisan Insights
              </h2>
              <p className="text-base font-poppins">
                Artisans can use their posts to promote cultural exchange and
                understanding through their craft.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {" "}
              <h2 className="text-xl font-bold text-gray-500 dark:text-white">
                Cultural Exchange
              </h2>
              <p className="text-base font-poppins">
                Artisans can share their firsthand knowledge, experiences, and
                expertise related to their craft, offering readers a deeper
                understanding of the craft's intricacies.
              </p>
            </div>
          </div>

          <div className="col-span-5 ml-20 ">
            <div className="max-w-sm bg-grey-400 border rounded-3xl shadow-md overflow-hidden ">
              <img
                className="mx-auto w-30 h-30"
                src={pot}
                alt="Meaningful alt text for an image that is not purely decorative"
              />
              <div className="p-6">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nepali Pottery{" "}
                </h5>
                <div className="flex items-center gap-1">
                  <p className="font-poppins text-sm text-gray-500 ">
                    Nepali pottery is a traditional craft that has been passed
                    down through generations in the foothills of the Himalayas{" "}
                  </p>
                  <CiHeart className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginTop: '20px' }}>
        <div style={{ textAlign: 'center', marginTop: '6px', marginBottom: '12px' }}>
          <p style={{ fontSize: '1rem', color: '#718096', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>Blogs</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4', width: '70%' }}>
          {/* Left Column */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '4' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3748', fontFamily: 'Inter, sans-serif' }}>Know about the crafts and story behind it</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#718096', fontFamily: 'Inter, sans-serif' }}>Showing Artistry</h2>
              <p style={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif', color: '#2d3748' }}>
                Artisans can use blog posts to showcase their craftsmanship, highlighting the skill and creativity that goes into their work.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#718096', fontFamily: 'Inter, sans-serif' }}>Artisan Insights</h2>
              <p style={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif', color: '#2d3748' }}>
                Artisans can use their posts to promote cultural exchange and understanding through their craft.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#718096', fontFamily: 'Inter, sans-serif' }}>Cultural Exchange</h2>
              <p style={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif', color: '#2d3748' }}>
                Artisans can share their firsthand knowledge, experiences, and expertise related to their craft, offering readers a deeper understanding of the craft's intricacies.
              </p>
            </div>
          </div>

          {/* Right Column */}
          {/* <div style={{ gridColumn: 'span 5', marginLeft: '20px' }}>
            <div style={{ maxWidth: '18rem', border: '1px solid #e2e8f0', borderRadius: '1.875rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden' }}>
              <img style={{ margin: 'auto', height: '7.5rem', objectFit: 'cover' }} src={pot} alt="Nepali Pottery" />
              <div style={{ padding: '1.5rem' }}>
                <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748', fontFamily: 'Inter, sans-serif' }}>Nepali Pottery</h5>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', fontFamily: 'Poppins, sans-serif' }}>
                    Nepali pottery is a traditional craft that has been passed down through generations in the foothills of the Himalayas
                  </p>
                  <CiHeart style={{ width: '4rem', height: '4rem' }} />
                </div>
              </div>
            </div>
          </div> */}
          <div style={{ gridColumn: 'span 5', marginLeft: '20px' }}>
            <div style={{ maxWidth: '18rem', border: '1px solid #e2e8f0', borderRadius: '1.875rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', overflow: 'hidden' }}>
              <img style={{ width: '100%', height: '7.5rem', objectFit: 'cover' }} src={pot} alt="Nepali Pottery" />
              <div style={{ padding: '1.5rem' }}>
                <h5 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2d3748', fontFamily: 'Inter, sans-serif' }}>Nepali Pottery</h5>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#4a5568', fontFamily: 'Poppins, sans-serif' }}>
                    Nepali pottery is a traditional craft that has been passed down through generations in the foothills of the Himalayas
                  </p>
                  <CiHeart style={{ width: '4rem', height: '4rem' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FooterPage />

    </>

  )
}

export default LandingPage