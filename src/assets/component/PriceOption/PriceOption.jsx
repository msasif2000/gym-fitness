
import { PropTypes } from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { option_name, price, features } = option;
    return (
        <div className='bg-blue-300 rounded-md p-4 flex flex-col'>
            <h2 className='text-3xl'>Price: <span className='text-5xl'>{price}</span>/month</h2>
            <h4 className='text-2xl'>{option_name}</h4>
            <div className="pl-6 pt-4 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-700 w-full text-center py-2 rounded-lg text-white font-bold text-xl'>Buy Now</button>
        </div>

    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;