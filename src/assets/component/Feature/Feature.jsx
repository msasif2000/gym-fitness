import {PropTypes} from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            
            <p className='flex  items-center gap-1'><AiFillCheckCircle className='text-green-700 text-xl'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.array.isRequired
};
export default Feature;