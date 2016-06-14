/**
 * External dependencies
 */
import React from 'react';
import { translate as __ } from 'i18n-calypso';
import Button from 'components/button';

/**
 * Internal dependencies
 */
import {
	FormFieldset,
	FormLegend,
	FormTextarea,
	FormLabel,
	FormButton
} from 'components/forms';

import {
	ModuleOptionEnum,
	ModuleOptionBoolean,
	ModuleOptionTextInput
} from './throwme';

import {
	ModuleSettingCheckbox
} from 'components/module-settings/form-components';

import { ModuleSettingsForm } from 'components/module-settings/module-settings-form';

export let SharedaddySettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<ModuleSettingCheckbox name={ 'option_name' } { ...this.props } label={ __( 'Subscriber' ) } />
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="Submit">{ __( 'Save' ) }</Button>
			</form>
		)
	}
} );

SharedaddySettings = ModuleSettingsForm( SharedaddySettings );

export let RelatedPostsSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<ModuleSettingCheckbox
						name={ 'show_headline' }
						label={ __( 'Show a "Related" header to more clearly separate the related section from posts' ) }
						{ ...this.props } />
					<ModuleSettingCheckbox
						name={ 'show_thumbnails' }
						label={ __( 'Use a large and visually striking layout' ) }
						{ ...this.props } />
					<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
				</FormFieldset>
			</form>
		);
	}
} );

RelatedPostsSettings = ModuleSettingsForm( RelatedPostsSettings );

export let SubscriptionsSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<ModuleSettingCheckbox
						name={ "stb_enabled" }
						{ ...this.props }
						label={ __( 'Show a "follow blog" options in the comment form' ) } />
					<ModuleSettingCheckbox
						name={ 'stc_enabled' }
						{ ...this.props }
						label={ __( 'Show a "follow comments" option in the comment form.' ) +
							' (Currently does not work)' } />
					<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
					</FormFieldset>
			</form>
		)
	}
} );

SubscriptionsSettings = ModuleSettingsForm( SubscriptionsSettings );

export let StatsSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<FormLegend>{ __( 'Admin Bar' ) }</FormLegend>
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Put a chart showing 48 hours of views in the admin bar' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend>{ __( 'Registered Users' ) }</FormLegend>
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Administrator' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Editor' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Author' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Contributor' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Subscriber' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend>{ __( 'Smiley' ) }</FormLegend>
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Hide the stats smiley face image' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend>{ __( 'Report Visibility' ) }</FormLegend>
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Administrator' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Editor' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Author' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Contributor' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Subscriber' ) } />
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
			</form>
		);
	}
} );

StatsSettings = ModuleSettingsForm( StatsSettings );

export let ProtectSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<span> { '(Currently does not work)' } </span>
					<FormLegend>{ __( 'Whitelist Management' ) }</FormLegend>
					<FormLabel>
						<span>{ __( 'IP addresses/ranges list' ) }</span>
						<FormTextarea
							name={ 'jetpack_protect_global_whitelist' }
							onChange={ this.props.onOptionChange }
							value={ this.props.getOptionValue( 'jetpack_protect_global_whitelist' ).local } />
					</FormLabel>
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
			</form>
		)
	}
} );

ProtectSettings = ModuleSettingsForm( ProtectSettings );

export let MonitorSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<ModuleSettingCheckbox
						name={ 'monitor_receive_notifications' }
						{ ...this.props }
						label={ __( 'Receive Monitor Email Notifications' ) } />
					<ModuleSettingCheckbox
						name={ 'option_name' }
						{ ...this.props }
						label={ __( 'Emails will be sent to admin address' ) +
						' (Currently does not work)' } />
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
			</form>
		)
	}
} );

MonitorSettings = ModuleSettingsForm( MonitorSettings );

export let SingleSignOnSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<ModuleSettingCheckbox
						name={ 'jetpack_sso_require_two_step' }
						{ ...this.props }
						label={ __( 'Require Two-Step Authentication' ) } />
					<ModuleSettingCheckbox
						name={ 'jetpack_sso_match_by_email' }
						{ ...this.props }
						label={ __( 'Match By Email' ) } />
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
			</form>
		)
	}
} );

SingleSignOnSettings = ModuleSettingsForm( SingleSignOnSettings );

export let CarouselSettings = React.createClass( {
	render() {
		return (
			<form onSubmit={ this.props.onSubmit } >
				<FormFieldset>
					<FormLegend> { __( 'Mobile Promos' ) } </FormLegend>
					<ModuleSettingCheckbox
						name={ 'carousel_display_exif' }
						{ ...this.props }
						label={ __( 'Show photo metadata (Exif) in carousel, when available' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'Background Color' ) }</FormLegend>
					<ModuleOptionEnum option_name={ 'carousel_background_color' } { ...this.props } />
				</FormFieldset>
				<Button disabled={ ! this.props.isDirty() } type="submit" >{ __( 'Save' ) }</Button>
			</form>
		)
	}
} );

CarouselSettings = ModuleSettingsForm( CarouselSettings );

