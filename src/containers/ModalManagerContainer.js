// @flow

import {closeModals} from '../reducers/modal';
import {connect} from 'react-redux';
import ModalManager from '../components/ModalManager';
import type {StateType} from '../reducers/types';

const mapStateToProps = (state: StateType) => ({
  data: state.modal.data,
  type: state.modal.type,
});

const mapDispatchToProps = {
  closeModals,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);