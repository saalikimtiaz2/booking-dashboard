import React from 'react'
import ProgressBar from '../../components/ProgressBar'
import Divider from '../../components/Divider'
import Styles from './style.module.scss'
import RoundProgress from '../../components/RoundProgress'

function Dashboard() {
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
                            hello
                        </div>
                        <div className={Styles.details}>
                            <h2>French Bull Dog Pillow</h2>
                            <p>(38 Reviews)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
