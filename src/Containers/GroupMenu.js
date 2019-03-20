import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
class GroupMenu extends Component {
  render () {
    const { store } = this.props
    return (
      <Menu.Item borderless>
        <h3 style={{ display: 'inline' }}>groups</h3>
        <Icon style={{ cursor: 'pointer', lineHeight: '2' }} name='add' />
        <Menu.Menu borderless>
          {store.groups && store.groups.map((group, index) => this.renderItem(index, group))}
        </Menu.Menu>
      </Menu.Item>
    )
  }
  renderItem (id, group) {
    const { store } = this.props
    return (
      <Menu.Item
        style={{ marginLeft: '1em' }}
        key={id}
        name={group.id}
        onClick={() => { store.currentGroupId = id }}
        active={id === store.currentGroupId}
      >
        <Menu.Header as='h4'>{group.name}</Menu.Header>
      </Menu.Item>
    )
  }
}

export default GroupMenu
