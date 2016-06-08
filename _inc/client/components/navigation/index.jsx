/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import SectionNav from 'components/section-nav';
import NavTabs from 'components/section-nav/tabs';
import NavItem from 'components/section-nav/item';
import Search from 'components/search';
import i18n, { translate as __ } from 'i18n-calypso';
import forEach from 'lodash/forEach';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * Internal dependencies
 */
import QueryModules from 'components/data/query-modules';

const Navigation = React.createClass( {
	getInitialState: function() {
		return {
			navTabsSelectedIndex: 0
		};
	},

	getDefaultProps: function () {
		return {
			navTabs: [
				{
					name: __( 'At a Glance', { context: 'Navigation item.' } ),
					route: '/dashboard',
					path: '#dashboard'
				},
				{
					name: __( 'Engagement', { context: 'Navigation item.' } ),
					route: '/engagement',
					path: '#engagement'
				},
				{
					name: __( 'Security', { context: 'Navigation item.' } ),
					route: '/security',
					path: '#security'
				},
				{
					name: __( 'Health', { context: 'Navigation item.' } ),
					route: '/health',
					path: '#health'
				},
				{
					name: __( 'More', { context: 'Navigation item.' } ),
					route: '/more',
					path: '#more'
				},
				{
					name: __( 'General', { context: 'Navigation item.' } ),
					route: '/general',
					path: '#general'
				}
			]
		}
	},

	demoSearch: function( keywords ) {
		console.log( 'Section Nav Search (keywords):', keywords );
	},

	getSelectedText: function( section ) {
		var selected = this.state[ section + 'SelectedIndex' ],
			text = this.props[ section ][ selected ];

		return 'object' === typeof text ? text.name : text;
	},

	handleNavItemClick: function( index ) {
		return function() {
			var stateUpdate = {};

			stateUpdate[ 'navTabsSelectedIndex' ] = index;
			this.setState( stateUpdate );
		};
	},

	isSelected: function( route ) {
		return this.props.route.path === route;
	},

	render: function() {
		let tabs = [];
		forEach( this.props.navTabs, function( tab, index ) {
			tabs.push( (
				<NavItem
					path={ tab.path }
					selected={ this.isSelected( tab.route ) }
					onClick={ this.handleNavItemClick( index ) }
				>
					{ tab.name }
				</NavItem>
			) );
		}.bind( this ) );

		return (
			<div className='dops-navigation'>
				<QueryModules />
				<SectionNav>
					<NavTabs
						selectedText={ this.getSelectedText( 'navTabs' ) }
					>
						{ tabs }
					</NavTabs>

					<Search
						pinned={ true }
						placeholder="Search doesn't work yet, but you can still write stuff to the console. "
						analyticsGroup="Pages"
						delaySearch={ true }
						onSearch={ this.demoSearch }
					/>
				</SectionNav>
			</div>
		)
	}
} );

export default Navigation;
