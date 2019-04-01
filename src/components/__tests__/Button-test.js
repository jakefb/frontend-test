import 'react-testing-library/cleanup-after-each';
import React from 'react';
import Button from '../Button';
import sinon from 'sinon';
import { render, fireEvent } from 'react-testing-library';

describe('<XUIButton/>', () => {
  it('should render as a button element when no type is provided', () => {});

  it('should render as a link element when isLink flag is set', () => {});

  it('should set the `target` prop as the `target` attribute if rendering a link', () => {});

  it('should render as a link element with `rel="external noopener noreferrer"` if the `isExternalLink` prop is true', () => {});

  it('should render as a link element with existing `rel` value intact when `isExternalLink` prop is false', () => {});

  it('should be able to receive and handle an onClick callback', () => {});

  it('should support an href attribute if the button is a link and no click handler has been defined', () => {});

  it('should be able to handle click events for links', () => {});

  it('should have a role attribute for links which function like buttons', () => {});

  it('should not have a role attribute for links which are only styled like buttons', () => {});
});
