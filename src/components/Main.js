import React, {Component} from 'react';
import MainProps from "./MainProps";


// props bu javascriptdagi funksiya
// parametrga o'xshash

// data va qiymatlarini saytni dinamik qilish maqsadida
// bitta komponentdan boshqasiga ko'chirish

// props bu javascript obyekti

// props htmldagi attibute ko'rinishida ishlatiladi

// Ma'lumot almshinuvi otadan bolaga qarab ketadi

// props so'zini kengaytmasi properties dan olingan

class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
                <h1>Products</h1>

                <section>
                    <MainProps
                        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
                        title="Nike"
                        paragraph="The most beautiful and comfotable fitness sneakers"
                        price="$40"
                    />

                    <MainProps
                        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
                        title="Vitike"
                        paragraph="Non-Slip Fitness Leisure Runing Sneakers"
                        price="$100"
                    />

                    <MainProps
                        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
                        title="Aomie"
                        paragraph="The most beautiful and comfotable fitness sneakers"
                        price="$140"
                    />
                </section>


            </div>
        );
    }
}

export default Main;