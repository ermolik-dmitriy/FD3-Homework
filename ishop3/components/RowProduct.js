import React from 'react';
import PropTypes from 'prop-types';

import './RowProduct.css';

class RowProduct extends React.Component{

    displayName = 'RowProduct';

    static propTypes = {
        nameProd: PropTypes.string.isRequired,
        cardMode: PropTypes.number.isRequired,
        costProd: PropTypes.number.isRequired, 
        urlProd: PropTypes.string.isRequired,
        countProd: PropTypes.number.isRequired,
        cbRowClick: PropTypes.func.isRequired,
        cbButtonClick: PropTypes.func.isRequired,
        cbButtonEditClick: PropTypes.func.isRequired,
        idRow: PropTypes.number.isRequired,
        workModeEditCard:PropTypes.number.isRequired,
        buttonEditDisabled:PropTypes.number.isRequired,
        selectedItemRow:PropTypes.number.isRequired,
    };

    rowClick = () => {
        if(this.props.buttonEditDisabled!=1)
            this.props.cbRowClick(this.props.idRow);
    };

    buttonClick = (EO) => {
        EO.stopPropagation();
        this.props.cbButtonClick(this.props.idRow);
    };

    buttonEditClick = (EO) => {
        EO.stopPropagation();
        this.props.cbButtonEditClick (this.props.idRow);
    }

    render (){
        return (
        (this.props.selectedItemRow!=this.props.idRow)
        ?    
        <tr className='tableBody--row'  onClick={(this.props.workModeEditCard!=2)?this.rowClick:null}>
            <td className='tableRow--cell'>{this.props.nameProd}</td>
            <td className='tableRow--cell'>{this.props.costProd}</td>
            <td className='tableRow--cell'>{this.props.urlProd}</td>
            <td className='tableRow--cell'>{this.props.countProd}</td>
            <td className='tableRow--cell'>
                <button className='button--edit' disabled={(this.props.workModeEditCard==2||this.props.buttonEditDisabled==1)?true:false} onClick={this.buttonEditClick}>Edit</button>
                <button className='button--delete'  disabled={(this.props.cardMode==2)? true:false} onClick={this.buttonClick}>Delete</button>
            </td>
        </tr> 
            :
        <tr className='tableBody--row' style={{backgroundColor:'red'}} onClick={(this.props.workModeEditCard!=2)?this.rowClick:null}>
            <td className='tableRow--cell'>{this.props.nameProd}</td>
            <td className='tableRow--cell'>{this.props.costProd}</td>
            <td className='tableRow--cell'>{this.props.urlProd}</td>
            <td className='tableRow--cell'>{this.props.countProd}</td>
            <td className='tableRow--cell'>
                <button className='button--edit'  disabled={(this.props.workModeEditCard==2||this.props.buttonEditDisabled==1)?true:false} onClick={this.buttonEditClick}>Edit</button>
                <button className='button--delete' disabled={(this.props.cardMode==2)? true:false} onClick={this.buttonClick}>Delete</button>
            </td>
        </tr>);   
    };
}

export default RowProduct;