import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TextArea from '../../src/components/TextArea';

describe('TextArea', () => {
  it('should render TextArea', () => {
    const tree = renderer.create(
      <TextArea
        size="128"
        color="primary"
        view="flat"
        disabled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render TextArea with height', () => {
    const tree = renderer.create(
      <TextArea
        size="128"
        color="primary"
        view="flat"
        height="200"
        disabled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
