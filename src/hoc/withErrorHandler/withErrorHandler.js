import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Ox from '../Ox/Ox';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {

    state = {
      error: null
    }


    // register req/resInterceptors so we can eject them later
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    // unmount the interceptors to prevent memory leaks and errors 
    // when multiple instances of this component are mounted
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
        <Ox>
        <Modal 
          show={this.state.error}
          modalClosed={this.errorConfirmedHandler}
        >
          {this.state.error ? this.state.error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
        </Ox>
      );
    }
  }
};

export default withErrorHandler;