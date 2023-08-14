import React, {Component} from 'react';

class MainProps extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {img,title,paragraph,price} = this.props;
        return (
            <>
                <div>
                    <img src={img} alt="Krassovka"/>
                    <h4>{title}</h4>
                    <p>{paragraph}</p>
                    <h4>{price}</h4>
                </div>
            </>
        );
    }
}

export default MainProps;