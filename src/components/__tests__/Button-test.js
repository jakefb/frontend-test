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
  it('should render as a button element when no type is provided', () => {
    const { getByText } = render(<Button>Test button</Button>);
    var buttonElement = getByText('Test button');
    expect(buttonElement.nodeName).toBe('BUTTON');
    expect(buttonElement).toMatchSnapshot();
  });

  it('should render as a link element when isLink flag is set', () => {
    const { getByText } = render(<Button isLink={true}>Test link</Button>);
    var buttonElement = getByText('Test link');
    expect(buttonElement.nodeName).toBe('A');
    expect(buttonElement).toMatchSnapshot();
  });

  it('should set the `target` prop as the `target` attribute if rendering a link', () => {
    const { getByText } = render(
      <Button isLink={true} href="https://www.xero.com/nz/" target="_blank">
        Test link with target
      </Button>,
    );
    var buttonElement = getByText('Test link with target');
    expect(buttonElement.getAttribute('target')).toBe('_blank');
    expect(buttonElement).toMatchSnapshot();
  });

  it('should render as a link element with `rel="external noopener noreferrer"` if the `isExternalLink` prop is true', () => {
    const { getByText } = render(
      <Button isLink={true} href="https://www.xero.com/nz/" isExternalLink={true}>
        Test external link
      </Button>,
    );
    var buttonElement = getByText('Test external link');
    expect(buttonElement.getAttribute('rel')).toBe('external noopener noreferrer');
    expect(buttonElement).toMatchSnapshot();
  });

  it('should render as a link element with existing `rel` value intact when `isExternalLink` prop is false', () => {
    const { getByText } = render(
      <Button isLink={true} href="https://www.xero.com/nz/" isExternalLink={false} rel="nofollow">
        Test internal link
      </Button>,
    );
    var buttonElement = getByText('Test internal link');
    expect(buttonElement.getAttribute('rel')).toBe(null);
    expect(buttonElement).toMatchSnapshot();
  });

  it('should be able to receive and handle an onClick callback', () => {
    var testMethod = {
      method: function(test) {
        return test;
      },
    };
    var mock = sinon.mock(testMethod);
    mock
      .expects('method')
      .once()
      .withExactArgs('foo bar');
    const { getByText } = render(
      <Button
        onClick={() => {
          testMethod.method('foo bar');
        }}
      >
        Test onClick
      </Button>,
    );
    var buttonElement = getByText('Test onClick');
    fireEvent.click(buttonElement);
    mock.verify();
    expect(buttonElement).toMatchSnapshot();
  });

  it('should support an href attribute if the button is a link and no click handler has been defined', () => {
    const { getByText } = render(
      <Button isLink={true} href="https://www.xero.com/nz/">
        Link with href attribute
      </Button>,
    );
    var buttonElement = getByText('Link with href attribute');
    expect(buttonElement.getAttribute('href')).toBe('https://www.xero.com/nz/');
    expect(buttonElement).toMatchSnapshot();
  });

  it('should be able to handle click events for links', () => {
    const { getByText } = render(
      <Button isLink={true} href="https://www.xero.com/nz/">
        Link with href attribute
      </Button>,
    );
    var buttonElement = getByText('Link with href attribute');
    var eventTargetHref = null;
    buttonElement.addEventListener('click', event => {
      eventTargetHref = event.target.href;
    });
    fireEvent.click(buttonElement);
    expect(eventTargetHref).toBe('https://www.xero.com/nz/');
    expect(buttonElement).toMatchSnapshot();
  });
});
