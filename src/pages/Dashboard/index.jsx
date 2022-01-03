import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import Divider from '../../components/Divider'
import Styles from './style.module.scss'
import RoundProgress from '../../components/RoundProgress'

const dogImages = [
    '/assets/image.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
]

function Dashboard() {
    const [activeImage, setActiveImage] = useState(dogImages[0])

    return (
        <>
            <section>
                <div className="container">
                    <h1 className={Styles.heading}>Booking Dashboard</h1>
                    <div className='gridContainer'>
                        <div className='one gridChild'>
                            <div className={Styles.titleWrapper}>
                                <h2 style={{ color: '#e74c3c' }}>
                                    $ 456 832
                                </h2>
                                <img src='/assets/down.svg' alt='' className='icon' />
                            </div>
                            <p className={`${Styles.subtitle} uppercase`}>Total Profit Earned</p>
                            <ProgressBar value={89} barColor='#e74c3c' />
                        </div>
                        <div className='two gridChild'>
                            <div className={Styles.titleWrapper}>
                                <h2 style={{ color: '#96e43e' }}>
                                    1472
                                </h2>
                                <img src='/assets/up.svg' alt='' className='icon' />
                            </div>
                            <p className={`${Styles.subtitle} uppercase`}>Total Bookins</p>
                            <ProgressBar value={32} barColor='#96e43e' />
                        </div>
                        <div className='three gridChild'>
                            <div className={Styles.titleWrapper}>
                                <h3 className={Styles.subHeading}>Reservations</h3>
                                <ul className='iconList'>
                                    <li>
                                        <img src='/assets/minimize.svg' alt='' />
                                    </li>
                                    <li>
                                        <img src='/assets/refresh.svg' alt='' />
                                    </li>
                                    <li>
                                        <img src='/assets/close.svg' alt='' />
                                    </li>
                                </ul>
                            </div>
                            <p className={Styles.subtitle}>Reservations overview</p>

                            <div className={Styles.detailsWapper}>
                                <h3>Total Visitors of 23.08.2018</h3>
                                <p>345</p>
                                <div className={Styles.pieWrapper}>
                                    <div>
                                        <ul className={Styles.pieList}>
                                            <li>
                                                <div style={{ backgroundColor: 'rgb(151, 255, 32)' }} />
                                                Completed
                                            </li>
                                            <li><div style={{ backgroundColor: 'rgb(59, 223, 122)' }} />
                                                Online Check-in
                                            </li>
                                            <li><div style={{ backgroundColor: 'rgb(230, 230, 230)' }} />
                                                Remain
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={Styles.pieChart} >
                                        <div />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-link">Download Report</button>
                        </div>
                        <div className='four gridChild'>
                            <div className={Styles.titleWrapper}>
                                <h3 className={Styles.subHeading}>Weekly Stat</h3>
                                <ul className='iconList'>
                                    <li>
                                        <img src='/assets/minimize.svg' alt='' />
                                    </li>
                                    <li>
                                        <img src='/assets/refresh.svg' alt='' />
                                    </li>
                                    <li>
                                        <img src='/assets/close.svg' alt='' />
                                    </li>
                                </ul>
                            </div>
                            <p className={Styles.subtitle}>
                                Top selling items statistic by last month
                            </p>

                            <div className={Styles.roundProgressWrapper}>
                                <div>
                                    <RoundProgress percentage={78} color='#96e43e' />
                                    <p>Customers <br />satisfaction rate</p>
                                </div>
                                <div>
                                    <RoundProgress percentage={25} color='#e74c3c' />
                                    <p>Negative <br />feedback</p>
                                </div>
                            </div>
                            <Divider />
                            <h3 className={Styles.subHeading}>Social Score</h3>
                            <div className={Styles.socialWrapper}>
                                <ProgressBar title='Booking.com' value={87} barColor='#00a8ff' />
                                <ProgressBar title='Airbnb' value={65} barColor='#00a8ff' />
                                <ProgressBar title='Tripadvisor' value={92} barColor='#00a8ff' />
                                <ProgressBar title='Tripadvisor' value={81} barColor='#00a8ff' />
                            </div>
                        </div>
                        <div className={`five gridChild ${Styles.mission}`}>
                            <div >
                                <h2>
                                    Our mission
                                </h2>
                                <p>
                                    We are inspired by the customer's happiness and their ability to travel!
                                </p>
                                <img src='/assets/target.svg' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className={Styles.subHeading}>Product Page</h2>
                    <p className={Styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet!
                    </p>
                    <div className={Styles.grid}>
                        <div className={Styles.images}>
                            <img src={activeImage} alt='' className={Styles.activeImage} />
                            <div className={Styles.thumbnailWrapper}>
                                {
                                    dogImages.map((image, idx) =>
                                        <img src={image}
                                            alt=''
                                            className={Styles.thumbnail}
                                            key={image}
                                            onClick={() => setActiveImage(dogImages[idx])}
                                        />)
                                }
                            </div>
                        </div>
                        <div className={Styles.details}>
                            <h2>French Bull Dog Pillow</h2>
                            <p className={Styles.review}>(38 Reviews)</p>
                            <h3 className={Styles.price}>
                                $17.19 <span>$23</span>
                            </h3>
                            <p className={Styles.productDetail}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, doloremque id sint ad obcaecati animi cum quaerat, totam nulla adipisci vel non amet iste. Ad ullam necessitatibus beatae quibusdam quas!
                            </p>
                            <Divider /><button className='btn btn-primary'>Add to Cart</button>
                            <button className='btn btn-secondary'>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
