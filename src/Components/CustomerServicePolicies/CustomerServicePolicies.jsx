import React from "react";


export  default function CustomerServicePolicies(){
    return(
        <div className="service">
            <div className="exchange">
                <img src="/Image/image22.png" alt="Exchange" />
                <h4 className="service-dark">Easy Exchange Policy</h4>
                <p className="service-light">We offer hassle free exchange policy</p>
            </div>
            <div className="retrun">
                <img src="/Image/image23.png" alt="Return Policy" />
                <h4 className="service-dark">7 Days Return Policy</h4>
                <p className="service-light">We provide 7 days free return policy</p>
            </div>
            <div className="coustomer">
                <img src="/Image/image24.png" alt="Customer Support" />
                <h4 className="service-dark">Best customer support</h4>
                <p className="service-light">we provide 24/7 customer support</p>
            </div>
        </div>
    )
}