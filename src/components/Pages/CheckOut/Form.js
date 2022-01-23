import React, { useState } from 'react';

const More = () => {

    const [state, setState] = useState({
        sellerId: "251613945071",
        publishableKey: "119CA759-EA8E-40F7-A4E4-FEDE5E57F1D0",
        ccNo: "",
        expMonth: "",
        expYear: "",
        cvv: ""
    })

    const onSubmita = () => {

        var payWithCard = data => {
            const token = data?.response?.token?.token
            if (token) {
                console.log(token)
                fetch('http://localhost:8080/order', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }

        };

        var error = error => {
            console.log(error);
        };

        window.TCO.loadPubKey("demo", () => {
            window.TCO.requestToken(payWithCard, error, "tcoCCForm");
        });

    }

    return (
        <div>
            <form id="tcoCCForm">
                <input id="sellerId" type="hidden" value='251613945071' />
                <input
                    id="publishableKey"
                    type="hidden"
                    value='119CA759-EA8E-40F7-A4E4-FEDE5E57F1D0'

                />
                <div>
                    <label>
                        <span>Card Number</span>
                        <input
                            id="ccNo"
                            name="ccNo"
                            type="text"
                            required
                            onChange={e => setState({ ...state, ccNo: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Expiration Date (MM/YYYY)</span>
                        <input
                            type="text"
                            size="2"
                            id="expMonth"
                            name="expMonth"
                            required
                            onChange={e => setState({ ...state, expMonth: e.target.value })}
                        />
                    </label>
                    <span> / </span>
                    <input
                        type="text"
                        size="4"
                        id="expYear"
                        name="expYear"
                        required
                        onChange={e => setState({ ...state, expYear: e.target.value })}
                    />
                </div>
                <div>
                    <label>
                        <span>CVC</span>
                        <input
                            id="cvv"
                            name="cvv"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={e => setState({ ...state, cvv: e.target.value })}
                        />
                    </label>
                </div>
                <button type="button" onClick={() => onSubmita()}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default More;