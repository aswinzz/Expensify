import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter , sortByDate , sortByAmount , setStartDate ,setEndDate} from '../actions/filter';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class ExpenseListFilters extends React.Component  {

    state = {
        calenderFocused : null
    };

    onDatesChange = ({ startDate,endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calenderFocused) =>{
        this.setState(()=>({
            calenderFocused
        }));
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{
                    console.log(e.target.value);
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>  
        
                <select onChange={(e)=>{
                    e.target.value==='date' ?  this.props.dispatch(sortByDate(e.target.value)) : this.props.dispatch(sortByAmount(e.target.value));
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={()=>false}
                />

            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        filters : state.filters
    }
};


export default connect(mapStateToProps)(ExpenseListFilters);