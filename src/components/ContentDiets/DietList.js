import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography, Paper} from '@material-ui/core';
import { connect } from 'react-redux';

import DietFilter from './DietFilter';
import DietTable from './DietTable';
import Sidebar from '../Sidebar/index'

const styles = theme => ({
    panelContainer: {

    },
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 2,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});



class DietList extends Component {

    state = {
        /*diets: [],
        types: [],*/
        periods: [7, 14, 28],
        filter: {
            text: '',
            type: '',
            period: '',
        }
    };

    /*componentDidMount() {
        const p1 = fetch('/data/diets.json')
            .then(response => response.json());
        const p2 = fetch('/data/types.json')
            .then(response => response.json());
        Promise.all([p1, p2]).then(([diets, types]) => {
            const periods =
                diets.map(diet => diet.period)
                    .filter((value, index, self) => self.indexOf(value) === index)
                    .sort((a, b) => a - b);
            this.setState({
                diets,
                types,
                periods,
            })
        })
    }*/

    onFilterChanged = filter => {
        this.setState({
            filter: {
                ...this.state.filter,
                text: filter,
            }
        })
    };

    onTypeChanged = type => {
        this.setState({
            filter: {
                ...this.state.filter,
                type: type,
            }
        })
    };

    onPeriodChanged = period => {
        this.setState({
            filter: {
                ...this.state.filter,
                period: period,
            }
        })
    };

    getDiets() {
        return this.props.diets.filter(diet => {
            return diet.name.toLowerCase().includes(this.state.filter.text.toLowerCase())
                && (this.state.filter.type === ''
                    || this.props.types[diet.typeId - 1].name === this.state.filter.type)
                && (this.state.filter.period === ''
                    || diet.period === this.state.filter.period);
        })
    }

    render() {
        const {periods} = this.state;
        const {classes, types} = this.props;

        return (
            <Fragment>
                <div  className={classes.root}>
                <Sidebar/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                <Typography variant='display3'>Lista Diet</Typography>
                <Paper>
                    <DietFilter
                        onFilterChanged={this.onFilterChanged}
                        onTypeChanged={this.onTypeChanged}
                        onPeriodChanged={this.onPeriodChanged}
                        periods={periods}
                        types={types}
                        filter={this.state.filter.text}/>
                </Paper>
                <Paper>
                    <DietTable diets={this.getDiets()} types={types}/>
                </Paper>
                </main>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    diets: state.diets === null
        ? []
        : state.diets,
    types: state.types === null
        ? []
        : state.types,
})

export default connect(
    mapStateToProps
)(withStyles(styles)(DietList));