export let InfiniteScrollSettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<ModuleOptionBoolean option_name={ 'infinite_scroll' } { ...this.props } label={ __( 'Scroll infinitely (Shows 7 posts on each load)' ) } />
					<ModuleOptionBoolean option_name={ 'infinite_scroll_google_analytics' } { ...this.props } label={ __( 'Track each infinite Scroll post load as a page view in Google Analytics' ) } />
				</FormFieldset>
			</div>
		)
	}
} );

export let MinilevenSettings = React.createClass( {
	render() {
		return (
			<div>
				<span>{ '(These options currently do not work)' } </span>
				<FormFieldset>
					<FormLegend> { __( 'Excerpts' ) } </FormLegend>
					<ModuleOptionEnum option_name={ 'wp_mobile_excerpt' } { ...this.props } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'Featured Images' ) } </FormLegend>
					<ModuleOptionEnum option_name={ 'wp_mobile_featured_images' } { ...this.props } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'Mobile Promos' ) } </FormLegend>
					<ModuleOptionBoolean option_name={ 'wp_mobile_app_promos' } { ...this.props } label={ __( 'Show a promo for the WordPress mobile apps in the footer of the mobile theme' ) } />
				</FormFieldset>
			</div>
		)
	}
 } );

export let GravatarHovercardsSettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<FormLegend>{ __( 'View people\'s profiles when you mouse over their Gravatars' ) }</FormLegend>
					<span> { '(Currently does not work)' } </span>
					<ModuleOptionEnum option_name={ 'gravatar_disable_hovercards' } { ...this.props } />
				</FormFieldset>
			</div>
		)
	}
} );

export let TiledGallerySettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<ModuleOptionBoolean option_name={ 'tiled_galleries' } { ...this.props } label={ __( 'Display all your gallery pictures in a cool mosaic' ) } />
				</FormFieldset>
			</div>
		)
	}
} );

export let PostByEmailSettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<span> { '(Currently does not work)' } </span>
					<ModuleOptionTextInput option_name={ 'post_by_email_address' } { ...this.props } label={ __( 'Email Address' ) } />
					<FormButton>{ __( 'Regenerate address' ) }</FormButton>
				</FormFieldset>
			</div>
		)
	}
} );

export let CustomContentTypesSettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<ModuleOptionBoolean option_name={ 'jetpack_portfolio' } { ...this.props } label={ __( 'Enable Portfolio Projects for this site' ) } />
					<ModuleOptionBoolean option_name={ 'jetpack_testimonial' } { ...this.props } label={ __( 'Enable Testimonials for this site' ) } />
				</FormFieldset>
			</div>
		)
	}
} );

export let AfterTheDeadlineSettings = React.createClass( {
	render() {
		return (
			<div>
				<FormFieldset>
					<FormLegend> { __( 'Proofreading' ) } </FormLegend>
					<ModuleOptionBoolean option_name={ 'onpublish' } { ...this.props } label={ __( 'A post or page is first published' ) } />
					<ModuleOptionBoolean option_name={ 'onupdate' } { ...this.props } label={ __( 'A post or page is updated' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'English Options' ) } </FormLegend>
					<ModuleOptionBoolean option_name={ 'Bias Language' } { ...this.props } label={ __( 'Bias Language' ) } />
					<ModuleOptionBoolean option_name={ 'Cliches' } { ...this.props } label={ __( 'Cliches' ) } />
					<ModuleOptionBoolean option_name={ 'Complex Expression' } { ...this.props } label={ __( 'Complex Expression' ) } />
					<ModuleOptionBoolean option_name={ 'Diacritical Marks' } { ...this.props } label={ __( 'Diacritical Marks' ) } />
					<ModuleOptionBoolean option_name={ 'Double Negative' } { ...this.props } label={ __( 'Double Negative' ) } />
					<ModuleOptionBoolean option_name={ 'Hidden Verbs' } { ...this.props } label={ __( 'Hidden Verbs' ) } />
					<ModuleOptionBoolean option_name={ 'Jargon Language' } { ...this.props } label={ __( 'Jargon Language' ) } />
					<ModuleOptionBoolean option_name={ 'Passive voice' } { ...this.props } label={ __( 'Passive voice' ) } />
					<ModuleOptionBoolean option_name={ 'Phrases to Avoid' } { ...this.props } label={ __( 'Phrases to Avoid' ) } />
					<ModuleOptionBoolean option_name={ 'Redundant Expression' } { ...this.props } label={ __( 'Redundant Expression' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'Language' ) } </FormLegend>
					<ModuleOptionBoolean option_name={ 'guess_lang' } { ...this.props } label={ __( 'Use automatically detected language to proofread posts and pages' ) } />
				</FormFieldset>
				<FormFieldset>
					<FormLegend> { __( 'Ignored Phrases' ) } </FormLegend>
						<span> { '(Currently does not work)' } </span>
						<ModuleOptionTextInput option_name={ 'ignored_phrases' } { ...this.props } label={ __( 'New phrase' ) } />
				</FormFieldset>
			</div>
		)
	}
} );
