import React from "react";

export default function Header() {
    
    return (
        <div
            style={{
                backgroundColor: "#dd0034",
                color: '#fff',
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position:'sticky',
                top:0
            }}
        >
            To Spend &nbsp;  <b> $128,000,000,000</b> &nbsp;  You have money
        </div>
    );
}

