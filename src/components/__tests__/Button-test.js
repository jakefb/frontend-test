/**
 * These tests are pre-configured with Jest (https://jestjs.io/docs/en/getting-started),
 * and use sinon.js (https://sinonjs.org) for mocking, and React Testing Library
 * (https://testing-library.com/docs/react-testing-library/intro) for testing React
 * components. You are welcome to use these tools, replace with your preferred tools,
 * or write pseudo code to communicate your ideas.
 */
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import Button from '../Button';
import sinon from 'sinon';
import { render, fireEvent } from 'react-testing-library';

describe('<Button/>', () => {
  it('should render as a button element when no type is provided', () => {});

  it('should render as a link element when isLink flag is set', () => {});

  it('should set the `target` prop as the `target` attribute if rendering a link', () => {});

  it('should render as a link element with `rel="external noopener noreferrer"` if the `isExternalLink` prop is true', () => {});

  it('should render as a link element with existing `rel` value intact when `isExternalLink` prop is false', () => {});

  it('should be able to receive and handle an onClick callback', () => {});

  it('should support an href attribute if the button is a link and no click handler has been defined', () => {});

  it('should be able to handle click events for links', () => {});
});
