import React from 'react';
import { connect } from 'react-redux';
import {Button ,Grid, Paper} from '@mui/material';
import { increment, decrement, incrementAsync } from '../sagas/counterSaga';


const Counter = ({ count, increment, decrement }) => {

  return (
    <div>
        <Paper elevation={12}
                sx={{
                    width: 400,
                    padding: "50px 50px 50px 50px",
                    margin: "auto",
                    marginTop: "80px",
                }}
            >
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={increment}>
            Increment
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={decrement}>
            Decrement
          </Button>
        </Grid>
        <Grid item>
          <p>Count: {count}</p>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
