import React from 'react'
import './style.scss'

const services = [
    { icon: 'fi flaticon-lawyer', subtitle: 'Free', title: 'Consultation' },
    { icon: 'fi flaticon-scale', subtitle: 'The', title: 'Experts' },
    { icon: 'fi flaticon-network', subtitle: 'Client', title: 'Reviews' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service