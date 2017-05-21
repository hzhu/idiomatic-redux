import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/Todos/actions'


const Link = ({ active, onFilterClick, children }) => {
  if (active) {
    return <span>
      {children}
    </span>
  }

  return (
    // eslint-disable-next-line
    <a href="#" onClick={onFilterClick}>
      {children}
    </a>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFilterClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
