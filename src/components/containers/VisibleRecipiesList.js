import RecipiesList from '../ui/RecipiesList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        recipies: state.recipies
    }
};

const VisibleRecipiesList = connect(mapStateToProps)(RecipiesList);
 
export default VisibleRecipiesList; 